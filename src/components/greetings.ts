import { Component } from './component';

export class Greetings extends Component {
  message: string;
  counter: number;
  constructor(selector: string) {
    super(selector);
    this.counter = 0;
    this.message = '';
    this.manageComponent();
    console.dir(this);
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  handleButton() {
    const user = this.element.querySelector('input')?.value;
    this.counter++;
    this.message = ` ${this.counter} Hola amigo ${user}`;
    console.log('Handle Button');
    console.dir(this);
    this.clear();
    this.manageComponent();
  }

  render() {
    super.render();
    const buttonElement = this.element.querySelector('button');
    buttonElement?.addEventListener('click', this.handleButton.bind(this));
  }

  createTemplate() {
    return ` 
    <section aria-label="greetings">
      <p>${this.message}</p>
      <div>
        <input type="text" placeholder="Dime tu nombre">
      </div>
      <button>Saludar</button>
    </section>
    `;
  }
}
