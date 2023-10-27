import './card.scss';
import { Component } from '../../components/component';
import { Task } from '../model/task';

export class Card extends Component {
  task: Task;
  deleteTask: (_id: Task['id']) => void;
  updateTask: (_id: Task['id'], _task: Task) => void;
  constructor(
    selector: string,
    task: Task,
    deleteTask: (_id: Task['id']) => void,
    updateTask: (_id: Task['id'], _task: Task) => void
  ) {
    super(selector);
    this.task = { ...task };
    this.deleteTask = deleteTask;
    this.updateTask = updateTask;
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  handleDelete() {
    this.deleteTask(this.task.id);
  }

  handleCheck() {
    this.task.isCompleted = !this.task.isCompleted;
    this.updateTask(this.task.id, this.task);
  }

  render() {
    super.render();
    const button = this.element.lastElementChild as HTMLButtonElement;
    button.addEventListener('click', this.handleDelete.bind(this));
    const check = this.element.children[3].firstElementChild;
    check?.addEventListener('change', this.handleCheck.bind(this));
  }

  createTemplate() {
    return `
    <li class="task-card">
      <p><span>ID:</span> ${this.task.id} </p>
      <p><span>Name:</span> ${this.task.name} </p>
      <p><span>Owner:</span> ${this.task.owner} </p>
      <p>
        <input id="completed" type='checkbox' ${
          this.task.isCompleted && 'checked'
        }  >
        <label for="completed">Completada</label>
      </p>
      <p role="button">🗑️</p>
    </li>
      `;
  }
}
