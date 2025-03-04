/* 
  Usamos o noImplicitAny no tsconfig para que qualquer valor 
  como uma variavel ou parametros de uma função seja atribuida uma
  tipagem, que não seja o tipo any por padrão definido pelo typescript.
  Isso garante uma segurança no código quando estamos trabalhando com
  typescript.
*/


function sum(value1: number, value2: number, flag?: boolean): number {
  if(flag){
    return value1 + value2;
  } else {
    return 0;
  }
}

const total = sum(3, 2, true)

console.log("Total:", total)