import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  mode: string = 'light';

  toggleMode() {
    const element = <HTMLElement | null> document.getElementById('main');
    if (this.mode === 'dark' && element) {
      this.mode = 'light';
      element.classList.remove('mode-dark');
    } else if (this.mode === 'light' && element) {
      this.mode = 'dark';
      element.classList.add('mode-dark');
    }
  }

  getClassName = (type: string) => {
    if (type === 'project-details' && this.mode === 'dark') {
      return `${type}-light`;
    } else if (type ==='project-title' && this.mode === 'dark') {
      return `${type}-light`;
    } else {
      return `${type}`
    }
  }
}
