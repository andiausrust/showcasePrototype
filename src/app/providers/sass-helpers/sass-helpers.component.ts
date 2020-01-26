import {Component, ViewEncapsulation} from '@angular/core';

export const PREFIX = '--';

@Component({
  selector: 'app-sass-helpers',
  template: '<div></div>',
  styleUrls: ['./sass-helpers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SassHelpersComponent {

  constructor() {

  }

  // Read the custom property of body section with given name:
  readProperty(name: string): string {
    const bodyStyles = window.getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(PREFIX + name);
  }

}
