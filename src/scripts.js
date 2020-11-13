import Recipe from './Recipe';
import Recipes from './Recipes';
import recipeData from "../data/recipes";
import ingredientsData from "../data/ingredients";
import userData from "../data/users";
import Ingredient from "./Ingredient";
import Pantry from "./Pantry";
import User from "./User";
import './styles.css';

class Cooking {

    constructor() {
        this.allRecipes = null;
        this.favouriteRecipes = null;
        this.pantry = null;
        this.users = null;
        this.currentUser = null;
        this.$recipes = document.querySelector('.recipes-list');
        this.$favorites = document.querySelector('.favorites-list');
        this.$userFavorites = document.querySelector('.user-favorites');
        this.$meals = document.querySelector('.meals-list');
        this.$tags = document.querySelector('.tags');
        this.getRecipes();
        this.getUser();
        this.showRecipes(this.$recipes, this.allRecipes.recipes);
        this.addTags();
        this.addEventListeners();
    }

    addEventListeners() {
        document.body.addEventListener('click', (event) => {
            this.addFavorites(event);
            this.showFavorites(event);
            this.searchByTags(event);
        });
    }

    getUser() {
        this.users = userData.map(({name, id, pantry}) => {
           return new User(name, id, pantry);
        });
        this.currentUser = this.users[0];
    }

    getRecipes() {
        const recipes = recipeData.map(({id, image, ingredients, instructions, name, tags}) => {
            return new Recipe(id, image, ingredients, instructions, name, tags);
        });
        this.allRecipes = new Recipes(recipes);
    }

    getPantry() {
       const ingredients = ingredientsData.map(({id, name, estimatedCostInCents: cost}) => {
           const dollars = `$${cost/100}.toFixed(2)`;
           return new Ingredient(id, name, dollars);
       });

       this.pantry = new Pantry(ingredients);
    }

    showRecipes(element, recipesData) {
        const recipes = recipesData.map(({id, name, image}) => {
         return (
            `<article id=${id} class="recipe">
                    <h3 class="recipe-name">${name}</h3>
                    <img class="recipe-img" src=${image}/>
                    <p class="recipe-btn">
                        <span class="favorite-btn">♡</span>
                        <span class="cook">🍽️</span>
                    </p>
             </article>
             `
         );
        }).join('');
        console.log(element, recipes);
        element.innerHTML = recipes;
    }

    addFavorites(event) {
       let {target} = event;
       const article = target.closest('article');
       if (!this.$recipes.contains(article)) {
           return;
       }
       const recipeId = article.id;
       const recipe = this.allRecipes.recipes.find((recipe) => recipe.id === +recipeId);
       this.$favoriteBtn = article.querySelector('.favorite-btn');
       this.$favoriteBtn.innerHTML = '❤️';
       this.currentUser.addFavoriteRecipes(recipe);
    }

    showFavorites(event) {
        let {target} = event;
        if (target.classList.contains('favorites')) {
             this.$recipes.style.display = 'none';
             this.$favorites.hidden = false;
             this.$favorites.style.display = '';
             this.favouriteRecipes = this.currentUser.favoriteRecipes;
             this.showRecipes(this.$userFavorites, this.favouriteRecipes);
        }
    }

    addTags() {
       const tags = this.allRecipes.getAllTags();
       const tagHTML = tags.map((tag) => {
           return `
             <p class="tag">${tag}</p>
           `
       }).join('');
       this.$tags.innerHTML = tagHTML;
    }

    searchByTags(event) {
        let {target} = event;
        const tag = target.closest('p');
        if (!tag) {
            return;
        }
        let searchTerm = tag.innerText;
        const filteredRecipes = this.allRecipes.searchByTag(searchTerm);
        this.showRecipes(this.$recipes, filteredRecipes)
    }

}

new Cooking();