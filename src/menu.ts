import { MenuOption } from './types';

export function renderMenu(parenElement: Element, options: MenuOption[]) {
  let list = '<ul>';
  list += options
    .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
    .join('');
  list += '</ul>';

  parenElement.innerHTML += list;
}
