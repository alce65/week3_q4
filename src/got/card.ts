import { Advisor } from './model/advisor';
import { Category } from './model/character';
import { Fighter } from './model/fighter';
import { King } from './model/king';
import { Squire } from './model/squire';

export type AnyCharacter = King | Fighter | Advisor | Squire;

function makeExtraData(item: AnyCharacter) {
  let result = '';
  if (item instanceof King) {
    result = `<li>Años de reinado: ${item.kingdomYears}</li>`;
  } else if (item instanceof Fighter) {
    result = `
      <li>Arma: ${item.weapon}</li>
      <li>Destreza: ${item.skill}</li>`;
  } else if (item instanceof Advisor) {
    result = `
      <li>Sirve a: ${item.advisorBoss.name}</li>`;
  } else {
    result = `
        <li>Peloteo: ${item.servilityGrade}</li>
        <li>Asesora a: ${item.patron.name}</li>`;
  }

  return result;
}

function makEmoji(category: Category) {
  switch (category) {
    case 'King':
      return '👑';
    case 'Fighter':
      return '🗡';
    case 'Advisor':
      return '🎓';
    default:
      return '🛡';
  }
}

export function card(item: AnyCharacter) {
  const template = `
  <li class="character col">
    <div class="card character__card">
      <img src="/img/${item.name.toLowerCase()}.jpg" alt="${item.name} ${
    item.family
  }" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
    item.family
  }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age} años</li>
            <li>
              Estado: ${
                item.isAlive
                  ? `<i class="fas fa-thumbs-up">`
                  : `<i class="fas fa-thumbs-down">`
              }
              </i>
              </i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
              ${makeExtraData(item)}
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">${makEmoji(item.category)}</i>
    </div>
  </li>
`;

  return template;
}
