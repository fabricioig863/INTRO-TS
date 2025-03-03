// No contexto de uma expressão (JavaScript)
console.log(typeof "hello world");

// "typeof" Type Operator - No contexto de um type, para referenciar o tipo de uma variável ou propriedade

type Colors = typeof lightMode;

const lightMode = {
  success: "#28A745",
  danger: "#DC3545",
  warning: "#FFC107",
  info: "#17A2b8",
  primary: "#8158F9",
};


const darkMode: Colors = {
  success: "#28A745",
  danger: "#DC3545",
  warning: "#FFC107",
  info: "#17A2b8",
  primary: "#8158F9",
};