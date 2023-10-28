import { Component } from '../../components/component';
import { ApiRepo } from '../data/api.repo';
import { Task } from '../model/task';
import { Add } from './add';
import { Card } from './card';
import './list.scss';

export class List extends Component {
  tasks: Task[];
  repo: ApiRepo;
  constructor(selector: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.tasks = [];
    this.loadTasks();
    console.log('Fist Load');
    console.log(this.tasks);
    this.render();
  }

  async loadTasks() {
    try {
      this.tasks = await this.repo.getTasks();
      console.log('Load from API');
      console.log(this.tasks);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async addTask(task: Partial<Task>) {
    try {
      // Asíncrona -> API
      const newTask = await this.repo.createTask(task);
      // Síncrono -> Vista
      this.tasks = [...this.tasks, newTask];
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async updateTask(id: Task['id'], task: Partial<Task>) {
    try {
      // Asíncrona -> API
      const updatedTask = await this.repo.updateTask(id, task);
      // Síncrono -> Vista
      this.tasks = this.tasks.map((item) =>
        item.id === updatedTask.id ? updatedTask : item
      );
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async deleteTask(id: Task['id']) {
    try {
      // Asíncrona -> API
      await this.repo.deleteTask(id);
      // Síncrono -> Vista
      this.tasks = this.tasks.filter((item) => item.id !== id);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
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
