interface Todo {
  title: string;
  description: string;
  done: boolean;
}

const task: Todo = {
  title: "Learn React",
  description: "learn the best web framework (Library?)",
  done: false
}

// Já aqui o typescript pega o nosso erro quando estamos passando 
// o tipo Readonly, evitando pegarmos o erro em tempo de compilação.
const taskCopy: Readonly<Todo> = task;
// taskCopy.description = "outro valor";

console.log(task);

Object.freeze(task);

// Aqui ele me dá o erro somente em tempo de execução 
// o que seria muito ruim pra nós quando estamos desenvolvendo.
task.title = "Learn Typescript"
console.log(task);


function ArrayObject(title: string, description: string): Readonly<Todo> {
  return { title, description, done: false}
}

const newTask = ArrayObject("Typescript", "Learn Typescript here in coffstack")

// newTask.done = true


type ReadonlyArray = Readonly<string[]>;

const myList: ReadonlyArray = ["Item 1", "Item 2"]
// myList.push("Item 1") // Não posso alterar o valor pois as propriedades são somente de leitura.