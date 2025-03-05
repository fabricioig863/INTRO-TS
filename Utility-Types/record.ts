

type ButtonVariantStyle = "danger" | "primary" | "secondary"

type ButtonStyleProps = {
  backgroundColor: string;
  isEnabled: boolean;
  style: {
    color: string,
    text: string,
    size: number,
  }
}


const button: Record<ButtonVariantStyle, ButtonStyleProps> = {
  danger: {
    backgroundColor: "#FFFFFF",
    isEnabled: true,
    style: {
      color: "black",
      text: "Aqui está alguma coisa",
      size: 29
    }
  },
  primary: {
    backgroundColor: "#000000",
    isEnabled: false,
    style: {
      color: "black",
      text: "Aqui está alguma coisa",
      size: 29
    }
  }, 
  secondary: {
    backgroundColor: "#888888",
    isEnabled: true,
    style: {
      color: "black",
      text: "Aqui está alguma coisa",
      size: 29
    }
  }
}

console.log(button['danger'])

// Record<Keys, Type> - Usado para mapear propriedades de um tipo para outro tipo

type ButtonVariant = "primary" | "danger" | "disable";

type ButtonStyle = {
  backgroundColor: string;
  //   borderColor: string;
  isEnabled: boolean;
};

function getButtonStyle(variant: ButtonVariant): ButtonStyle {
  switch (variant) {
    case "primary":
      return { backgroundColor: "#8158F9", isEnabled: true };
    case "danger":
      return { backgroundColor: "#DC3545", isEnabled: true };
    case "disable":
      return { backgroundColor: "#CCC", isEnabled: false };
    default:
      return { backgroundColor: "#FFF", isEnabled: true };
  }
}

getButtonStyle("primary");

const buttonStyles: Record<ButtonVariant, ButtonStyle> = {
  primary: { backgroundColor: "#8158F9", isEnabled: true },
  danger: { backgroundColor: "#DC3545", isEnabled: true },
  disable: { backgroundColor: "#CCC", isEnabled: false },
};

function renderButton(title: string, variant: ButtonVariant) {
  const style = buttonStyles[variant];
  return console.log(style, title)
}

renderButton('Fabricio', "primary")