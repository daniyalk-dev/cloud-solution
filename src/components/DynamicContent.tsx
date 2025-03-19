'use client';

import { ContentField } from '@/types/content';

type DynamicContentProps = {
  fields: ContentField[];
};

export default function DynamicContent({ fields }: DynamicContentProps) {
  if (!fields || fields.length === 0) {
    return null;
  }

  return (
    <div className="dynamic-content">
      {fields.map((field) => (
        <div key={field.id} className="mb-4">
          {field.type === 'text' && (
            <div>
              <h3 className="text-lg font-medium mb-2">{field.label}</h3>
              <p>{field.value}</p>
            </div>
          )}

          {field.type === 'textarea' && (
            <div>
              <h3 className="text-lg font-medium mb-2">{field.label}</h3>
              <div className="whitespace-pre-line">{field.value}</div>
            </div>
          )}

          {field.type === 'image' && (
            <div>
              <h3 className="text-lg font-medium mb-2">{field.label}</h3>
              <div>
                <img 
                  src={field.value}
                  alt={field.label}
                  className="max-w-full max-h-64 object-cover rounded-md"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 