import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
sliders:any[]=new Array(3);
  constructor() { }

  ngOnInit(): void {
  }

}
