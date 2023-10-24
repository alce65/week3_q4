export type Category = 'King' | 'Fighter' | 'Advisor' | 'Squire';

export abstract class Character {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  protected personalQuote: string;
  category!: Category;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = true;
    this.personalQuote = '';
  }

  talk() {
    return this.personalQuote;
  }

  dead() {
    this.isAlive = false;
  }
}

export interface CharacterStructure {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  personalQuote: string;
  category: 'King' | 'Fighter' | 'Advisor' | 'Squire';
  kingdomYears?: number;
  skill?: number;
  weapon?: string;
  patron?: CharacterStructure;
  servilityGrade?: number;
  advisorBoss?: CharacterStructure;
}
