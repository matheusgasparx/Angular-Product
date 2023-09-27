import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCrudComponent {
  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
  }
}
