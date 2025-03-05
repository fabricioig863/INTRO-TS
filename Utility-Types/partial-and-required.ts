// Partial<Type> Constructs a type with all properties of Type set to optional
// Required<Type> Constructs a type consisting of all properties of Type set to required.
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const lucas: User = {
  id: "1",
  name: "Lucas",
  email: "lucas@coffstack.com",
};
const updated = updateUser(lucas, { email: "garcez@coffstack.com" });
console.log(updated);

// type User = {
//   id: string;
//   name?: string;
//   email?: string;
// };

interface User {
  id: string;
  name?: string;
  email?: string;
}

type UserFieldsRequired = Omit<User, "name" | "email"> & {
  name: string;
  email: string;
}

function sendWelcomeEmail(user: User) {
  const userFieldValue: UserFieldsRequired = {
    ...user,
    name: user.name ?? "Fabricio",
    email: user.email ?? "fabricio@gmail.com"
  }
  const body = createBody(userFieldValue.name);
  sendEmail(userFieldValue.email, body);
}

function createBody(name: string): string {
  return `Hi ${name}`;
}

function sendEmail(email: string, body: string) {
  console.log(`sending ${body} to ${email}`);
}

const user: User = {
  id: "12345",
  name: "Lucas",
}

sendWelcomeEmail(user)