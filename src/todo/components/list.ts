import { Component } from '../../components/component';
import { getTasks, setTasks } from '../data/repo';
import { Task } from '../model/task';
import { Add } from './add';
import { Card } from './card';
import './list.scss';
export class List extends Component {
  tasks: Task[];
  constructor(selector: string) {
    super(selector);
    this.tasks = [];
    this.loadTasks();
    this.render();
  }

  loadTasks() {
    this.tasks = getTasks();
  }

  addTask(task: Task) {
    this.tasks = [...this.tasks, task];
    this.saveTasks();
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
    this.saveTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((item) => item.id !== task.id);
    this.saveTasks();
  }

  saveTasks() {
    setTasks(this.tasks);
    this.clear();
    this.render();
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    const elements = [new Add('details', this.addTask.bind(this))];
    console.log(elements);
    return this.tasks.map(
      (item) =>
        new Card(
          'ul.todo-list',
          item,
          this.deleteTask.bind(this),
          this.updateTask.bind(this)
        )
    );
  }

  createTemplate() {
    return `
    <div>
      <details>
        <summary>Añadir</summary>
      </details>
      <ul class="todo-list"></ul>    
    </div>
    `;
  }
}
