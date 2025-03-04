type MyArrayProps = MyArrayPropsT[]

interface MyArrayPropsT {
  surname: string;
  age: number;
}

const MyArray: MyArrayProps = [
  {surname: "Fabricio", age: 28},
  {surname: "Lucas", age: 48},
  {surname: "Giovanna", age: 19}
]

type Person = typeof MyArray[number];

const firstUser: typeof MyArray[0] = MyArray[0]
// console.log(firstUser)

const user: Person = {
  surname: 'Pedro',
  age: 30
}

// console.log(user)

function getUserListArray<T, Key extends keyof T>(value: T[], key: Key ): T[Key][]{
  return value.map(item => item[key]);
}


console.log(getUserListArray(MyArray, "surname"))