import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  router: any;
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
