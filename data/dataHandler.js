import { recipes } from "./recipes.js"

export let DATA = recipes;
DATA.forEach(recipe => {
    recipe.display = true;
});