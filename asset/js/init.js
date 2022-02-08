import { DATA } from './../../data/dataHandler.js'
import { InputMainListener } from './../../asset/js/components/inputMainHandler.js';
import { DropDownIngredientsListener } from "./../../asset/js/components/dropdownHandlerIngredients.js"
import { DropDownUstansilsListener } from "./../../asset/js/components/dropdownHandlerUstansils.js"
import { DropDownAppareilListener } from "./../../asset/js/components/dropdownHandlerAppareils.js"
import { displayDropdown, displayRecipes, tagObserver } from './utils/tools.js';

const init = () => {

    displayRecipes(DATA);
    displayDropdown()
    new InputMainListener()
    new DropDownIngredientsListener()
    new DropDownUstansilsListener()
    new DropDownAppareilListener()
    tagObserver()
}

export default init