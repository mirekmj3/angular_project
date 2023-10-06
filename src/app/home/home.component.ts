import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
// import { Products } from '../products';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, ProductComponent],
  template: `
    <section>
      <form>
        <input type="text" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
</form>
</section>
<section class="results">
<app-housing-location *ngFor="let Housinglocation of filterLocationList" [Housinglocation]= "Housinglocation"></app-housing-location>
</section>
<section class="listing-products">
<!-- interpolacja wewnątrz znacznika -->
<!-- <app-product [Products]="Products"></app-product>  -->
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  HousinglocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  filterLocationList: Housinglocation[]=[]


  constructor() {
    this.HousinglocationList = this.housingService.getAllHousingLocations();    
    this.filterLocationList = this.HousinglocationList;

    // this.housingService.getAllHousingLocations().then((HousinglocationList:Housinglocation[])=>{
    //   this.HousinglocationList=HousinglocationList;
    //   this.filterLocationList=HousinglocationList;
    // })

  }

  filterResults(text: string){
    if(!text){
      this.filterLocationList = this.HousinglocationList;
    }
    this.filterLocationList = this.HousinglocationList.filter (
      HousingLocation=> HousingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }


}
