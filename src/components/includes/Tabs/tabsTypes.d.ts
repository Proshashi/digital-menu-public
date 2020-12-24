export interface TabItemProps {
  id?: string;
  image?: {
    _128x128: string;
  };
  category?: string;
  description?: string;
  price?: number;
  name?: string;
}

export interface TabsRenderProps {
  title: string;
  category: string;
  items: TabItemProps[];
  type: string;
}
