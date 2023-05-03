import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <ul class="list-group">
          <li class="list-group-item shadow">An item</li>
          <li class="list-group-item shadow mt-2 border-top">A second item</li>
        </ul>
      </div>
    </div>
  </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
