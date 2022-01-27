import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes } from "../utils/tools.js"
import {createCardsForDom} from "../components/view/card.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  INPUT MAIN Algo boucle for
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
const result = DATA

export const InputMainListener = () => {
    const inputMain = document.querySelector('#inputSearch')
    
    // ===================
    //      A L'INPUT
    // ===================
    inputMain.addEventListener('input', () => {

        const mainInputValue = inputMain.value.toLowerCase();

        if (mainInputValue.length > 2){
           const resultDescription = result.filter(item => item.description.toLowerCase().includes(mainInputValue.toLowerCase()))
           const cardMessage = document.querySelector('#cardMessage')
           let suggestion = "";
        
           resultDescription.forEach(resultItem => 
                 suggestion =+ createCardsForDom(resultItem)
               
             )
             displayRecipes(resultDescription)
             cardMessage.style.display = "block"
        }else{
            displayRecipes(result)
        }
     
        const resultName = result.filter(item => item.name.toLowerCase().includes(mainInputValue.toLowerCase()))
        let suggestion = "";

        resultName.forEach(resultItem => 
            suggestion =+ createCardsForDom(resultItem)
            )
            displayRecipes(resultName)
            const cardMessage = document.querySelector('#cardMessage')
            cardMessage.style.display = "block"

      console.log(resultName)
     

    

        // Si il y a plus de 2 caractères
       /* if (inputMain.value.length > 2) {
            for (let i = 0; i < DATA.length; i++){
                const recipe = DATA[i];
                recipe.display = false
                cardMessage.style.display = "block"
            }
            displayRecipes(DATA)

            // chercher dans les ingredients
            for (let k = 0; k < DATA.length; k++) {
                const recipe = DATA[k]
                    // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
                for (let l = 0; l < recipe.ingredients.length; l++) {
                    const ingredient = recipe.ingredients[l]

                    if (ingredient.ingredient.toLowerCase().indexOf(mainInputValue) >= 0) {
                        recipe.display = true
                        cardMessage.style.display = "none"
                        break
                    } else {
                        recipe.display = false
                    }
                }

                // chercher dans les descriptions
                const titre = recipe.name
                const description = recipe.description

                if (titre.toLowerCase().indexOf(mainInputValue) >= 0) {
                    recipe.display = true
                    cardMessage.style.display = "none"
                } else if (description.toLowerCase().indexOf(mainInputValue) >= 0) {
                    recipe.display = true
                    cardMessage.style.display = "none"
                } else {
                    recipe.display = false
                }
            }
        } else {
            // on affiche toutes les cards => display:true
            
            for (let q = 0; q > DATA.length; q++){
                const recipe = DATA[q]
                recipe.display = true
                cardMessage.style.display = "none"
            }
        }*/
     
    })
}
