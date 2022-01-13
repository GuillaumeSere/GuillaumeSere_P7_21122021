import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArrayUstensils, displayContentsDropdown, displayUstansilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN USTENSILES
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export var dropDownUstansilsListener = () => {
    var dropdownContainer = document.querySelector('.dropdown--ustensiles')
    var input = document.querySelector('#inputInDropdownSalmon')
    var optionContainer = document.querySelector('.optionContainer3')
    var arrow = dropdownContainer.querySelector('.bi-chevron-down')
    var listElmt = document.querySelector('.listElmt3')
    var zoneTag = document.querySelector(".zoneTag")


    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', function() {
        var ust = []

        // on récupère tous les ustensils qui sont en display = true
        displayUstansilDataIfTrue(DATA, ust)

        // on retire les doublons
        var filteredArray = removeDuplicateItemInArrayUstensils(ust)

        // on le remplie l'optionContainer
        listElmt.innerHTML = ""
       
        for (var p = 0; p < filteredArray.length; p++){
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
            var taping = input.value.toLowerCase();
            var ust = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)

            // on retire les doublons
            var filteredArray = removeDuplicateItemInArrayUstensils(ust)
            var ingredientsToDisplay = []

            // on le remplie l'optionContainer
            for (var n = 0; n < filteredArray.length; n++){
                if (filteredArray[n].toLowerCase().indexOff(taping) >= 0){
                    ingredientsToDisplay.push(filteredArray[n])
                }
            }

            listElmt.innerHTML = ""
           
            for (var o = 0; o < ingredientsToDisplay.length; o++){
                listElmt.innerHTML += '<li class="elmt" id="' + ingredientsToDisplay[o] + '">' + ingredientsToDisplay[o] + '</li>'
            }

        } else {

            // si y'a moins de 2 caractères
            var ust = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)

            // on retire les doublons
            var filteredArray = removeDuplicateItemInArrayUstensils(ust)
            listElmt.innerHTML = ""

            // on  remplie l'optionContainer
           for (var t = 0; t < filteredArray.length; t++){
               listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[t] + '">' + filteredArray[t] + '</li>'
           }
        }
    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", function(e) {
        var selectedTag = e.target.innerHTML
        var tag = createTag(e.target.innerHTML, "Ustensiles")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (var i = 0; i < DATA.length; i++) {
            var recipe = DATA[i]
         
            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (var j = 0; j < recipe.ustensils.length; j++) {
                    var ustensile = recipe.ustensils[j]
            
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