import { Injectable } from '@angular/core';
import { IFruitModel } from './fruit-model';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  fruits: IFruitModel[] = [
    {src:'assets/drinks.jpeg',name:'Drinks',price:5.2,promotion:false,like:true,discount:0},
    {src:'assets/salad.jpeg',name:'Salads',price:7.89,promotion:true,like:false,discount:10},
    {src:'assets/broccli.jpeg',name:'Broccoli',price:10.2,promotion:false,like:true,discount:0},
    {src:'assets/fruits2.jpeg',name:'Fruits',price:4.33,promotion:false,like:false,discount:0},
    {src:'assets/drinks.jpeg',name:'Drinks',price:6.82,promotion:false,like:true,discount:0},
    // {src:'assets/dried frut.jpeg',name:'Dried Fruits',price:55.2,promotion:false,like:false,discount:0},
    {src:'assets/lettuc2.jpeg',name:'Lettuce',price:12.2,promotion:false,like:true,discount:0},

  ];
  constructor() {
    
  }
} 
