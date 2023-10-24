import { MenuOption } from '../types';
import { Component } from './component';
import './menu.scss';

export class Menu extends Component {
  options: MenuOption[];
  constructor(selector: string, options: MenuOption[]) {
    super(selector);
    this.options = options;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    let list = '<nav><ul>';
    list += this.options
      .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
      .join('');
    list += '</ul></nav>';
    return list;
  }
}
