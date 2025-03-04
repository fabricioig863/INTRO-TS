// null (nulo) => representa ausencia de valor 
// undefined (não definido) => nem um valor foi atribuido.

let value1;
// console.log(typeof value1);

value1 = null;

console.log(typeof value1);

/* 
  No JavaScript, o typeof null retorna "object" devido a um erro na implementação original da linguagem. 
  Esse erro está relacionado à forma como o JavaScript internamente armazena e classifica os tipos de dados.

  Como o erro aconteceu?

  Na versão inicial do JavaScript, os valores eram representados internamente por um sistema baseado em 32 bits. 
  Nessa estrutura, uma parte dos bits era usada para indicar o tipo de dado.
	•	Nos primeiros três bits, o JavaScript usava um identificador para determinar se um valor era um objeto ou outro 
    tipo de dado.
	•	Foi convencionado que o identificador 000 (três bits zerados) representaria objetos.

  O problema ocorre porque, internamente, o valor null era armazenado como todos os bits zerados (00000000). 
  Isso fez com que o interpretador do JavaScript o classificasse erroneamente como um objeto, já que os três 
  primeiros bits eram 000, o mesmo identificador reservado para objetos.

  Por que não foi corrigido?

  Embora esse erro seja conhecido há muito tempo, corrigir esse comportamento poderia quebrar códigos existentes que 
  dependem desse retorno. Por isso, mesmo nas versões mais modernas do JavaScript, typeof null ainda retorna "object".

  Resumo
	•	typeof null === "object" acontece por um erro histórico na forma como os tipos foram representados em 32 bits.
	•	O null é armazenado internamente como 00000000, o que faz o interpretador categorizá-lo incorretamente como um objeto.
	•	Esse erro não foi corrigido para evitar problemas de compatibilidade com códigos antigos.
*/

function hello(value: string | null | undefined){
  if(value) {
    console.log("Hello, " + value.toUpperCase())
  }
}


hello(undefined)