'use client';

import { useState } from 'react';
import { ContentField } from '@/types/content';

type ContentEditorProps = {
  fields: ContentField[];
  onUpdateField: (id: string, updates: Partial<ContentField>) => void;
  onRemoveField: (id: string) => void;
};

export default function ContentEditor({ fields, onUpdateField, onRemoveField }: ContentEditorProps) {
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  
  const handleImageUpload = async (id: string, file: File, existingPath?: string) => {
    if (!file) return;
    
    try {
      setUploading({ ...uploading, [id]: true });
      
      // Create form data for upload
      const formData = new FormData();
      formData.append('file', file);
      
      // If there's an existing path, include it to delete the old file
      if (existingPath) {
        formData.append('existingPath', existingPath);
      }
      
      // Upload to our API route
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      
      const data = await response.json();
      
      // Update the field with the image path
      onUpdateField(id, { value: data.path });
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading({ ...uploading, [id]: false });
    }
  };
  
  if (fields.length === 0) {
    return (
      <div className="text-center py-6 bg-gray-50 border border-dashed border-gray-300 rounded-md">
        <p className="text-gray-500">No content fields added yet. Add a field to get started.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.id} className="p-4 border border-gray-300 rounded-md">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="mr-2 py-1 px-2 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                {field.type === 'text' && 'Text'}
                {field.type === 'textarea' && 'Text Area'}
                {field.type === 'image' && 'Image'}
                {field.type === 'richtext' && 'Rich Text'}
              </div>
              <input
                type="text"
                value={field.label}
                onChange={(e) => onUpdateField(field.id, { label: e.target.value })}
                placeholder="Field Label"
                className="border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => onRemoveField(field.id)}
              className="text-red-600 hover:text-red-900"
            >
              Remove
            </button>
          </div>
          
          {field.type === 'text' && (
            <input
              type="text"
              value={field.value}
              onChange={(e) => onUpdateField(field.id, { value: e.target.value })}
              placeholder="Text value"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          
          {field.type === 'textarea' && (
            <textarea
              value={field.value}
              onChange={(e) => onUpdateField(field.id, { value: e.target.value })}
              placeholder="Text content"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          
          {field.type === 'image' && (
            <div>
              {field.value ? (
                <div className="mb-2">
                  <img 
                    src={field.value}
                    alt={field.label}
                    className="max-h-40 object-contain rounded-md"
                  />
                </div>
              ) : null}
              
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleImageUpload(field.id, e.target.files[0], field.value);
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={uploading[field.id]}
              />
              {uploading[field.id] && (
                <div className="mt-2 text-blue-600">Uploading...</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 