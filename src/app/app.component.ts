import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,AboutComponent
  ],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="assets/logo.svg">
</header>
<section class="content">


<app-home></app-home>
<!-- <app-about></app-about> -->

<footer>Stopka</footer>
</section>

</main>
  
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miroslawjarzab';
}
