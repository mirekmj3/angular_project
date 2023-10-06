import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt="">
      <h2 class="listing-heading">
        {{housingLocation?.name}}
      </h2>
      <p>{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      <p>Wifi: {{housingLocation?.wifi}}</p>
      <p>Pralka: {{housingLocation?.laundry}}</p>
      
      

    </article>

    <section class="listing-apply">
      <form [formGroup]="applyForm" (submit)="submitApplication();">
        <label for="first-name">Imię:</label>
        <input type="text" id="first-name" formControlName="firstName">
        <label for="last-name">Nazwisko:</label>
        <input type="text" id="last-name" formControlName="lastName">
        <label for="email">E-mail:</label>
        <input type="text" id="email" formControlName="email">
        <button type = "submit">Apply</button>

      </form>
    </section>


  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService)
  housingLocation: Housinglocation | undefined
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
  
  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getAllHousingLocationsById(housingLocationId)

    // this.housingService.getAllHousingLocationsById(housingLocationId).then(
    //   housingLocation =>{this.housingLocation = housingLocation;
    //   });
    

  }

  submitApplication(){
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      )
  }

}
