import { DATA } from './../../data/dataHandler.js'
import { InputMainListener } from './../../asset/js/components/inputMainHandler.js';
import { dropDownIngredientsListener } from "./../../asset/js/components/dropdownHandlerIngredients.js"
import { dropDownUstansilsListener } from "./../../asset/js/components/dropdownHandlerUstansils.js"
import { dropDownAppareilListener } from "./../../asset/js/components/dropdownHandlerAppareils.js"
import { displayDropdown, displayRecipes, removeRecipes, deleteTag, tagObserver } from './utils/tools.js';

const init = () => {

    displayRecipes(DATA);
    displayDropdown()
    InputMainListener()
    dropDownIngredientsListener()
    dropDownUstansilsListener()
    dropDownAppareilListener()
    tagObserver()
}

export default init