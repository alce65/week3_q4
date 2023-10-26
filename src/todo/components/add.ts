import { Component } from '../../components/component';
import { Task } from '../model/task';
export class Add extends Component {
  addTask: (_task: Task) => void;
  constructor(selector: string, addTask: (_task: Task) => void) {
    super(selector);
    this.addTask = addTask;
    this.template = this.createTemplate();
    this.render();
  }

  handleSubmit(event: Event) {
    const form = this.element as HTMLFormElement;
    event.preventDefault();

    const newTask: Task = {
      id: crypto.randomUUID(),
      isCompleted: false,
      name: (form.elements.namedItem('title') as HTMLInputElement).value,
      owner: (form.elements.namedItem('owner') as HTMLInputElement).value,
    };
    this.addTask(newTask);
  }

  render() {
    super.render();
    this.element.addEventListener('submit', this.handleSubmit.bind(this));
  }

  createTemplate() {
    return `
      <form aria-label="add-task">
        <legend>Añadir tarea</legend>
        <input type="text" name="title" placeholder="Describe la tarea" required />
        <input type="text" name="owner" placeholder="Responsable de la tarea" required />
        <button type="submit">Añadir</button>
      </form>`;
  }
}
