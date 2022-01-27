import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes } from "../utils/tools.js"

export const refresh = () => {

    DATA.forEach(recipe => { recipe.display = true });
 
    for (let i = 0; i > DATA.length; i++){
        let recipe = DATA[i]
        recipe.display = true
    }

    const tagsIng = document.querySelectorAll(".tagIngredients")
    const tagsUst = document.querySelectorAll(".tagUstensiles")
    const tagsApp = document.querySelectorAll(".tagAppareil")

    if (tagsIng !== null) {
        for (let k = 0; k < tagsIng.length; k++){
            for (let i = 0; i < DATA.length; i++){
                const recipe = DATA[i]

                // on verifie que chaque ingredient des recettes qui sont déjà affiché/sélectionné 
             for (let j = 0; j < recipe.ingredients.length; j++) {
                 let ingredient = recipe.ingredients[j]

                 if (ingredient.ingredient.toLowerCase().indexOf(tagsIng[k].children[0].textContent.toLowerCase()) >= 0){
                     recipe.display = true
                     break
                 }else{
                     recipe.display = false
                 }
              }  
            }
        }
    }

    if (tagsUst !== null) {
        for (let k = 0; k < tagsUst.length; k++){
            for (let i = 0; i < DATA.length; i++) {
                const recipe = DATA[i]
                
                // chercher dans les ustensils
                for (let j = 0; j< recipe.ustensils.length; j++){
                    let ustensils = recipe.ustensils[j]

                    if (ustensils.toLowerCase().indexOf(tagsUst[k].children[0].textContent.toLowerCase()) >= 0){
                        recipe.display = true
                        break
                    }else{
                        recipe.display = false
                    }
                }
            }
        }
    }

    if (tagsApp !== null) {
       for (let k = 0; k < tagsApp.length; k++){
           for (let i = 0; i< DATA.length; i++){
               const recipe = DATA[i]

               // chercher dans les appareils
               const appliance = recipe.appliance

               if (appliance.toLowerCase().indexOf(tagsApp[k].children[0].textContent.toLowerCase()) >= 0){
                   recipe.display = true
               }else{
                   recipe.display = false
               }
           }
       }
    }

    displayRecipes(DATA)
}