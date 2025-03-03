// Type Aliases (type) and Interface

// type Person = {
//   firstName: string;
//   lastName: string;
// }

/* 
  95% dos casos não temos diferença na pratica do dia a dia como dev, porém 
  existe algumas diferenças entre elas, por exemplo: 

  interface {
    firstOne: Podemos declarar duas interfaces com o mesmo nome onde o typescript vai juntar as duas interfaces, como se fosse 
    um merge, isso acontece porque declarei ambas interfaces com o mesmo nome.
    Performance: Interface é mais performatica na hora de compilar.
  }
*/

interface Person {
  firstName: string;
  lastName: string;
}

interface User extends Person {
  email: string;
}

type PersonData = {
  age: number;
} & User;

function getFullName(person: PersonData): string | undefined {
  const ObjectData = Object.entries(person).map(([key, value]) => `${key}: ${value}`).join(", ");
  return ObjectData;
}

//Structural type system -> Sistema de tipo estrutural
const person: PersonData = {
  firstName: "Fabricio",
  lastName: "Ignacio",
  email: "fabricioig863@gmail.com",
  age: 28,
};

const fullName = getFullName(person);
console.log(fullName)

/* 
  Em JavaScript e TypeScript, todos os valores podem ser classificados como “truthy” ou “falsy”.
    •	“Truthy” são os valores que, quando avaliados em um contexto booleano (como dentro de uma condição if), são tratados como true. Ou seja, qualquer valor que não seja falsy é considerado truthy.
    •	“Falsy” são os valores que, quando avaliados em um contexto booleano, são tratados como false.

  Aqui estão alguns exemplos de valores falsy:
    •	false
    •	0 (zero)
    •	"" (string vazia)
    •	null
    •	undefined
    •	NaN (Not a Number)

  Então, qualquer valor que não seja um desses exemplos acima, será considerado truthy. Aqui estão alguns exemplos de valores truthy:
    •	Qualquer número diferente de 0 (como 1, -5, 100, etc.)
    •	Qualquer string não vazia (como "abc", "0", etc.)
    •	Objetos, arrays, funções (mesmo que vazios, como {} ou [])
    •	Qualquer outro valor que não esteja na lista de falsy

  Para verificar se um valor é Falsy usamos a exclamação no javascript, invertendo a lógica de verificação na condição do if por exemplo:
  if (!person.age) {
  // Isso será executado se person.age for "falsy" (como null, undefined, etc.)
  console.log("Idade não informada");
}
*/