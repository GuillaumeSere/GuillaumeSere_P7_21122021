import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayAppareilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN APPAREIL Algo boucle for
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export class DropDownAppareilListener {
    constructor(){
        this.dropdownContainer = document.querySelector('.dropdown--appareil')
        this.input = document.querySelector('#inputInDropdownGreen')
        this.optionContainer = document.querySelector('.optionContainer2')
        this.arrow = this.dropdownContainer.querySelector('.bi-chevron-down')
        this.listElmt = document.querySelector('.listElmt2')
        this.zoneTag = document.querySelector(".zoneTag")
        this.appareilSearch();
    }
  
    // ===================
    //      AU CLICK
    // ===================
   appareilSearch = () => {
    this.dropdownContainer.addEventListener('click', () =>{
        this.app = []

        // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
        displayAppareilDataIfTrue(DATA, this.app)

        // on retire les doublons
        this.filteredArray = removeDuplicateItemInArray(this.app)

        // on remplie l'optionContainer
        this.listElmt.innerHTML = ""

        for (let l = 0; l < this.filteredArray.length; l++) {
            this.listElmt.innerHTML += '<li class="elmt" id="' + this.filteredArray[l] + '">' + this.filteredArray[l] + '</li>'
        }

        // on affiche l'optionContainer
        displayContentsDropdown(this.optionContainer, this.input, this.arrow, this.dropdownContainer, 250)
    })

    // ===================
    //      A L'INPUT
    // ===================
    this.input.addEventListener('input', () =>{
        // Si il y a plus de 2 caractères
        if (this.input.value.length > 2) {
            this.taping = this.input.value.toLowerCase();
            this.app = []

            // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
            displayAppareilDataIfTrue(DATA, this.app)

            // on retire les doublons
            this.filteredArray = removeDuplicateItemInArray(this.app)
            this.ingredientsToDisplay = []

            // on remplie l'optionContainer
            for (let p = 0; p < this.filteredArray.length; p++) {
                if (this.filteredArray[p].toLowerCase().indexOf(this.taping) >= 0) {
                    this.ingredientsToDisplay.push(this.filteredArray[p])
                }
            }

            this.listElmt.innerHTML = ""

            for (let k = 0; k < this.ingredientsToDisplay.length; k++) {
                this.listElmt.innerHTML += '<li class="elmt" id="' + this.ingredientsToDisplay[k] + '">' + this.ingredientsToDisplay[k] + '</li>'
            }

        } else {

            // si y'a moins de 2 caractères
            this.app = []

            // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
            displayAppareilDataIfTrue(DATA, this.app)

            // on retire les doublons
            this.filteredArray = removeDuplicateItemInArray(this.app)
            this.listElmt.innerHTML = ""

            // on remplie l'optionContainer
            for (let n = 0; n < this.filteredArray.length; n++) {
                this.listElmt.innerHTML += '<li class="elmt" id="' + this.filteredArray[n] + '">' + this.filteredArray[n] + '</li>'
            }
        }

    })

    // quand on click sur un <li> ça crée un tag
    this.listElmt.addEventListener("click", (e) =>{
        this.selectedTag = e.target.innerHTML
        this.tag = createTag(e.target.innerHTML, "Appareil")
        this.zoneTag.innerHTML += this.tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
           this.recipe = DATA[i]

            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (this.recipe.display == true) {
                for (let j = 0; j < this.recipe.appliance.length; j++) {
                    this.appareil = this.recipe.appliance

                    if (this.appareil.toLowerCase() === this.selectedTag.toLowerCase()) {
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