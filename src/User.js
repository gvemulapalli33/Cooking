class User {

    constructor(name, id, pantry) {
        this.name = name;
        this.id = id;
        this.pantry = pantry;
        this.favoriteRecipes = [];
        this.recipesToCook = [];
    }

    addFavoriteRecipes(recipe) {
       this.favoriteRecipes.push(recipe);
    }

    removeFavoriteRecipes(recipe) {
       this.favoriteRecipes = this.favoriteRecipes.filter(({id}) => id !== recipe.id );
    }

    addRecipesToCook(recipe) {
       this.canCook(recipe);
       this.recipesToCook.push(recipe);
    }

    canCook(recipe) {
      this.ingredientsReq = recipe.getIngredients();
      const missingIngredient =  this.ingredientsReq.filter((ingredient) => {
         const item = this.user.pantry.find((item) =>  
         item.ingredient === ingredient.id && (item.amount >= ingredient.quantity.amount));
         if (!item) {
            return true;
         }
      });
      return missingIngredient;
    }
}

export default User;