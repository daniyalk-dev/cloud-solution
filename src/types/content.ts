export type ContentField = {
  id: string;
  type: 'text' | 'textarea' | 'image' | 'richtext';
  label: string;
  value: string;
};

export type PageContent = {
  id: string;
  title: string;
  slug: string;
  lastUpdated: number;
  fields: ContentField[];
};

export type PageContentMap = {
  [key: string]: PageContent;
}; 