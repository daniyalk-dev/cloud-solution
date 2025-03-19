import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { PageContent } from '@/types/content';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
): Promise<Response> {
  try {
    const { slug } = params;

    // Query Firestore for the page with the matching slug
    const pagesCollection = collection(db, 'pages');
    const q = query(
      pagesCollection,
      where('slug', '==', slug),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }
    
    // Get the first (and only) document
    const doc = querySnapshot.docs[0];
    const pageData = {
      id: doc.id,
      ...doc.data()
    } as PageContent;
    
    return NextResponse.json(pageData);
  } catch (error) {
    console.error('Error fetching page content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch page content' },
      { status: 500 }
    );
  }
} 