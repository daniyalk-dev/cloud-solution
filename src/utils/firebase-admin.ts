import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Make sure private key is properly formatted
const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  : '';

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
  privateKey: privateKey,
};

try {
  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    });
    console.log('Firebase Admin SDK initialized successfully');
  }
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error);
  // Don't throw the error - allow the app to continue even if admin SDK fails
}

const adminAuth = getAuth();
const adminDb = getFirestore();

export { adminAuth, adminDb }; 