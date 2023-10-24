export function router(appElement: HTMLElement) {
  console.log(location.pathname);
  const path = location.pathname;
  appElement.innerHTML += '<main>';

  switch (path) {
    case '/products.html':
      appElement.innerHTML += `<h2>Products</h2>`;
      break;
    case '/clients.html':
      appElement.innerHTML += `<h2>Clients</h2>`;
      break;
    case '/about.html':
      appElement.innerHTML += `<h2>About</h2>`;
      break;
    default:
      appElement.innerHTML += `<h2>Home</h2>`;
      break;
  }

  appElement.innerHTML += '</main>';
}
