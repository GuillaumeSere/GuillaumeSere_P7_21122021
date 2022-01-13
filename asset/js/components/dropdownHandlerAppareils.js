import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayAppareilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN APPAREIL
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export var dropDownAppareilListener = () => {
    var dropdownContainer = document.querySelector('.dropdown--appareil')
    var input = document.querySelector('#inputInDropdownGreen')
    var optionContainer = document.querySelector('.optionContainer2')
    var arrow = dropdownContainer.querySelector('.bi-chevron-down')
    var listElmt = document.querySelector('.listElmt2')
    var zoneTag = document.querySelector(".zoneTag")

    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', function() {
        var app = []

        // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
        displayAppareilDataIfTrue(DATA, app)

        // on retire les doublons
        var filteredArray = removeDuplicateItemInArray(app)

        // on remplie l'optionContainer
        listElmt.innerHTML = ""

        for (var l = 0; l < filteredArray.length; l++) {
            listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[l] + '">' + filteredArray[l] + '</li>'
        }

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 250)
    })

    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', function() {

        // Si il y a plus de 2 caractères
        if (input.value.length > 2) {
            var taping = input.value.toLowerCase();
            var app = []

            // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
            displayAppareilDataIfTrue(DATA, app)

            // on retire les doublons
            var filteredArray = removeDuplicateItemInArray(app)
            var ingredientsToDisplay = []

            // on remplie l'optionContainer
            for (var p = 0; p < filteredArray.length; p++) {
                if (filteredArray[p].toLowerCase().indexOf(taping) >= 0) {
                    ingredientsToDisplay.push(filteredArray[p])
                }
            }

            listElmt.innerHTML = ""

            for (var k = 0; k < ingredientsToDisplay.length; k++) {
                listElmt.innerHTML += '<li class="elmt" id="' + ingredientsToDisplay[k] + '">' + ingredientsToDisplay[k] + '</li>'
            }

        } else {

            // si y'a moins de 2 caractères
            var app = []

            // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
            displayAppareilDataIfTrue(DATA, app)

            // on retire les doublons
            var filteredArray = removeDuplicateItemInArray(app)
            listElmt.innerHTML = ""

            // on remplie l'optionContainer
            for (var n = 0; n < filteredArray.length; n++) {
                listElmt.innerHTML += '<li class="elmt" id="' + filteredArray[n] + '">' + filteredArray[n] + '</li>'
            }
        }

    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", function(e) {
        var selectedTag = e.target.innerHTML
        var tag = createTag(e.target.innerHTML, "Appareil")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (var i = 0; i < DATA.length; i++) {
            var recipe = DATA[i]

            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (var j = 0; j < recipe.appliance.length; j++) {
                    var appareil = recipe.appliance

                    if (appareil.toLowerCase() === selectedTag.toLowerCase()) {
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