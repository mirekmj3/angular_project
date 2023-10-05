import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, ProductComponent],
  template: `
    <section>
      <form>
        <input type="text">
        <button class="primary" type="button">Search</button>
</form>
</section>
<section class="results">
<app-housing-location [Housinglocation]= "Housinglocation"></app-housing-location>
</section>
<section class="listing-products">
<!-- interpolacja wewnątrz znacznika -->
<app-product [Products]="Products"></app-product> 
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // readonly baseUrl = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_459,h_459/v1659998959/81475.png';

  Housinglocation: Housinglocation = {
    id: 999,
    name: 'Test',
    city: 'Gdansk',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_459,h_459/v1659998959/81475.png',
    availableUnit: 50,
    wifi: true,
    laundry: false
  };
  Products:Products={
    id: 99,
    product_name: "product_name",
    price: 120,
    qty: 10,
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_159,h_159/v1659998959/81475.png',
    available: true
  }
}
