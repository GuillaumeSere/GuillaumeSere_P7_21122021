import { createCardsForDom } from "../components/view/card.js"
import { createDropdown } from "../components/view/dropdown.js"
import { refresh } from "../components/refreshRecipe.js"

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
//                          FONCTIONS UTILES DU PROJET
/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/


// Créer un DOM Element
export function createDomElement(className, DomElem){
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export function displayRecipes(data){
    const zoneCards = document.querySelector(".zoneCards")
    zoneCards.innerHTML = ""

    for (var i = 0; i < data.length; i++){
        if (data[i].display == true){
            const card = createCardsForDom(data[i])
            zoneCards.append(card)
        }
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet de fermer une fenêtre
export function removeRecipes(data){
    const zoneCards = document.querySelector(".zoneCards")

   for (var i = 0; i< data.length; i++){
       if (data[i].display == false){
           const card = createCardsForDom(data[i])
           zoneCards.innerHTML = ""
       }
   }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export function displayDropdown() {
    const zoneDropdown = document.querySelector(".zoneDropdown")

    const dropdown1 = createDropdown('ingredients', 'inputInDropdownBlue', 1)
    const dropdown2 = createDropdown('appareil', 'inputInDropdownGreen', 2)
    const dropdown3 = createDropdown('ustensiles', 'inputInDropdownSalmon', 3)
    zoneDropdown.innerHTML += dropdown1 + dropdown2 + dropdown3

}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const removeDuplicateItemInArray = (array) => array.filter((item, pos) => {
    return array.indexOf(item) == pos;
})

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const removeDuplicateItemInArrayUstensils = (array) => array.filter((item, pos) => {
    return array.indexOf(item.toLowerCase()) == pos;
})

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export function displayContentsDropdown(optionContainer, input, arrow, dropdown, pixel) {

    if (optionContainer.classList.contains("displayNone")) {
        optionContainer.classList.remove('displayNone')
        optionContainer.classList.add('displayFlex')
        input.classList.remove('displayNone')
        input.classList.add('displayBlock')
        input.focus()
        arrow.classList.remove('arrowClose')
        arrow.classList.add('arrowOpen')
        dropdown.style.width = pixel + "px"
    } else {
        optionContainer.classList.remove('displayFlex')
        optionContainer.classList.add('displayNone')
        input.classList.remove('displayBlock')
        input.classList.add('displayNone')
        arrow.classList.remove('arrowOpen')
        arrow.classList.add('arrowClose')
        dropdown.style.width = "250px"
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export function displayIngrediantDataIfTrue(data, tab) {
    for (var i = 0; i < data.length; i++){
        if (data[i].display == true){
            for (var j = 0; j < data[i].ingredients.length; j++){
                tab.push(data[i].ingredients[j].ingredient)
            }
        }
    }
}

export function displayUstansilDataIfTrue(data, tab) {
   for (var i = 0; i < data.length; i++){
       if (data[i].display == true){
           for (var j = 0; j < data[i].ustensils.length; j++){
               tab.push(data[i].ustensils[j])
           }
       }
   }
}

export function displayAppareilDataIfTrue(data, tab) {
   for ( var i = 0; i < data.length; i++){
       if (data[i].display == true){
           tab.push(data[i].appliance)
       }
   }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export function deleteTag() {
    var tags = document.querySelectorAll('.tag')
    tags.forEach(tag => {
        const circle = tag.querySelector(".bi-x-circle")
        circle.addEventListener("click", () => {
            tag.remove()
            refresh();
        })
    })
}

export function tagObserver() {
    const zoneTag = document.querySelector('.zoneTag')
    const observer = new MutationObserver(deleteTag)
    observer.observe(zoneTag, { childList: true })
}