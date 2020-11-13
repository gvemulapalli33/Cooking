import recipe from "./Recipe";
import pantry from "./Pantry";
class Recipes {

    constructor(recipes) {
      this.recipes = recipes;
      this.tags = null;
    }

    getAllTags() {
       const tags = this.recipes.reduce((acc, recipe) => {
         return acc.concat(...recipe.tags);
       }, []);
       this.tags = [...new Set(tags)];
       return this.tags;
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