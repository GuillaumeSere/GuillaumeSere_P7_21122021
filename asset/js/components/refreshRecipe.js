import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes } from "../utils/tools.js"

export const refresh = () => {
    DATA.forEach(recipe => { recipe.display = true });

    const tagsIng = document.querySelectorAll(".tagIngredients")
    const tagsUst = document.querySelectorAll(".tagUstensiles")
    const tagsApp = document.querySelectorAll(".tagAppareil")

    if (tagsIng !== null) {
        tagsIng.forEach(tag => {
            for (let i = 0; i < DATA.length; i++) {
                const recipe = DATA[i]

                // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    const ingredient = recipe.ingredients[j]
                    if (ingredient.ingredient.toLowerCase().includes(tag.children[0].textContent.toLowerCase())) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }
            }
        });
    }

    if (tagsUst !== null) {
        tagsUst.forEach(tag => {
            for (let i = 0; i < DATA.length; i++) {
                const recipe = DATA[i]

                // chercher dans les ustencils
                for (let j = 0; j < recipe.ustensils.length; j++) {
                    const ustensil = recipe.ustensils[j]
                    if (ustensil.toLowerCase().includes(tag.children[0].textContent.toLowerCase())) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }
            }
        });
    }

    if (tagsApp !== null) {
        tagsApp.forEach(tag => {
            for (let i = 0; i < DATA.length; i++) {
                const recipe = DATA[i]

                // chercher dans les appareils
                const appliance = recipe.appliance
                if (appliance.toLowerCase().includes(tag.children[0].textContent.toLowerCase())) {
                    recipe.display = true
                } else {
                    recipe.display = false
                }
            }
        });
    }

    displayRecipes(DATA)
}