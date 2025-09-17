export type BreadcrumbItem = {
  label: string;
  url: string;
  queryParams?: Record<string, string>;
};

export type Breadcrumb = BreadcrumbItem[];