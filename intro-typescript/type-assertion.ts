/* 
  Afirmações de Tipo - Type Assertions
  palavra "as" = "como"

  As vezes, voce terá informações sobre o 
  tipo de um valor que o Typescript não consegue conhecer.
*/

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    zipCode: string;
  }
}

const value = { firstName: "Fabricio" } as Person;
console.log(value.address.zipCode)


// const value = <Person>{ firstName: "Fabricio", address: { zipCode: ''}}

// 1 - algo que acontece em tempo de execução ou fator externo

// 2 - criando mocks para testes automatizados.

/* 
 Afirmações de Tipo (Type Assertions) no TypeScript

O tipo as no TypeScript é utilizado para afirmar explicitamente o tipo de uma variável. 
Em outras palavras, é como se você estivesse dizendo ao TypeScript: “Eu sei o tipo desse valor melhor do que você”. 
Isso é útil quando o TypeScript não consegue inferir o tipo automaticamente e você tem informações suficientes para 
garantir que o valor seja de um tipo específico.

Por exemplo, imagine que temos o seguinte tipo Person:

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    zipCode: string;
  }
}

E você deseja criar um objeto do tipo Person, mas o TypeScript não consegue inferir todas as propriedades de 
forma automática. Usando a afirmação de tipo com as, você pode afirmar que o objeto value é do tipo Person, 
mesmo que nem todas as propriedades estejam definidas inicialmente:

const value = { firstName: "Fabricio" } as Person;

O código acima afirma que o objeto value é do tipo Person, mas falta uma propriedade obrigatória (address), 
o que pode causar um erro em tempo de execução.

O Problema com Tipos Incompletos

Quando você faz uma afirmação de tipo, como no exemplo acima, 
o TypeScript não faz nenhuma validação real sobre o conteúdo do objeto. 
Ou seja, ele não verifica se todas as propriedades estão presentes ou se são válidas. 
Por isso, se você tentar acessar uma propriedade ausente, o TypeScript pode permitir que o código seja 
executado sem erro de compilação, mas isso pode levar a problemas em tempo de execução.

Por exemplo:

console.log(value.address.zipCode);

Nesse caso, o TypeScript vai permitir que você acesse address.zipCode, mas, como address não foi definido, 
isso resultará em undefined, o que pode causar um erro ou comportamento inesperado no seu código.

Conclusão

O as é útil para afirmar tipos quando você tem certeza do tipo de um valor, mas deve ser usado com cuidado. 
O TypeScript não verifica se o valor realmente contém todas as propriedades necessárias do tipo declarado. 
Isso pode causar erros em tempo de execução, como no exemplo onde tentamos acessar uma propriedade de um objeto que não foi completamente definido. 
O uso excessivo de afirmações de tipo pode levar a problemas difíceis de depurar, pois o TypeScript não faz a verificação completa.

Agora, sua explicação está mais clara e explica bem o comportamento do as no TypeScript, incluindo os riscos de usar afirmações de tipo sem garantir que o objeto tenha todas as propriedades necessárias.
*/