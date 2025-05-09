import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styles: ``
})
export class NotFoundComponent {
  router: any;
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
