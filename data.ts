import { Publication, User } from "./model";

export const lucas: User = {
  firstName: "Lucas",
  lastName: "Garcez",
  email: "lucas@coffstack.com",
  age: 28
};

export const mateus: User = {
  firstName: "Mateus",
  lastName: "Silva",
  email: "mateus_silva@gmail.com",
  age: 26
};

export const users: User[] = [lucas, mateus];

export const publication1: Publication = {
  imageURL: "fake-url-1",
  description: "description 1",
  author: lucas,
};

export const publications: Publication[] = [
  {
    imageURL: "fake-url-1",
    description: "description 1",
    author: lucas,
  },
  {
    imageURL: "fake-url-2",
    description: "description 2",
    author: mateus,
  },
  {
    imageURL: "fake-url-3",
    description: "description 3",
    author: lucas,
  },
];