export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  items?: MenuItem[];
}
