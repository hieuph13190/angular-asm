import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'angular FPT Poly';

  name = 'abc';
  class = 'web17103';

  students = [
    {
      name: 'dsd',
      id: 'sd1',
      status: 0
    },
    {
      name: 'ds',
      id: 'Pg',
      status: 1
    },
    {
      name: 'fsd',
      id: 'a',
      status: 1
    }
  ];




}
