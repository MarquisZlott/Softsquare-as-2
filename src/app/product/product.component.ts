import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ShareService } from '../share.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private shareService: ShareService) {

    this.shareService.observable.subscribe(result => {
      console.log("Log from app component: " + result);
    });
  
  }

  @Input()
  get productName() {
    return this._productName;
  }
  set productName(value) {
    if (value) {
      this._productName = value;
    } else {
      this._productName = '<no-name-set>';
    }
  }
  @Output() notify = new EventEmitter<string>()

  private _productName?: string;

  @Input()
  get numberInput() {
    return this._numberInput;
  }
  set numberInput(value) {
    if (value) {
      this._numberInput = value;
    } else {
      this._numberInput = 5;
    }
  }
  @Output() notify2 = new EventEmitter<number>()

  private _numberInput?: number;

  notifyEvent() {
    this.notify.emit('message from child component!');
  }
}
