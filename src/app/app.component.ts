import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <div>
        <div>Hello World! This is the {{ title }} app.</div>
        <button style="margin: 20px;" (click)="getLazy1()">lazy 1</button>
        <button style="margin: 20px;" (click)="getLazy2()">lazy 2</button>
      </div>

      <ng-template #childContainer></ng-template>
    </div>
  `,
})
export class AppComponent {
  @ViewChild('childContainer', { read: ViewContainerRef }) container;
  title = 'lazy-comp';

  constructor(
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.container.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    this.container.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    this.container.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    this.container.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }
}
