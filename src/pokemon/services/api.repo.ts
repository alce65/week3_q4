import { ApiResult, FreePokemon, FullPokemon } from '../model/pokemon';

export class ApiRepo {
  urlBase: string;
  count!: number;
  constructor() {
    this.urlBase = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getAll(): Promise<ApiResult> {
    const response = await fetch(this.urlBase);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);

    const data: ApiResult = await response.json();

    const allPromises = data.results.map(async (item): Promise<FullPokemon> => {
      const response = await fetch(item.url);
      return response.json();
    });

    const dataFullPokemon = await Promise.all(allPromises);

    data.results.forEach((element, i: number) => {
      element.image = dataFullPokemon[i].sprites.front_default[0];
    });

    return data;
  }

  async getById(id: string): Promise<FreePokemon> {
    const response = await fetch(this.urlBase + id);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);

    return response.json();
  }
}
