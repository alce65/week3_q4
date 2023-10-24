/* eslint-disable no-unused-vars */
export const add = (a: number, b: number): number => a + b;

console.log(add(1, 7));

// Raro const aData: Array<string | number> = [];
// const aData: (string | number)[] = [];

type MyType = string | number;

const aData: MyType[] = [];

aData.push('pepe');
aData.push(22);

console.log(aData);

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: 'Pepe',
  age: 34,
};

type ArithmeticFunction = (a: number, b: number) => number;

const product: ArithmeticFunction = (a, b) => a * b;

// eslint-disable-next-line arrow-body-style
const subtraction = (a: unknown, b: number) => {
  if (typeof a !== 'number') throw new Error('Invalid data');
  return a - b;
};

subtraction('pepe', 99);
