import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; align-items: center; justify-content: center;">
      <div>
        <div>Hello World! This is the {{ title }} app.</div>
        <button style="margin: 20px;" (click)="getLazy1()">lazy 1</button>
        <button style="margin: 20px;" (click)="getLazy2()">lazy 2</button>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'lazy-comp';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.viewContainerRef.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }
}
