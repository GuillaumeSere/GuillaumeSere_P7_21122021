import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayIngrediantDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN INGREDIENTS Algo boucle for
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export var dropDownIngredientsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ingredients')
    const input = document.querySelector('#inputInDropdownBlue')
    const optionContainer = dropdownContainer.querySelector('.optionContainer1')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')
    const listElmt = document.querySelector('.listElmt1')
    const zoneTag = document.querySelector(".zoneTag")

    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', function() {
        const ingred = []

        // on récupère tous les ingrédients  uniquement recettes qui sont en display = true
        displayIngrediantDataIfTrue(DATA, ingred)

        // on retire les doublons
        const filteredArray = removeDuplicateItemInArray(ingred)

        // on  remplie l'optionContainer
        listElmt.innerHTML = ""
      
        for (let l = 0; l < filteredArray.length; l++){
            listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[l] + '">' + filteredArray[l] + '</li>'
        }

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 530)
    })

    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', function() {
        // Si il y a plus de 2 caractères
        if (input.value.length > 2) {
            const taping = input.value.toLowerCase();
            const ingred = []

            // on récupère tous les ingrédients des recettes qui sont uniquement en display = true
            displayIngrediantDataIfTrue(DATA, ingred)

            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ingred)
            const ingredientsToDisplay = []

            // on  remplie l'optionContainer
           for (let a = 0; a < filteredArray.length; a++){
               if(filteredArray[a].toLowerCase().indexOff(taping) >= 0){
                 ingredientsToDisplay.push(filteredArray[a])
               }
           }
            listElmt.innerHTML = ""

           for (let u = 0; u < ingredientsToDisplay.length; u++){
               listElmt.innerHTML += '<li class="elmt" id="' + ingredientsToDisplay[u] + '">' + ingredientsToDisplay[u] + '</li>'
           }

        } else {

            // si y'a moins de 2 caractères
            const ingred = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayIngrediantDataIfTrue(DATA, ingred)

            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ingred)
            listElmt.innerHTML = ""

            // on le remplie l'optionContainer
           for (let t = 0; t < filteredArray.length; t++){
               listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[t] + '">' + filteredArray[t] + '</li>'
           }
        }
    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", (e) => {
        const selectedTag = e.target.innerHTML
        const tag = createTag(e.target.innerHTML, "Ingredients")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
           const recipe = DATA[i]
                // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    const ingredient = recipe.ingredients[j]
                    if (ingredient.ingredient.toLowerCase() === selectedTag.toLowerCase()) {
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