
import vueRecipes from "./components/vueRecipes.js";

export class Recipes {
    constructor(datas){
        
        this.recipesList = datas;
      
        console.log(datas)
        // Injection de la vue des recettes
        const recipesPageElement = document.getElementById("recipes");
        recipesPageElement.innerHTML = vueRecipes.createListTemplate(this.recipesList);

        // Gestion des recherches dans la barre de recherche
        for (const element of datas){
            this.ingredients = element.ingredients;
            this.name = element.name;
            this.description = element.description;
            this.ustensils = element.ustensils;
            this.appliance = element.appliance;

            const searchBar = document.getElementById("search");
      
            searchBar.addEventListener('keyup', (e) => {
                const searchString = e.target.value;
                const error = document.querySelector(".card__empty");
                error.style.display = "block";
                const filteredCharacters = datas.filter((character) => {
                return (character.ingredients.includes(searchString) || character.name.includes(searchString) || character.description.includes(searchString));
                });
                 recipesPageElement.innerHTML = vueRecipes.createListTemplate(filteredCharacters);
            });
        }

       //const tagIngredients = document.getElementById("tags-search");
       //tagIngredients.innerHTML = vueTagSearch.createTagTemplate(this.ingredients ,this.ustensils, this.appliance);

        // Gestion des filtres ingredients
        const formIngredient = document.getElementById("form-ingredient");
        const resultIngredient = document.querySelector(".ingredients__results");
        const closedSearchIngredient = document.querySelector(".close-ingredient");
        const openedSearchIngredient = document.querySelector(".open-ingredient");
        const inputIngredient = document.querySelector(".search__ingredients");
        
        formIngredient.addEventListener("click", () => {
            openedSearchIngredient.classList.toggle("invisible");
            closedSearchIngredient.classList.toggle("invisible");
            resultIngredient.classList.toggle("invisible");
            formIngredient.classList.toggle("opened");
            inputIngredient.classList.toggle("opened")
        });

        // Gestion des filtres appareils
        const formAppareil = document.getElementById("form-appareil");
        const resultAppareil = document.querySelector(".appliance__results");
        const closedSearchAppareil = document.querySelector(".close-appareil");
        const openedSearchAppareil = document.querySelector(".open-appareil");
        const inputAppareil = document.querySelector(".search__appareils");
      

        formAppareil.addEventListener("click", () =>{
            openedSearchAppareil.classList.toggle("invisible");
            closedSearchAppareil.classList.toggle("invisible");
            resultAppareil.classList.toggle("invisible");
            formAppareil.classList.toggle("opened");
            inputAppareil.classList.toggle("opened")
        });

        // Gestion des filtres ustensiles
        const formUstensil = document.getElementById("form-ustensil");
        const resultUstensil = document.querySelector(".ustensils__results");
        const closedSearchUstensil = document.querySelector(".close-ustensil");
        const openedSearchUstensil = document.querySelector(".open-ustensil");
        const inputUstensil = document.querySelector(".search__ustensiles");
      

        formUstensil.addEventListener("click", () =>{
            openedSearchUstensil.classList.toggle("invisible");
            closedSearchUstensil.classList.toggle("invisible");
            resultUstensil.classList.toggle("invisible");
            formUstensil.classList.toggle("opened");
            inputUstensil.classList.toggle("opened")
        });

 
    }
}












