import { Character } from './character.js';

export class King extends Character {
  kingdomYears: number;
  parent!: string;

  constructor(name: string, family: string, age: number, years: number) {
    super(name, family, age);
    this.kingdomYears = years;
    this.personalQuote = 'Vais a morir todos';
    this.category = 'King';
  }
}
