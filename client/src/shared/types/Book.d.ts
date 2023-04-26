export interface Book {
  id: string;
  title: string;
  author: Author;
  cover?: string;
}

export interface Author {
  name: string;
}