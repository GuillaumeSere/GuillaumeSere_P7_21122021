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
      
        if (mainInputValue.length > 2){
           const resultDescription = result.filter(item => item.description.toLowerCase().includes(mainInputValue.toLowerCase()))
           const resultName = result.filter(item => item.name.toLowerCase().includes(mainInputValue.toLowerCase()))
         
           let suggestion = "";
        // recherche dans la description
           resultDescription.forEach(resultItem => 
                 suggestion += createCardsForDom(resultItem)
             )
         // recherche dans les names    
             resultName.forEach(resultItem => 
                suggestion += createCardsForDom(resultItem)
            )

             const cardMessage = document.querySelector('#cardMessage')
             displayRecipes(resultDescription, resultName)
             cardMessage.style.display = "block"
        }else{
            displayRecipes(result)
        }
       
    })
}
