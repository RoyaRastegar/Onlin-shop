import { Component, OnInit } from '@angular/core';
import { IFruitModel } from '../fruit-model';
import { FruitsService } from '../fruits.service';
@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.component.html',
  styleUrls: ['./list-fruits.component.css']
})
export class ListFruitsComponent implements OnInit {
  fruits: IFruitModel[] = [];
  dropdownValue:String='Sort by ';
  dropdownDisplay:string="Display";
  constructor(private fruit: FruitsService) {
  }

  ngOnInit(): void {
    this.fruits = this.fruit.fruits;
  }


  sortType(type:number){
    this.fruits=this.fruits.sort((a, b) => { 
      if(type==1){
        this.dropdownValue='to upper price';
        return a.price >= b.price
        ? 1
        : -1;
      } else if (type==2){
        this.dropdownValue='to lower price';
        return a.price <= b.price
        ? 1
        : -1;
      }
      else{
        this.dropdownValue='liked';
        return !a.like
        ? 1
        : -1;
      }
    });
  }
  
}
