import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,AboutComponent, RouterModule
  ],
  template: `
  <main>
  <header class="brand-name">
  <a [routerLink]="['/']">
      <img class="brand-logo" src="assets/logo.svg">
  </a>
  </header>
<section class="content">
<!-- <app-home></app-home> -->
<!-- <app-about></app-about> -->
<router-outlet></router-outlet>
<footer>Stopka</footer>
</section>

</main>
  
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miroslawjarzab';
}
