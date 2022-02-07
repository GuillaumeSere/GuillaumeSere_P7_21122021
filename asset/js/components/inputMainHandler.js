import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes } from "../utils/tools.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  INPUT MAIN avec Algo For
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const InputMainListener = () => {
    const inputMain = document.querySelector('#inputSearch')
    const cardMessage = document.querySelector('#cardMessage')

    // ===================
    //      A L'INPUT
    // ===================
    inputMain.addEventListener('input', () => {
        const mainInputValue = inputMain.value.toLowerCase();

        // Si il y a plus de 2 caractères
        if (inputMain.value.length > 2) {
            DATA.forEach(recipe => { recipe.display = false })
            cardMessage.style.display = "block"
            displayRecipes(DATA)

            // chercher dans les ingredients
            for (let i = 0; i < DATA.length; i++) {
                const recipe = DATA[i]
                    // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    const ingredient = recipe.ingredients[j]

                    if (ingredient.ingredient.toLowerCase().includes(mainInputValue)) {
                        recipe.display = true
                        cardMessage.style.display = "none"
                        break
                    } else {
                        recipe.display = false
                    }
                }

                // chercher dans les ustencils
                for (let j = 0; j < recipe.ustensils.length; j++) {
                    const ustensil = recipe.ustensils[j]

                    if (ustensil.toLowerCase().includes(mainInputValue)) {
                        recipe.display = true
                        cardMessage.style.display = "none"
                        break
                    } else {
                        recipe.display = false
                    }
                }

                // chercher dans les appareils
                const appliance = recipe.appliance
                if (appliance.toLowerCase().includes(mainInputValue)) {
                    recipe.display = true
                    cardMessage.style.display = "none"
                } else {
                    recipe.display = false
                }

                // chercher dans les descriptions
                const titre = recipe.name
                const description = recipe.description

                if (titre.toLowerCase().includes(mainInputValue)) {
                    recipe.display = true
                    cardMessage.style.display = "none"
                } else if (description.toLowerCase().includes(mainInputValue)) {
                    recipe.display = true
                    cardMessage.style.display = "none"
                } else {
                    recipe.display = false
                }
            }
        } else {
            // on affiche toutes les cards => display:true
            DATA.forEach(recipe => { recipe.display = true })
            cardMessage.style.display = "none"
        }
        displayRecipes(DATA)
    })
}