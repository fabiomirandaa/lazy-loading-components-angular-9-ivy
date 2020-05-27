import { Component, OnDestroy } from '@angular/core';

@Component({
  template: ` <p>lazy1 component</p> `,
})
export class Lazy1Component implements OnDestroy {
  ngOnDestroy() {
    console.log('Destruiu component 1');
  }
}
