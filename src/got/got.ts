import { AnyCharacter, card } from './card';
import './css/styles.css';
import { repo } from './data/repo';

function main() {
  const appElement = document.querySelector<HTMLDivElement>('.app');
  if (appElement === null) return;

  let htmlText = '<ul class="characters-list row list-unstyled">';

  htmlText += repo()
    .map((item) => card(item as AnyCharacter))
    .join();
  htmlText += '</ul>';

  appElement.innerHTML = htmlText;
}

main();
