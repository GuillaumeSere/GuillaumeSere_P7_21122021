import { DATA } from "./../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayAppareilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN APPAREIL avec Algo forEach
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const dropDownAppareilListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--appareil')
    const input = document.querySelector('#inputInDropdownGreen')
    const optionContainer = document.querySelector('.optionContainer2')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')
    const listElmt = document.querySelector('.listElmt2')
    const zoneTag = document.querySelector(".zoneTag")

    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        const app = []

        // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
        displayAppareilDataIfTrue(DATA, app)

        // on retire les doublons
        const filteredArray = removeDuplicateItemInArray(app)

        // on remplie l'optionContainer
        listElmt.innerHTML = ""
        filteredArray.forEach(appareil => {
            listElmt.innerHTML += `<li class="elmt" id="${appareil}">${appareil}</li>`
        })

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 250)
    })

    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', () => {

        // Si il y a plus de 2 caractères
        if (input.value.length > 2) {
            const taping = input.value.toLowerCase();
            const app = []

            // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
            displayAppareilDataIfTrue(DATA, app)

            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(app)
            const ingredientsToDisplay = []

            // on remplie l'optionContainer
            filteredArray.forEach(appareil => {
                if (appareil.toLowerCase().indexOf(taping) >= 0) {
                    ingredientsToDisplay.push(appareil)
                }
            })

            listElmt.innerHTML = ''
            ingredientsToDisplay.forEach(appareil => {
                listElmt.innerHTML += `<li class="elmt" id="${appareil}">${appareil}</li>`;
            });

        } else {

            // si y'a moins de 2 caractères
            const app = []

            // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
            displayAppareilDataIfTrue(DATA, app)

            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(app)
            listElmt.innerHTML = ""

            // on remplie l'optionContainer
            filteredArray.forEach(appareil => {
                listElmt.innerHTML += `<li class="elmt" id="${appareil}">${appareil}</li>`
            })
        }

    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", (e) => {
        const selectedTag = e.target.innerHTML
        const tag = createTag(e.target.innerHTML, "Appareil")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
            const recipe = DATA[i]
         
            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (let j = 0; j < recipe.appliance.length; j++) {
                    const appareil = recipe.appliance
                 
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