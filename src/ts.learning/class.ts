// ES2015

class Person {
  static counter = 0;
  static foo() {
    console.log('Método estático');
  }

  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hola, soy ${this.name}, y tengo ${this.age} años`);
  }
}

const user2 = new Person('Ernestina', 24);
console.log(user2);
user2.greeting();
const user3 = new Person('Ramón', 26);
// Error user3.height = 178;
// Error delete user3.age;
console.log(user3);
user3.greeting();

const userRaro: { [key: string]: string | number } = { ...user2 };
userRaro.height = 178;
delete userRaro.age;

class Alumno extends Person {
  course: string;
  constructor(name: string, age: number, curse: string) {
    super(name, age);
    this.course = curse;
  }

  greeting() {
    super.greeting();
    console.log(`Estudio ${this.course}`);
  }
}

const user4 = new Alumno('Luisa', 28, 'Angular');
console.log(user4);
user4.greeting();

Person.foo();
