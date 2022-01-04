import vueRecipes from "./components/vueRecipes.js";
import vueTag from "./components/vueTag.js";

export class Recipes {
    constructor(datas){
        this.recipesList = datas;
      
        console.log(datas)

        const recipesPageElement = document.getElementById("recipes");
        recipesPageElement.innerHTML = vueRecipes.createListTemplate(this.recipesList);

        const tagIngredients = document.getElementById("tag");
        tagIngredients.innerHTML = vueTag.createTagTemplate(this.recipesList);

        for (const element of datas){
            this.ingredients = element.ingredients;
            this.name = element.name;
            this.description = element.description;
            this.ustensils = element.ustensils;
            this.appliance = element.appliance;

        }
    }
}












