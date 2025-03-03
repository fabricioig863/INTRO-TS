// null (nulo) => representa ausencia de valor 
// undefined (não definido) => nem um valor foi atribuido.

let value1;
// console.log(typeof value1);

value1 = null;

console.log(typeof value1);

/* 
  Aqui quando damos um typeof no null ele retorna um object devido há um bug
  no javascript que tem desde há primeira versão da linguagem, isso acontece porque 
  na epoca da construção da linguagem, ela tinha 32bits que eram unidades de valores 
  que utilizamos para representar um valor dentro do javascript, então cada bit representa
  zero ou um, há menor unidade computacional que temos.
  Então os tres primeiros valores eles eram utilizados pra dizer qual o tipo de valor que 
  está vindo, e nesse caso, de um há 3 bits para o compilador poder fazer as operaçãoes de forma correta.
  E foi arbitrariamente definido que zero, zero, zero representava o tipo objeto. Então quando definiamos um valor
  nulo, todos os valores seguintes ficavam zeros, fazendo com que o compilador do javascript se confundisse e entregasse 
  um valor que não é o tipo definido corretamente. 
*/

function hello(value: string | null | undefined){
  if(value){
    console.log("Hello, " + value.toUpperCase())
  }
}


hello(null)