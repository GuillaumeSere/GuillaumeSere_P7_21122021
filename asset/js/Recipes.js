import {recipes } from "./../../data/recipes.js";

export class Recipes {
    constructor(datas){
        this.recipesList = datas;
        this.filterRecipes = this.recipesList;
        this.filterIngredientsTags = [];
        this.filterApplianceTags = [];
        this.filterUstensilsTags = [];
        this.currentInput;
        this.mainSearchContent;
        this.selectedTags = { ingredients: [], appliances : [], ustensils : [] };
        console.log(datas)
    }
}

let rec;
rec = new Recipes(recipes)



