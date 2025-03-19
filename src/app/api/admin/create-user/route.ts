import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/utils/firebase-admin';

export async function POST(request: NextRequest) {
  try {
    // Check for API key to secure this endpoint
    const apiKey = request.headers.get('x-api-key');
    const expectedApiKey = process.env.ADMIN_API_KEY;

    if (!apiKey || apiKey !== expectedApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Create the user in Firebase Auth
    const userRecord = await adminAuth.createUser({
      email,
      password,
    });

    // Set custom claims to mark as admin
    await adminAuth.setCustomUserClaims(userRecord.uid, { admin: true });

    return NextResponse.json({
      message: 'Admin user created successfully',
      uid: userRecord.uid,
    });
  } catch (error: unknown) {
    console.error('Error creating admin user:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create admin user',
        message: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
} 