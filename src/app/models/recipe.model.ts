// recipe.model.ts
export interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
  imageUrl: string;
  rating: number;
}
