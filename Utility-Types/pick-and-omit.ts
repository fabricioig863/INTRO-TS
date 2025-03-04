import { User } from "./utility-models";

// Pick<Type, Keys> and Omit<Type, Keys>
// Pegar<Tipo, Chaves> e Omitir<Tipo, Chaves>

type UserPreviewKeys = "firstName" | "lastName" | "profileImageUrl";
type UserPreview = Pick<User, UserPreviewKeys>;

const user: UserPreview = {
  firstName: "John",
  lastName: "Doe",
  profileImageUrl: "https://example.com/johndoe.jpg",
};

// Omit<Type, Keys>
type UserForm = Omit<User, "id" | "isOnline">;

const userForm: UserForm = {
  email: "lucas@coffstack.com",
  firstName: "Lucas",
  lastName: "Coff",
  phoneNumber: "123456789",
  profileImageUrl: "https://example.com/lucas.jpg",
};




// import { User } from '../model'

// type UserPreview = Pick<User, "firstName" | "lastName" | "age">

// const user: UserPreview = {
//   firstName: "Fabricio",
//   lastName: "Ignacio",
//   age: 28
// }

// console.log(user)


// type UserOmit = Omit<User, "firstName" | "lastName">


// const userData: UserOmit = {
//   age: 28,
//   email: "fabricio@gmail.com"
// }

// console.log(userData)