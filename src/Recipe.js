import Pantry from "./Pantry";

class Recipe {
    constructor(id, image, ingredients, instructions, name, tags) {
      this.id = id;
      this.image = image;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.name = name;
      this.tags = tags;
    }

    getInstructions() {
      return this.instructions;
    }

    getIngredientsCost() {
        const cost = 0;
        this.ingredients.map((ingredient) => {
            Pantry.ingredients.map((pantryItem) => {
                if(ingredient.id === pantryItem.id) {
                   cost += ingredient.quantity.amount * pantryItem.cost;
                }
            });
        });
        return cost;
    }

    getIngredients() {
      return this.ingredients;
    }
}

export default Recipe;