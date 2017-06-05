import { Component, OnInit } from '@angular/core';

// MODELS
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is merely a test', 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
    new Recipe('Test Recipe', 'this is merely a test', 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
    new Recipe('Test Recipe', 'this is merely a test', 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
    new Recipe('Test Recipe', 'this is merely a test', 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
