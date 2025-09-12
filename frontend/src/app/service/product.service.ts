import { Injectable } from '@angular/core'; // Angular ka decorator jo is file ko injectable service banata hai
import { HttpClient } from '@angular/common/http'; // Http requests bhejne ke liye HttpClient import karna zaroori hai
import { Observable } from 'rxjs'; // Observable ka use hota hai async data (jaise API response) handle karne ke liye

// Product ke liye ek interface banaya hai (data ka structure define karta hai)
export interface Product {
  id: number;
  name: string;
  price: string;
  currency: string;
  image: string;
}

// @Injectable decorator service ko Angular DI (Dependency Injection) system me register karta hai
@Injectable({
  providedIn: 'root' // Iska matlab ye service globally available hai bina manually providers me add kiye
})
export class ProductService {
  // Backend API ka URL jaha se product list fetch hogi
  private apiUrl = 'http://localhost:3000/products';

  // Alternate API (Mockaroo) bhi rakhi hai testing ke liye (commented out)
  // private apiUrl = 'https://my.api.mockaroo.com/products.json?key=024969b0'

  // Constructor me HttpClient inject kar diya taki API call kar sake
  constructor(private http: HttpClient) {}

  // getProducts() ek method hai jo API se product list fetch karega
  // Ye Observable return karta hai taki component subscribe karke data use kar sake
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
