export type UserType = {
  name: string;
  passwd: string;
  age: string;
};

export interface UserStructure {
  name: string;
  passwd: string;
  age: string;
}

export interface Repo {
  getAll: () => string[];
  create: (_value: string) => void;
}

export class FileRepo implements Repo {
  data: string[];
  constructor(data: string[]) {
    this.data = data;
  }

  getAll() {
    // Implementación del método
    return this.data.map((item) => item.toLowerCase());
  }

  create(value: string): void {
    console.log(value);
  }
}
