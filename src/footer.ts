import './footer.scss';

export function renderFooter(parenElement: HTMLElement) {
  parenElement.innerHTML += `
  <footer>
    <address>ISDI - Coders</address>
  </footer>`;
}
