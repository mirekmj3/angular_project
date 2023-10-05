import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../products';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="item-product">
      <img class="item-photo" [src]="Products.photo" alt = "tekst">
      <h2 class="item-name">{{Products.product_name}}</h2>
      <p class= "item-price-qty">{{Products.price}}, {{Products.qty}}</p>
</section>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() Products!: Products
}
