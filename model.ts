export interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export interface Publication {
  imageURL: string;
  description: string;
  author: User;
}