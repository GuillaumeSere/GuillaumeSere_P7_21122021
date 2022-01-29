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
        // recherche dans les descriptions et les ingredients
        if (mainInputValue.length > 2){
           const resultInput = result.filter(item => 
            item.name.toLowerCase().includes(mainInputValue) ||
            item.description.toLowerCase().includes(mainInputValue) ||
           item.ingredients.forEach(ingredient =>
            ingredient.ingredient.toLowerCase().includes(mainInputValue) 
            )
           )
           let suggestion = "";
           resultInput.forEach(resultItem => 
            suggestion += createCardsForDom(resultItem)
           )
             const cardMessage = document.querySelector('#cardMessage')
             displayRecipes(resultInput)
             cardMessage.style.display = "none"
        }else{
            displayRecipes(result)
        }
     
    })
}
