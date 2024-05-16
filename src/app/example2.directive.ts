import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExample2]',
  standalone: true
})
export class Example2Directive {

  constructor(private templateRef : TemplateRef<any>
    , private ViewContainerRef: ViewContainerRef) { 
      this.ViewContainerRef.createEmbeddedView(this.templateRef)
      this.ViewContainerRef.createEmbeddedView(this.templateRef)
      this.ViewContainerRef.createEmbeddedView(this.templateRef)
    }

}
