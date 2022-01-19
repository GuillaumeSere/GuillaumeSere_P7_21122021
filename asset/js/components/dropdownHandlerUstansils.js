import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArrayUstensils, displayContentsDropdown, displayUstansilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN USTENSILES avec Algo forEach
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */


export const dropDownUstansilsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ustensiles')
    const input = document.querySelector('#inputInDropdownSalmon')
    const optionContainer = document.querySelector('.optionContainer3')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')
    const listElmt = document.querySelector('.listElmt3')
    const zoneTag = document.querySelector(".zoneTag")


    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        const ust = []

        // on récupère tous les ustensils qui sont en display = true
        displayUstansilDataIfTrue(DATA, ust)

        // on retire les doublons
        const filteredArray = removeDuplicateItemInArrayUstensils(ust)

        // on le remplie l'optionContainer
        listElmt.innerHTML = ""
        filteredArray.forEach(ustensil => {
            listElmt.innerHTML += `<li class="elmt" id="${ustensil}">${ustensil}</li>`
        })

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 430)
    })

    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', () => {

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
            filteredArray.forEach(ustensil => {
                if (ustensil.toLowerCase().includes(taping)) {
                    ingredientsToDisplay.push(ustensil)
                }
            })

            listElmt.innerHTML = ''
            ingredientsToDisplay.forEach(ustensil => {
                listElmt.innerHTML += `<li class="elmt" id="${ustensil}">${ustensil}</li>`;
            });

        } else {

            // si y'a moins de 2 caractères
            const ust = []

            // on récupère tous les ingrédients des  recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)

            // on retire les doublons
            const filteredArray = removeDuplicateItemInArrayUstensils(ust)
            listElmt.innerHTML = ""

            // on  remplie l'optionContainer
            filteredArray.forEach(ustensil => {
                listElmt.innerHTML += `<li class="elmt" id="${ustensil}">${ustensil}</li>`
            })
        }
    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", (e) => {
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