import { Character } from './character.js';

export class Advisor extends Character {
  advisorBoss: Character;

  constructor(
    name: string,
    family: string,
    age: number,
    advisorBoss: Character
  ) {
    super(name, family, age);
    this.advisorBoss = advisorBoss;
    this.personalQuote = 'No sé por qué, pero creo que voy a morir pronto';
    this.category = 'Advisor';
  }
}
