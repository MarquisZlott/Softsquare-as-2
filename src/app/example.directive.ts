import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample]',
  standalone: true
})
export class ExampleDirective {

  constructor(private el: ElementRef) { 

  }
@HostListener('mouseenter') onHover() {
  this.el.nativeElement.style.backgroundColor = 'orange'
}

@HostListener('mouseleave') onLeave() {
  this.el.nativeElement.style.backgroundColor = 'gray'
}

}

