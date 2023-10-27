import { Component } from '../../components/component';
import { getTasks, createTask } from '../data/api.repo';
import { setTasks } from '../data/repo';
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
    console.log('Fist Load');
    console.log(this.tasks);
    this.render();
  }

  async loadTasks() {
    this.tasks = await getTasks();
    console.log('Load from API');
    console.log(this.tasks);
    this.clear();
    this.render();
  }

  async addTask(task: Partial<Task>) {
    // Asíncrona -> API
    const newTask = await createTask(task);
    // Síncrono -> Vista
    this.tasks = [...this.tasks, newTask];

    this.clear();
    this.render();
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
