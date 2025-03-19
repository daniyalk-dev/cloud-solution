'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { PageContent, ContentField } from '@/types/content';
import ContentEditor from '../_components/ContentEditor';

export default function ClientPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [fields, setFields] = useState<ContentField[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddField = (type: ContentField['type']) => {
    const newField: ContentField = {
      id: Date.now().toString(),
      type,
      label: '',
      value: '',
    };
    setFields([...fields, newField]);
  };

  const handleUpdateField = (id: string, updates: Partial<ContentField>) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const handleRemoveField = (id: string) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !slug.trim()) {
      setError('Title and slug are required');
      return;
    }

    if (fields.some(field => !field.label.trim())) {
      setError('All fields must have a label');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const pageData: Omit<PageContent, 'id'> = {
        title,
        slug,
        lastUpdated: Date.now(),
        fields,
      };

      await addDoc(collection(db, 'pages'), pageData);
      router.push('/admin');
    } catch (err) {
      console.error('Error creating page:', err);
      setError('Failed to create page');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create New Page</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Page Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
              Page Slug (URL path)
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">/</span>
              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Content Fields</h2>
            <ContentEditor
              fields={fields}
              onUpdateField={handleUpdateField}
              onRemoveField={handleRemoveField}
            />
          </div>

          <div className="mb-6">
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => handleAddField('text')}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Text Field
              </button>
              <button
                type="button"
                onClick={() => handleAddField('textarea')}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Text Area
              </button>
              <button
                type="button"
                onClick={() => handleAddField('image')}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Image
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={() => router.push('/admin')}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Page'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 