import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '@/utils/firebase';
import fs from 'fs/promises';

// Helper function to get current user
async function getCurrentUser(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value;
  
  // Check if session exists - in a real app, validate this properly
  // For demonstration, we'll just check if the cookie exists
  if (!sessionCookie) {
    return null;
  }

  try {
    // This is a placeholder. In a real app, validate the session token
    // with Firebase or your auth provider
    // const decodedToken = await auth.verifySessionCookie(sessionCookie);
    // return decodedToken;
    return { isAdmin: true }; // Simplified for demo
  } catch (error) {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Authentication check
    const user = await getCurrentUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const existingPath = formData.get('existingPath') as string | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Delete the old file if an existing path is provided
    if (existingPath) {
      try {
        const existingFilePath = path.join(process.cwd(), 'public', existingPath);
        await unlink(existingFilePath).catch(err => console.error('Delete error:', err));
      } catch (error) {
        console.error('Error deleting existing file:', error);
      }
    }

    // Generate a unique filename
    const fileExtension = path.extname(file.name);
    const fileName = `${uuidv4()}${fileExtension}`;
    const relativePath = `/images/uploads/${fileName}`;
    const filePath = path.join(process.cwd(), 'public', relativePath);
    
    // Create directory if it doesn't exist
    const dirPath = path.dirname(filePath);
    await fs.mkdir(dirPath, { recursive: true });

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Write file to public directory
    await writeFile(filePath, buffer);

    return NextResponse.json({ path: relativePath });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
} 