/* 
  Generics (genéricos) - Capacidade de criar código (funcão, classe, tipos)
  que funcionam em uma variedade de tipos ao em vez de apenas um.

  type variable - variável de tipo
*/

function identify<Type>(args: Type): Type {
  return args;
} 

const argString: string = "value";

const value0 = identify(argString);
const value = identify("value");
const value1 = identify<string>("value");
const value2 = identify<number>(3);
