import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ADD this
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  registerHover = false;
router:any;
  toggleButtonStyles(isHovering: boolean) {
    this.registerHover = isHovering;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}