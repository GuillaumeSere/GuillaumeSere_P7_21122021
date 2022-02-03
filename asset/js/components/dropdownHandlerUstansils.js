import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayUstansilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN USTENSILES Algo boucle for
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export class DropDownUstansilsListener {
    constructor(){
        this.dropdownContainer = document.querySelector('.dropdown--ustensiles')
        this.input = document.querySelector('#inputInDropdownSalmon')
        this.optionContainer = document.querySelector('.optionContainer3')
        this.arrow = this.dropdownContainer.querySelector('.bi-chevron-down')
        this.listElmt = document.querySelector('.listElmt3')
        this.zoneTag = document.querySelector(".zoneTag")
        this.ustansilSearch()
    }

    // ===================
    //      AU CLICK
    // ===================
    ustansilSearch = () => {
    this.dropdownContainer.addEventListener('click', () =>{
        this.ust = []

        // on récupère tous les ustensils qui sont en display = true
        displayUstansilDataIfTrue(DATA, this.ust)

        // on retire les doublons
        this.filteredArray = removeDuplicateItemInArray(this.ust)

        // on  remplie l'optionContainer
        this.listElmt.innerHTML = ""
       
        for (let p = 0; p < this.filteredArray.length; p++){
            this.listElmt.innerHTML += '<li class="elmt" id="' + this.filteredArray[p] + '">' + this.filteredArray[p] + '</li>'
        }

        // on affiche l'optionContainer
        displayContentsDropdown(this.optionContainer, this.input, this.arrow, this.dropdownContainer, 430)
    })

    // ===================
    //      A L'INPUT
    // ===================
    this.input.addEventListener('input', () =>{
        // Si il y a plus de 2 caractères
        if (this.input.value.length > 2) {
            this.taping = this.input.value.toLowerCase();
            this.ust = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, this.ust)

            // on retire les doublons
            this.filteredArray = removeDuplicateItemInArray(this.ust)
            this.ingredientsToDisplay = []

            // on  remplie l'optionContainer
            for (let n = 0; n < this.filteredArray.length; n++){
                if (this.filteredArray[n].toLowerCase().indexOff(this.taping) >= 0){
                    this.ingredientsToDisplay.push(this.filteredArray[n])
                }
            }

            this.listElmt.innerHTML = ""
           
            for (let o = 0; o < this.ingredientsToDisplay.length; o++){
                this.listElmt.innerHTML += '<li class="elmt" id="' + this.ingredientsToDisplay[o] + '">' + this.ingredientsToDisplay[o] + '</li>'
            }

        } else {

            // si y'a moins de 2 caractères
            this.ust = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, this.ust)

            // on retire les doublons
            this.filteredArray = removeDuplicateItemInArray(this.ust)
            this.listElmt.innerHTML = ""

            // on  remplie l'optionContainer
           for (let t = 0; t < this.filteredArray.length; t++){
               this.listElmt.innerHTML += '<li class="elmt" id="' + this.filteredArray[t] + '">' + this.filteredArray[t] + '</li>'
           }
        }
    })

    // quand on click sur un <li> ça crée un tag
    this.listElmt.addEventListener("click", (e) =>{
        this.selectedTag = e.target.innerHTML
        this.tag = createTag(e.target.innerHTML, "Ustensiles")
        this.zoneTag.innerHTML += this.tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
            this.recipe = DATA[i]
         
            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (this.recipe.display == true) {
                for (let j = 0; j < this.recipe.ustensils.length; j++) {
                   this.ustensile = this.recipe.ustensils[j]
            
                    if (this.ustensile.toLowerCase() === this.selectedTag.toLowerCase()) {
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