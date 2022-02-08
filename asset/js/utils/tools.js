import { createCardsForDom } from "../components/view/card.js"
import { createDropdown } from "../components/view/dropdown.js"
import { refresh } from "../components/refreshRecipe.js"

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
//                          FONCTIONS UTILES DU PROJET
/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Créer un DOM Element
export const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
}   

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export const displayRecipes = (data) => {
    const zoneCards = document.querySelector(".zoneCards")
    zoneCards.innerHTML = ""

    data.forEach(recipe => {
        if (recipe.display == true) {
            const card = createCardsForDom(recipe)
            zoneCards.append(card)
        }
    });
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export const displayDropdown = () => {
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

export const displayContentsDropdown = (optionContainer, input, arrow, dropdown, pixel) => {

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

export let displayIngrediantDataIfTrue = (data, tab) => {
    data.forEach(recipe => {
        if (recipe.display == true) {
            recipe.ingredients.forEach(el => {
                tab.push(el.ingredient)
            });
        }
    })
}

export let displayUstansilDataIfTrue = (data, tab) => {
    data.forEach(recipe => {
        if (recipe.display == true) {
            recipe.ustensils.forEach(el => {
                tab.push(el)
            });
        }
    })
}

export let displayAppareilDataIfTrue = (data, tab) => {
    data.forEach(recipe => {
        if (recipe.display == true) {
            tab.push(recipe.appliance)
        }
    })
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const deleteTag = () => {
    const tags = document.querySelectorAll('.tag')
    tags.forEach(tag => {
        const circle = tag.querySelector(".bi-x-circle")
        circle.addEventListener("click", () => {
            tag.remove()
            refresh();
        })
    })
}

export const tagObserver = () => {
    const zoneTag = document.querySelector('.zoneTag')
    const observer = new MutationObserver(deleteTag)
    observer.observe(zoneTag, { childList: true })
}