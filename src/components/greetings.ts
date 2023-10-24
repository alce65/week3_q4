import { Component } from './component';

export class Greetings extends Component {
  message: string;
  constructor(selector: string) {
    super(selector);
    this.message = '';
    this.manageComponent();
  }

  handleButton() {
    this.message = 'Hola amigo';
    console.dir(this);
    this.clear();
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
    const buttonElement = this.element.querySelector('button');
    buttonElement?.addEventListener('click', this.handleButton.bind(this));
  }

  createTemplate() {
    return ` 
    <section>
      <p>${this.message}</p>
      <button>Saludar</button>
    </section>
    `;
  }
}
