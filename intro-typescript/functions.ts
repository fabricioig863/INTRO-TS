function sum(value1: number, value2: number, flag?: boolean): number {
  if(flag){
    return value1 + value2;
  } else {
    return 0;
  }
}

const total = sum(3, 2, true)

console.log("Total:", total)