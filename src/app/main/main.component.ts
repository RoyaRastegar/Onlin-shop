import { Component, OnInit } from '@angular/core';
import { IFruitModel } from '../fruit-model';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  topSale: IFruitModel[] = [];
  constructor(private fruit: FruitsService) { }

  ngOnInit(): void {
    this.topSale=this.fruit.fruits;
  }

}
