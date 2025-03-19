import { useState, useEffect } from 'react';
import { PageContent } from '@/types/content';

export default function usePageContent(slug: string) {
  const [content, setContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/content/${slug}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch page content: ${response.statusText}`);
        }
        
        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error('Error in usePageContent:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchContent();
    }
  }, [slug]);

  return { content, loading, error };
} 