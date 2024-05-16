import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

constructor(private activateRoute: ActivatedRoute) {
  let productId = this.activateRoute.snapshot.paramMap.get('productId')
  console.log(productId)
}


}
