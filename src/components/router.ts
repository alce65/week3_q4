import { Component } from './component';
import { Greetings } from './greetings';
import './router.scss';

export class Router extends Component {
  path: string;
  constructor(selector: string) {
    super(selector);
    this.path = location.pathname;
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    if (this.path === '/') {
      const elements = [new Greetings('main')];
      console.log('Router', elements);
    }
  }

  createTemplate() {
    let html = '<main>';

    switch (this.path) {
      case '/products.html':
        html += `<h2>Products</h2>`;
        break;
      case '/clients.html':
        html += `<h2>Clients</h2>`;
        break;
      case '/about.html':
        html += `<h2>About</h2>`;
        break;
      default:
        html += `<h2>Home</h2>`;
        break;
    }

    html += '</main>';
    return html;
  }
}
