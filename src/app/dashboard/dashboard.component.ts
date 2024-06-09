import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WindowResizeService } from '../windowresize.service';
import { debounceTime, fromEvent } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mode: string = 'light';
  isMobileScreenshots = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private windowResizeService: WindowResizeService
  ) { }

  ngOnInit() {
    const element = <HTMLElement | null> document.getElementById('main');
    if (element?.classList.contains('mode-dark')) {
      this.mode = 'dark';
    }
  }

  ngAfterViewInit() {
    this.handleWindowResize();
    fromEvent(window, 'resize').pipe(debounceTime(200), untilDestroyed(this)).subscribe(() => { this.handleWindowResize(); });
  }

  handleWindowResize() {
    this.windowResizeService.handleWindowResize('project-one-img');
    this.windowResizeService.handleWindowResize('project-two-img');
  }

  toggleMode() {
    const element = <HTMLElement | null> document.getElementById('main');
    if (this.mode === 'dark' && element) {
      this.mode = 'light';
      element.classList.remove('mode-dark');
      element.classList.remove('text-dark');
    } else if (this.mode === 'light' && element) {
      this.mode = 'dark';
      element.classList.add('mode-dark');
      element.classList.add('text-dark');
    }
  }

  getClassName(type: string) {
    if (type === 'project-details' && this.mode === 'dark') {
      return `${type}-light`;
    } else if (type ==='project-title' && this.mode === 'dark') {
      return `${type}-light`;
    } else {
      return `${type}`
    }
  }

  showMobileScreenshots() {
    this.isMobileScreenshots = !this.isMobileScreenshots;
  }

  navigateToWebsite(isSleepVisualizer: boolean) {
    this.document.location.href = `https://aschambers.github.io/${isSleepVisualizer ? 'sleep-visualizer' : 'replay-visualizer'}`;
  }
}
