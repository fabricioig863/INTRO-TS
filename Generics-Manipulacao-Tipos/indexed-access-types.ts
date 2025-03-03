

const MyArray = [
  {surname: "Fabricio", age: 28},
  {surname: "Lucas", age: 48},
  {surname: "Giovanna", age: 19}
]

type Person = typeof MyArray[number];

const user: Person = {
  surname: 'Pedro',
  age: 30
}

console.log(user)