import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h2>Name : {{name}}</h2>
    <h2>Profession : {{profession}}</h2>
    <h2>Experience : {{experience}}</h2>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  public name = "Akshay Kale";
  public profession = "Software Engineer";
  public experience = "3 years";
  
  constructor() { }

  ngOnInit() {
  }

}
