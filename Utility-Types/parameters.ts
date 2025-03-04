
import { User } from "./utility-models";

// Parameters (Parâmetros) - Extrair o tipo de um parâmetro de uma função

// type UserEmail = Pick<User, "email" | "firstName">
// vem de um terceiro
function sendEmail(user: Pick<User, "email" | "firstName">, message: string) {}

type SendEmailFn = typeof sendEmail;
/**
 * tuple (tupla): é um array de comprimento fixo
 * com tipos específicos atribuídos a cada elemento.
 * Ele permite que você defina o tipo exato
 * e a ordem dos elementos no array.
 */
type SendEmailParams = Parameters<SendEmailFn>;
// [user: Pick<User, "email" | "firstName">, message: string]

function sendWelcomeEmail(user: SendEmailParams[0]) {
  sendEmail(user, "welcome to advanced typescript");
}

sendWelcomeEmail({ email: "lucas@coffstack.com", firstName: "Lucas" });



// import { User } from "./utility-models";

// // Parameters (Parâmetros) - Extrair o tipo de um parâmetro de uma função

// // type UserEmail = Pick<User, "email" | "firstName">
// // vem de um terceiro
// function sendEmail(message: string) {
//   sendWelcomeEmail([message])
// }

// type SendEmailFn = typeof sendEmail;
// /**
//  * tuple (tupla): é um array de comprimento fixo
//  * com tipos específicos atribuídos a cada elemento.
//  * Ele permite que você defina o tipo exato
//  * e a ordem dos elementos no array.
//  */
// type SendEmailParams = Parameters<SendEmailFn>;
// // [user: Pick<User, "email" | "firstName">, message: string]

// function sendWelcomeEmail(message: SendEmailParams) {
//   sendEmail(message[0]);
// }

// const message: string = "Fabricio"

// sendWelcomeEmail([message]);

