// recipe.service.ts
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      ingredients: 'Spaghetti, eggs, pancetta, Parmesan cheese, black pepper',
      instructions: 'Cook pasta, fry pancetta, mix eggs and cheese, combine all.',
      imageUrl: 'https://i.pinimg.com/474x/84/39/fd/8439fdef4910fab401205b3eb8f6a698.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      ingredients: 'Pizza dough, tomato sauce, mozzarella, fresh basil, olive oil',
      instructions: 'Roll out dough, add sauce, cheese, and basil, bake until golden.',
      imageUrl: 'https://i.pinimg.com/474x/9d/2f/62/9d2f62b46c1a23bd26df0d455c3a388f.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Chicken Curry',
      ingredients: 'Chicken, onions, garlic, curry paste, coconut milk, rice',
      instructions: 'Cook chicken and onions, add curry paste and coconut milk, simmer.',
      imageUrl: 'https://i.pinimg.com/474x/14/7a/e3/147ae3d4903957751e24d9eddd3c3c83.jpg',
      rating: 4
    },
    {
      id: 4,
      name: 'Beef Tacos',
      ingredients: 'Ground beef, taco shells, lettuce, tomatoes, cheese, sour cream',
      instructions: 'Cook beef, prepare toppings, assemble tacos.',
      imageUrl: 'https://i.pinimg.com/474x/dd/06/ef/dd06ef5865b9f344a5aa4e2a6081f97d.jpg',
      rating: 5
    },
    {
      id: 5,
      name: 'Vegetable Stir Fry',
      ingredients: 'Mixed vegetables, soy sauce, garlic, ginger, rice',
      instructions: 'Stir fry vegetables with garlic and ginger, serve with rice.',
      imageUrl: 'https://i.pinimg.com/474x/bc/ec/8c/bcec8c25ce2ef677397cbdf956ab6ec2.jpg',
      rating: 3
    },
    {
      id: 6,
      name: 'Pancakes',
      ingredients: 'Flour, eggs, milk, sugar, baking powder, butter, syrup',
      instructions: 'Mix ingredients, cook pancakes on a griddle, serve with syrup.',
      imageUrl: 'https://i.pinimg.com/474x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg',
      rating: 5
    },
    {
      id: 7,
      name: 'Caesar Salad',
      ingredients: 'Romaine lettuce, croutons, Parmesan, Caesar dressing',
      instructions: 'Toss lettuce with dressing, add croutons and Parmesan.',
      imageUrl: 'https://i.pinimg.com/474x/a4/46/64/a446648b7150630bf7628377289b0fe4.jpg',
      rating: 4
    },
    {
      id: 8,
      name: 'Grilled Cheese Sandwich',
      ingredients: 'Bread, butter, cheddar cheese',
      instructions: 'Butter bread, add cheese, grill until golden brown.',
      imageUrl: 'https://i.pinimg.com/474x/9e/00/07/9e00078d29c02713a5d1d0915a2f2fc6.jpg',
      rating: 4
    },
    {
      id: 9,
      name: 'Chocolate Chip Cookies',
      ingredients: 'Flour, sugar, chocolate chips, eggs, butter, vanilla extract',
      instructions: 'Mix ingredients, bake cookies at 350°F for 10-12 minutes.',
      imageUrl: 'https://i.pinimg.com/474x/a2/54/ab/a254ab3176f62d952a39db1c7a2a6a2b.jpg',
      rating: 5
    },
    {
      id: 10,
      name: 'Vegetable Soup',
      ingredients: 'Carrots, potatoes, celery, onion, vegetable broth, herbs',
      instructions: 'Simmer vegetables in broth until tender, season with herbs.',
      imageUrl: 'https://i.pinimg.com/474x/81/5f/71/815f715b177c83fc136a71f82256a47e.jpg',
      rating: 3
    }
  ];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe): void {
    recipe.id = this.recipes.length + 1; // Automatically assign an ID
    this.recipes.push(recipe);
  }

  removeRecipe(id: number): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}
