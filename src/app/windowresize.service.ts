import { Injectable } from '@angular/core';
import { ScreenSizes } from './screensizes.model';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {
  handleWindowResize(element: string) {
    const pageElement = document.getElementById(element);
    if (pageElement && element === 'project-one-img') {
      (<HTMLImageElement>pageElement).src = window.innerWidth < ScreenSizes.small ? 'assets/images/HomePageMobile.png' : 'assets/images/Zygarden.png';
    } else if (pageElement && element === 'project-two-img') {
      (<HTMLImageElement>pageElement).src = window.innerWidth < ScreenSizes.small ? 'assets/images/SleepVisualizerMobile.png' : 'assets/images/SleepVisualizer.png';
    } else if (pageElement && element === 'project-three-img') {
      (<HTMLImageElement>pageElement).src = window.innerWidth < ScreenSizes.small ? 'assets/images/ReplayVisualizerMobile.png' : 'assets/images/ReplayVisualizer.png';
    }
  }
}
