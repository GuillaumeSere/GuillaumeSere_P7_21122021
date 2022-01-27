import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayIngrediantDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN INGREDIENTS Algo boucle for
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export var dropDownIngredientsListener = () => {
    var dropdownContainer = document.querySelector('.dropdown--ingredients')
    var input = document.querySelector('#inputInDropdownBlue')
    var optionContainer = dropdownContainer.querySelector('.optionContainer1')
    var arrow = dropdownContainer.querySelector('.bi-chevron-down')
    var listElmt = document.querySelector('.listElmt1')
    var zoneTag = document.querySelector(".zoneTag")

    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', function() {
        var ingred = []

        // on récupère tous les ingrédients  uniquement recettes qui sont en display = true
        displayIngrediantDataIfTrue(DATA, ingred)

        // on retire les doublons
        var filteredArray = removeDuplicateItemInArray(ingred)

        // on  remplie l'optionContainer
        listElmt.innerHTML = ""
      
        for (var l = 0; l < filteredArray.length; l++){
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
            var taping = input.value.toLowerCase();
            var ingred = []

            // on récupère tous les ingrédients des recettes qui sont uniquement en display = true
            displayIngrediantDataIfTrue(DATA, ingred)

            // on retire les doublons
            var filteredArray = removeDuplicateItemInArray(ingred)
            var ingredientsToDisplay = []

            // on  remplie l'optionContainer
           for (var a = 0; a < filteredArray.length; a++){
               if(filteredArray[a].toLowerCase().indexOff(taping) >= 0){
                 ingredientsToDisplay.push(filteredArray[a])
               }
           }
            listElmt.innerHTML = ""

           for (var u = 0; u < ingredientsToDisplay.length; u++){
               listElmt.innerHTML += '<li class="elmt" id="' + ingredientsToDisplay[u] + '">' + ingredientsToDisplay[u] + '</li>'
           }

        } else {

            // si y'a moins de 2 caractères
            var ingred = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayIngrediantDataIfTrue(DATA, ingred)

            // on retire les doublons
            var filteredArray = removeDuplicateItemInArray(ingred)
            listElmt.innerHTML = ""

            // on le remplie l'optionContainer
           for (var t = 0; t < filteredArray.length; t++){
               listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[t] + '">' + filteredArray[t] + '</li>'
           }
        }
    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", (e) => {
        var selectedTag = e.target.innerHTML
        var tag = createTag(e.target.innerHTML, "Ingredients")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (var i = 0; i < DATA.length; i++) {
            var recipe = DATA[i]
                // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    var ingredient = recipe.ingredients[j]
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