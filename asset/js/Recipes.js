import vueRecipes from "./components/vueRecipes.js";

export class Recipes {
    constructor(datas){
        this.recipesList = datas;
        this.ingredients = [];
        this.ustensils = [];
        this.appliance = [];
        this.name;
        this.description;
      
        console.log(datas)

        const recipesPageElement = document.getElementById("recipes");
        recipesPageElement.innerHTML = vueRecipes.createListTemplate(this.recipesList);

        for (const element of datas){
            console.log(element.name , element.ingredients)
            this.ingredients = element.ingredients;
            this.name = element.name;
            this.description = element.description;
            this.ustensils = element.ustensils;
            this.appliance = element.appliance;
        }
    }

}









