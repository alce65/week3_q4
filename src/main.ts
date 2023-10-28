import { Footer } from './components/footer';
import { Header } from './components/header';
import './main.scss';
import { Router } from './components/router';
import { MenuOption } from './types';

function main() {
  console.log('Loaded main');

  const menuOptions: MenuOption[] = [
    { label: 'Home', path: '/' },
    { label: 'Productos', path: '/products.html' },
    { label: 'Clientes', path: '/clients.html' },
    { label: 'GoT', path: '/got.html' },
    { label: 'ToDo', path: '/todo.html' },
    { label: 'Acerca de', path: '/about.html' },
  ];

  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  const components = [
    new Header('#app', menuOptions),
    new Router('#app'),
    new Footer('#app'),
  ];

  console.log(components);
}

main();
