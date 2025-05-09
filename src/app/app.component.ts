import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';


@Component({
  selector: 'app-root',
  imports: [
    // HomeComponent,
//  AddProductComponent,
//  GetProductsComponent,
 RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}