import { renderFooter } from './footer';
import { renderHeader } from './header';
import './main.scss';
import { renderMenu } from './menu';
import { MenuOption } from './types';

function main() {
  console.log('Loaded main');

  const menuOptions: MenuOption[] = [
    { label: 'Home', path: '/' },
    { label: 'Productos', path: '/products.html' },
    { label: 'Clientes', path: '/clients.html' },
    { label: 'Acerca de', path: '/about.html' },
  ];

  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  renderHeader(appElement);
  renderMenu(appElement, menuOptions);
  appElement.innerHTML += 'Products';
  renderFooter(appElement);
}

main();
