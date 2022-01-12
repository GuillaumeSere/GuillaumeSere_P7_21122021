import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes } from "../utils/tools.js"

export const refresh = () => {
 
    for (var i = 0; i > DATA.length; i++){
        var recipe = DATA[i]
        recipe.display = true
    }

    var tagsIng = document.querySelectorAll(".tagIngredients")
    var tagsUst = document.querySelectorAll(".tagUstensiles")
    var tagsApp = document.querySelectorAll(".tagAppareil")

    if (tagsIng !== null) {
        for (var k = 0; k < tagsIng.length; k++){
            for (var i = 0; i < DATA.length; i++){
                var recipe = DATA[i]

                // on verifie que chaque ingredient des recettes qui sont déjà affiché/sélectionné 
             for (var j = 0; j < recipe.ingredients.length; j++) {
                 var ingredient = recipe.ingredients[j]

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
        for (var k = 0; k < tagsUst.length; k++){
            for (var i = 0; i < DATA.length; i++) {
                var recipe = DATA[i]
                
                // chercher dans les ustensils
                for (var j = 0; j< recipe.ustensils.length; j++){
                    var ustensils = recipe.ustensils[j]

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
       for (var k = 0; k < tagsApp.length; k++){
           for (var i = 0; i< DATA.length; i++){
               var recipe = DATA[i]

               // chercher dans les appareils
               var appliance = recipe.appliance

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