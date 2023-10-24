import { Character } from './character.js';

export class Fighter extends Character {
  skill: number;
  weapon: string;

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    skill: number
  ) {
    super(name, family, age);

    this.weapon = weapon;
    this.skill = skill;
    this.personalQuote = 'Primero pego y luego pregunto';
    this.category = 'Fighter'
  }
}
