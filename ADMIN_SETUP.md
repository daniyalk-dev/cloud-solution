# Admin Panel Setup Guide

This guide explains how to set up the admin panel, which functions as a headless CMS for managing page content.

## Prerequisites

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firebase Authentication, Firestore Database, and Storage
3. Set up the Authentication to allow Email/Password sign-in
4. Create a web app in your Firebase project and get the configuration details

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables (replace with your Firebase project details):

```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="your_private_key"

# API Security
ADMIN_API_KEY=create_a_secure_random_string_here
```

For the Firebase Admin SDK credentials:
1. Go to Firebase Console > Project Settings > Service Accounts
2. Click "Generate new private key"
3. Download the JSON file and use its values for `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and `FIREBASE_PRIVATE_KEY`

## Creating the First Admin User

Use the following curl command to create the first admin user (replace with your values):

```bash
curl -X POST http://localhost:3000/api/admin/create-user \
  -H "Content-Type: application/json" \
  -H "x-api-key: your_admin_api_key" \
  -d '{"email": "admin@example.com", "password": "secure_password"}'
```

Or use a tool like Postman to send a POST request to `/api/admin/create-user` with:
- Header: `x-api-key: your_admin_api_key`
- Body: `{"email": "admin@example.com", "password": "secure_password"}`

## Accessing the Admin Panel

1. Start the development server with `npm run dev`
2. Navigate to `http://localhost:3000/admin/login`
3. Log in with the admin email and password you created

## Using the Admin Panel

The admin panel allows you to:

1. Create new content pages
2. Edit existing content pages
3. Delete content pages
4. Add different types of content fields:
   - Text fields
   - Text areas (for longer content)
   - Image fields (uploads to Firebase Storage)

Each page has:
- A title
- A slug (the URL path to access the page)
- Custom content fields you define

## Displaying Content in Your Frontend

To display the content in your frontend pages:

```tsx
'use client';

import { usePageContent } from '@/custom-hooks/usePageContent';
import DynamicContent from '@/components/DynamicContent';

export default function MyPage() {
  const { content, loading, error } = usePageContent('your-page-slug');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <DynamicContent fields={content.fields} />
    </div>
  );
}
```

## Security Rules

Make sure to set up proper security rules in Firebase:

1. In Firestore Database: Only allow authenticated admin users to read/write to the `pages` collection
2. In Storage: Allow public read access but only admin users should have write access

Example Firestore rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /pages/{pageId} {
      allow read: if true;  // Public read access
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

Example Storage rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /content-images/{imageId} {
      allow read: if true;  // Public read access
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
``` 