import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomCounter]',
  standalone: true
})


export class RandomCounterDirective {
  
  
  constructor(private renderer: Renderer2) { }
  number = 0;
  @HostListener('click') onClick() {
    const counter = this.renderer.createElement('div');
    this.number++;

    this.renderer.addClass(counter, 'counter');
    this.renderer.setStyle(counter, 'position', 'absolute');
    this.renderer.setStyle(counter, 'left', Math.random() * window.innerWidth + 'px');
    this.renderer.setStyle(counter, 'top', Math.random() * window.innerHeight + 'px');
    this.renderer.setProperty(counter, 'innerText', this.number);
    const color = this.getRandomColor();
    this.renderer.setStyle(counter, 'color', color)
    this.renderer.appendChild(document.body, counter);
  }

  private getRandomColor() {
    var color = Math.floor(Math.random() * 16777215).toString(16);
    while (color.length < 6) {
        color = '0' + color;
    }
    return '#' + color;
}
}
