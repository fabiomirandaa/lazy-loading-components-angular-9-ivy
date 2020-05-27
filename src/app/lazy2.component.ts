import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Lazy2aComponent } from './lazy2a.component';
import { Lazy2bComponent } from './lazy2b.component';

@Component({
  template: `
    <p>lazy2 component</p>
  `,
})
export class Lazy2Component implements OnInit, OnDestroy {
  teste = 'Isso é muito legal';

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
