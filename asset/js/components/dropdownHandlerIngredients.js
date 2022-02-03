import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayIngrediantDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN INGREDIENTS Algo boucle for
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export class DropDownIngredientsListener {
    constructor(){
        this.dropdownContainer = document.querySelector('.dropdown--ingredients')
        this.input = document.querySelector('#inputInDropdownBlue')
        this.optionContainer = this.dropdownContainer.querySelector('.optionContainer1')
        this.arrow = this.dropdownContainer.querySelector('.bi-chevron-down')
        this.listElmt = document.querySelector('.listElmt1')
        this.zoneTag = document.querySelector(".zoneTag")
        this.ingredientSearch();
    }
   
    // ===================
    //      AU CLICK
    // ===================
    ingredientSearch = () => {
    this.dropdownContainer.addEventListener('click', () =>{
        this.ingred = []

        // on récupère tous les ingrédients  uniquement recettes qui sont en display = true
        displayIngrediantDataIfTrue(DATA, this.ingred)

        // on retire les doublons
        this.filteredArray = removeDuplicateItemInArray(this.ingred)

        // on  remplie l'optionContainer
        this.listElmt.innerHTML = ""
        this.filteredArray.forEach(ingredient => {
            this.listElmt.innerHTML += `<li class="elmt" id="${ingredient}">${ingredient}</li>`
        })

        // on affiche l'optionContainer
        displayContentsDropdown(this.optionContainer, this.input, this.arrow, this.dropdownContainer, 530)
        })

        // ===================
        //      A L'INPUT
        // ===================
        this.input.addEventListener('input', () => {
        // Si il y a plus de 2 caractères
        if (this.input.value.length > 2) {
            this.taping = this.input.value.toLowerCase();
            this.ingred = []

            // on récupère tous les ingrédients des recettes qui sont uniquement en display = true
            displayIngrediantDataIfTrue(DATA, this.ingred)

            // on retire les doublons
            this.filteredArray = removeDuplicateItemInArray(this.ingred)
            this.ingredientsToDisplay = []

            // on  remplie l'optionContainer
            this.filteredArray.forEach(ingredient => {
                if (ingredient.toLowerCase().includes(this.taping)) {
                    this.ingredientsToDisplay.push(ingredient)
                }
            })

            this.listElmt.innerHTML = ''
            this.ingredientsToDisplay.forEach(ingredient => {
                this.listElmt.innerHTML += `<li class="elmt" id="${ingredient}">${ingredient}</li>`;
            });

        } else {

            // si y'a moins de 2 caractères
            this.ingred = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayIngrediantDataIfTrue(DATA, this.ingred)

            // on retire les doublons
            this.filteredArray = removeDuplicateItemInArray(this.ingred)
            this.listElmt.innerHTML = ""

            // on le remplie l'optionContainer
            this.filteredArray.forEach(ingredient => {
                this.listElmt.innerHTML += `<li class="elmt" id="${ingredient}">${ingredient}</li>`
            })
        }
        })

        // quand on click sur un <li> ça crée un tag
        this.listElmt.addEventListener("click", (e) => {
        this.selectedTag = e.target.innerHTML
        this.tag = createTag(e.target.innerHTML, "Ingredients")
        this.zoneTag.innerHTML += this.tag

                // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
                for (let i = 0; i < DATA.length; i++) {
                this. recipe = DATA[i]
                        // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
                    if (this.recipe.display == true) {
                        for (let j = 0; j < this.recipe.ingredients.length; j++) {
                            this.ingredient = this.recipe.ingredients[j]
                            if (this.ingredient.ingredient.toLowerCase() === this.selectedTag.toLowerCase()) {
                                this.recipe.display = true
                                break
                            } else {
                                this.recipe.display = false
                            }
                        }
                    }
                }
                displayRecipes(DATA)
            })
        }
}