import { createDomElement } from "./../../utils/tools.js"

export function createCardsForDom(recipe) {

    var cardContainer = createDomElement("cardContainer", "div");
    var cardImg = createDomElement("cardImg", "div");
    var cardBox = createDomElement("cardBox", "div");
    var bodyCard = createDomElement("bodyCard", "div");
    var titleTimeCard = createDomElement("titleTimeCard", "div");
    var titleCard = createDomElement("titleCard", "p");
    var timeCard = createDomElement("timeCard", "div");
    var clock = createDomElement("bi", "i");
    var time = createDomElement("time", "p");
    var recetteCard = createDomElement("recetteCard", "div");
    var ingredientsCard = createDomElement("ingredientsCard", "div");
    var cardResume = createDomElement("cardResume", "div");
    var resume = createDomElement("resume", "p");
    
    cardImg.classList.add("bg-secondary")
    clock.classList.add("bi-clock")
    
    titleCard.innerHTML = recipe.name
    time.innerHTML = recipe.time + " min"
    resume.innerHTML = recipe.description + "."
    
    cardContainer.append(cardImg)
    cardContainer.append(cardBox)
    cardBox.append(bodyCard)
    bodyCard.append(titleTimeCard)
    bodyCard.append(recetteCard)
    titleTimeCard.append(titleCard)
    titleTimeCard.append(timeCard)
    timeCard.append(clock)
    timeCard.append(time)
    recetteCard.append(ingredientsCard)
    recetteCard.append(cardResume)
    cardResume.append(resume)


    for (var j = 0; j < recipe.ingredients.length; j++) {

        var allingredientsCard = createDomElement("allingredientsCard", "p");

        var ingredient = recipe.ingredients[j].ingredient
        var quantity = recipe.ingredients[j].quantity
        var unit = recipe.ingredients[j].unit

        if (quantity == null) {
            allingredientsCard.innerHTML = ingredient
            ingredientsCard.append(allingredientsCard)
        } else if (unit == null) {
            allingredientsCard.innerHTML = ingredient + " : " + quantity
            ingredientsCard.append(allingredientsCard)
        } else {
            allingredientsCard.innerHTML = ingredient + " : " + quantity + " " + unit
            ingredientsCard.append(allingredientsCard)
        }
    }
    return cardContainer
}