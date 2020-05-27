import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy,
  // ViewChild
} from '@angular/core';
import { Lazy2aComponent } from './lazy2a.component';
import { Lazy2bComponent } from './lazy2b.component';

@Component({
  template: `
    <p>lazy2 component</p>
    <!-- template #childContainer></template -->
  `,
})
export class Lazy2Component implements OnInit, OnDestroy {
  // @ViewChild("childContainer", { read: ViewContainerRef }) container;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const componentFactorya = this.cfr.resolveComponentFactory(Lazy2aComponent);
    const componentFactoryb = this.cfr.resolveComponentFactory(Lazy2bComponent);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactorya);
    this.viewContainerRef.createComponent(componentFactoryb);
  }

  ngOnDestroy() {
    console.log('destruiu component 2');
  }
}
