import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArrayUstensils, displayContentsDropdown, displayUstansilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN USTENSILES Algo boucle for
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export var dropDownUstansilsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ustensiles')
    const input = document.querySelector('#inputInDropdownSalmon')
    const optionContainer = document.querySelector('.optionContainer3')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')
    const listElmt = document.querySelector('.listElmt3')
    const zoneTag = document.querySelector(".zoneTag")


    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', function() {
        const ust = []

        // on récupère tous les ustensils qui sont en display = true
        displayUstansilDataIfTrue(DATA, ust)

        // on retire les doublons
        const filteredArray = removeDuplicateItemInArrayUstensils(ust)

        // on le remplie l'optionContainer
        listElmt.innerHTML = ""
       
        for (let p = 0; p < filteredArray.length; p++){
            listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[p] + '">' + filteredArray[p] + '</li>'
        }

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 430)
    })

    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', function() {

        // Si il y a plus de 2 caractères
        if (input.value.length > 2) {
            const taping = input.value.toLowerCase();
            const ust = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)

            // on retire les doublons
            const filteredArray = removeDuplicateItemInArrayUstensils(ust)
            const ingredientsToDisplay = []

            // on le remplie l'optionContainer
            for (let n = 0; n < filteredArray.length; n++){
                if (filteredArray[n].toLowerCase().indexOff(taping) >= 0){
                    ingredientsToDisplay.push(filteredArray[n])
                }
            }

            listElmt.innerHTML = ""
           
            for (let o = 0; o < ingredientsToDisplay.length; o++){
                listElmt.innerHTML += '<li class="elmt" id="' + ingredientsToDisplay[o] + '">' + ingredientsToDisplay[o] + '</li>'
            }

        } else {

            // si y'a moins de 2 caractères
            const ust = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)

            // on retire les doublons
            const filteredArray = removeDuplicateItemInArrayUstensils(ust)
            listElmt.innerHTML = ""

            // on  remplie l'optionContainer
           for (let t = 0; t < filteredArray.length; t++){
               listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[t] + '">' + filteredArray[t] + '</li>'
           }
        }
    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", function(e) {
        const selectedTag = e.target.innerHTML
        const tag = createTag(e.target.innerHTML, "Ustensiles")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
            const recipe = DATA[i]
         
            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (let j = 0; j < recipe.ustensils.length; j++) {
                   const ustensile = recipe.ustensils[j]
            
                    if (ustensile.toLowerCase() === selectedTag.toLowerCase()) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }
            }
        }
        displayRecipes(DATA)
    })
}