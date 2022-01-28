import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes} from "../utils/tools.js"
import {createCardsForDom} from "../components/view/card.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  INPUT MAIN Algo boucle foreach
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
const result = DATA

export const InputMainListener = () => {
    const inputMain = document.querySelector('#inputSearch')
    
    // ===================
    //      A L'INPUT
    // ===================
    inputMain.addEventListener('input', () => {

        const mainInputValue = inputMain.value.toLowerCase();
        // recherche dans la description
        if (mainInputValue.length > 2){
           const resultDescription = result.filter(item => item.description.toLowerCase().includes(mainInputValue.toLowerCase()))
         
           let suggestion = "";
        
           resultDescription.forEach(resultItem => 
                 suggestion += createCardsForDom(resultItem)
             )
             const cardMessage = document.querySelector('#cardMessage')
             displayRecipes(resultDescription)
             cardMessage.style.display = "block"
        }else{
            displayRecipes(result)
        }
        // recherche dans les names
        if (mainInputValue.length > 2){
            const resultName = result.filter(item => item.name.toLowerCase().includes(mainInputValue.toLowerCase()))
    
            let suggestion = "";

            resultName.forEach(resultItem => 
                suggestion += createCardsForDom(resultItem)
            )
            displayRecipes(resultName)
        }else{
            displayRecipes(result)
        }
        // recherche dans les ingredients
        const resultIngredient = result.filter(item => item.ingredients)
        const filterIngredient = resultIngredient.map(item => item.ingredients)
        
        let suggestion = "";

        if (mainInputValue.length > 2){
            filterIngredient.forEach(item => {
                item.forEach(resultitem => {
                    console.log(resultitem)
                    const ingredient = resultitem.ingredient
                    if (ingredient.toLowerCase().includes(mainInputValue.toLowerCase())){
                        
                        console.log(ingredient)
                    }
                })
             })
        }
     

        
       
            
       
     

     

    

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
