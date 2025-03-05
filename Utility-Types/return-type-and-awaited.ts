import { User } from "./utility-models";

// Return Type (Tipo do Retorno)
async function sendEmail(params: Pick<User, "email" | "firstName">, message: string): Promise<string> {
  return message;
}

type Return = Awaited<ReturnType<typeof sendEmail>>

type T1 = Promise<string>

type T2 = Awaited<T1>

type T3 = Awaited<boolean | Promise<Pick<User, "id" | "email">>>

// const user: T3 = {
//   email: "fabricio@gmail.com",
//   id: "1234444"
// }

// console.log(user);

// Outro exemplo 

async function getUser(): Promise<{ name: string; isActive: boolean }> {
  return { name: "Fabricio", isActive: true };
}

type UserType = Awaited<ReturnType<typeof getUser>>;

// UserType será { name: string; age: number }

const user: UserType = {
  name: "Lucas",
  isActive: false
};

console.log(user);