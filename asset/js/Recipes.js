import vueRecipes from "./components/vueRecipes.js";

export class Recipes {
    constructor(datas){
        this.recipesList = datas;
        this.ingredients = [];
      
        console.log(datas)

        const recipesPageElement = document.getElementById("recipes");
        recipesPageElement.innerHTML = vueRecipes.createListTemplate(this.recipesList);
    }

}








