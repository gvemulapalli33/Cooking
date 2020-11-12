import Recipe from './Recipe';
import recipeData from "../data/recipes";
import ingredientsData from "../data/ingredients";
import Ingredient from "./Ingredient";
import Pantry from "./Pantry";
import './styles.css';

class Cooking {

    constructor() {
        this.recipes = null;
        this.$recipes = document.querySelector('.recipes');
        this.showRecipes();
        this.pantry = null;
    }

    getRecipes() {
        this.recipes = recipeData.map(({id, image, ingredients, instructions, name, tags}) => {
            return new Recipe(id, image, ingredients, instructions, name, tags);
        });
    }

    getPantry() {
       const ingredients = ingredientsData.map(({id, name, estimatedCostInCents: cost}) => {
           const dollars = `$${cost/100}.toFixed(2)`;
           return new Ingredient(id, name, dollars);
       });

       this.pantry = new Pantry(ingredients);
    }

    showRecipes() {
        this.getRecipes();
        const recipes = this.recipes.map(({id, name, image}) => {

         return (
            `  <article id=${id} class="recipe">
                    <img class="recipe-img" src=${image}/>
                    <h3 class="recipe-name">${name}</h3>
                    <p class="recipe-btn">
                    <span class="favorite">♡</span>
                    <span class="cook">🍽️</span>
                    </p>
               </article>
             `
         );

        }).join('');

        this.$recipes.innerHTML = recipes;
    }

}

new Cooking();