import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      Email : {{email}}
    </h2>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  public email = "akshaykale257@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
