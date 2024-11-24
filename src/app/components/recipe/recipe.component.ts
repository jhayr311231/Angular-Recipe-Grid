import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  newRecipe: Recipe = { id: 0, name: '', ingredients: '', instructions: '', imageUrl: '', rating: 0 };

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  addRecipe(): void {
    if (this.newRecipe.name && this.newRecipe.ingredients && this.newRecipe.instructions && this.newRecipe.imageUrl) {
      this.recipeService.addRecipe(this.newRecipe);
      this.recipes = this.recipeService.getRecipes();  // Update recipe list
      this.newRecipe = { id: 0, name: '', ingredients: '', instructions: '', imageUrl: '', rating: 0 }; // Reset form
    }
  }

  removeRecipe(id: number): void {
    this.recipeService.removeRecipe(id);
    this.recipes = this.recipeService.getRecipes(); // Update recipe list after removal
  }
}
