// keyof Type Operator - Produz um novo tipo a partir da união das chaves de um 
// objeto

import {lucas, publication1} from "../data";
import { User } from "../model";

type UserKey = "firstName" | "lastName" | "email";
function getUserList<T>(user: T, key: keyof T) {
  return user[key];
}


function getListUserData<T, Key extends keyof T>(value: T, key: Key): T[Key] {
  return value[key]
}


const Fabricio: User = {
  firstName: "Fabricio",
  lastName: "Ignacio",
  email: "fabricioig863@gmail.com",
  age: 28
}


console.log(getListUserData(Fabricio, "firstName" ))
// console.log(getListUserData(Fabricio, "email" ))
// console.log(getListUserData(Fabricio, "lastName" ))
// console.log(getListUserData(Fabricio, "age" ))
// console.log(getListUserData(Fabricio, "name" ))



