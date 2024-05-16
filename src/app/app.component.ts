import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShareService } from './share.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpServiceComponent } from './http-service/http-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, FormsModule, ReactiveFormComponent,DirectiveComponent, PipeComponent, HttpServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

constructor(private shareService: ShareService) {

  this.shareService.observable.subscribe(result => {
    console.log("Log from app component: " + result);
  });

}

  title = 'angular-workshop-app';
  productName?: string = "test"

  numberInput?: number;

  alert(message: string) {
    // alert(message)
    this.shareService.subject.next('abc')
  }
}
