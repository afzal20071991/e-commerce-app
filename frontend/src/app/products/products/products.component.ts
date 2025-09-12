import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // Product list store karne ke liye ek empty array banaya hai
  products: Product[] = [];

  // Constructor me ProductService inject kiya (Dependency Injection)
  constructor(private productService: ProductService) {}


  ngOnInit(): void {
    // ProductService ka getProducts() method call karke data fetch kar rahe hain
    // subscribe() lagana padta hai kyunki getProducts() ek Observable return karta hai
    this.productService.getProducts().subscribe((data) => {
      this.products = data; // API se aaya hua data products array me store kar diya
    });
  }
}
