// Generic Constraints - Restrições Genéricas
// genérico mas nem tanto, quando definido eu tenho que respeitar a restrição 
// tanto no nome da propriedade quanto no tipo da propriedade, neste caso o length 
// ele existe dentro da variavel que estou passando que é uma string.

type TypeConstraints = {
  length: number;
}

function loggingIdentify<Type extends TypeConstraints>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const value: string = "value";
loggingIdentify(value);