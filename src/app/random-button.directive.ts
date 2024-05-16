import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomButton]',
  standalone: true
})
export class RandomButtonDirective {
  random = 0;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onHover() {
    const button = this.el.nativeElement;
    console.log('clicked')
    this.random++;

    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
  }

}
