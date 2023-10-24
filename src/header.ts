import './header.scss';

export function renderHeader(parentElement: HTMLElement) {
  parentElement.innerHTML += `
  <header>
    <h1>Learning Typescript</h1>
  </header>
`;
}
