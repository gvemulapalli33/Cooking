import recipe from "./Recipe";
import pantry from "./Pantry";
class Recipes {

    constructor(recipes) {
      this.recipes = recipes;
      this.tags = null;
    }

    getAllTags() {
       this.tags = new set(this.recipes.map(({tags}) => tags));
    }

    searchByTag(tag) {
       return this.recipes.filter(({tags}) => tags.includes(tag));
    }

    searchByIngredients(ingredient) {
       const pantryItems =  this.pantry.filter(({name}) => name === ingredient);
       let recipes;
       pantryItems.forEach(({id : pantryId}) => {
             recipes.push(this.recipes.ingredients.find(({id}) => id === pantryId));
       });
       return recipes;
    }
}

export default Recipes;