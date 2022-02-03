import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes} from "../utils/tools.js"
import {createCardsForDom} from "../components/view/card.js"


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  INPUT MAIN Algo boucle foreach
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
export class InputMainListener{
    constructor(){
        this.result = DATA
        this.inputMain = document.querySelector('#inputSearch')
        this.cardMessage = document.querySelector('#cardMessage')
        this.mainSearch();
    }
    mainSearch=()=>{
        this.inputMain.addEventListener('input', () => {

            this.mainInputValue = this.inputMain.value.toLowerCase();
            // recherche dans les descriptions et les ingredients
            if (this.mainInputValue.length > 2){
               this.resultInput = this.result.filter(item => 
                item.name.toLowerCase().includes(this.mainInputValue) ||
                item.description.toLowerCase().includes(this.mainInputValue) ||
               item.ingredients.forEach(ingredient =>
                ingredient.ingredient.toLowerCase().includes(this.mainInputValue))
               );
               this.suggestion = "";
               this.resultInput.forEach(resultItem => 
                this.suggestion += createCardsForDom(resultItem)
               )
                 displayRecipes(this.resultInput)
                 this.cardMessage.style.display = "block"
            }else{
                displayRecipes(this.result)
                this.cardMessage.style.display = "none"
            }
        })
    }
}

/*const result = DATA

export const InputMainListener = () => {
    const inputMain = document.querySelector('#inputSearch')
    const cardMessage = document.querySelector('#cardMessage')
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
            ingredient.ingredient.toLowerCase().includes(mainInputValue))
           );
           let suggestion = "";
           resultInput.forEach(resultItem => 
            suggestion += createCardsForDom(resultItem)
           )
             displayRecipes(resultInput)
             cardMessage.style.display = "block"
        }else{
            displayRecipes(result)
            cardMessage.style.display = "none"
        }
    })
}

*/

