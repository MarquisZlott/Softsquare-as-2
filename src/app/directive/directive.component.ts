import { Component } from '@angular/core';
import { ExampleDirective } from '../example.directive';
import { Example2Directive } from '../example2.directive';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [ExampleDirective, Example2Directive],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

}
