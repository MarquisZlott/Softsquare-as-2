import { Component } from '@angular/core';
import { BoredService } from './bored.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-http-service',
  standalone: true,
  imports: [HttpClientModule, JsonPipe],
  providers: [BoredService],
  templateUrl: './http-service.component.html',
  styleUrl: './http-service.component.css'
})
export class HttpServiceComponent {
  data: any

  constructor(private service : BoredService) {
    this.service.getFact().subscribe(value=> {
      console.log(value)
      this.data = value
    })
  }


}
