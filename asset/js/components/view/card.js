import { createDomElement } from "./../../utils/tools.js"

export const createCardsForDom = (recipe) => {

    const cardContainer = createDomElement("cardContainer", "div");
    const cardImg = createDomElement("cardImg", "div");
    const image = document.createElement("img");
    const cardBox = createDomElement("cardBox", "div");
    const bodyCard = createDomElement("bodyCard", "div");
    const titleTimeCard = createDomElement("titleTimeCard", "div");
    const titleCard = createDomElement("titleCard", "p");
    const timeCard = createDomElement("timeCard", "div");
    const clock = createDomElement("bi", "i");
    const time = createDomElement("time", "p");
    const recetteCard = createDomElement("recetteCard", "div");
    const ingredientsCard = createDomElement("ingredientsCard", "div");
    const cardResume = createDomElement("cardResume", "div");
    const resume = createDomElement("resume", "p");
    
    image.src = recipe.image
    clock.classList.add("bi-clock")
    
    titleCard.innerHTML = recipe.name
    time.innerHTML = recipe.time + " min"
    resume.innerHTML = recipe.description + "."
    
    cardContainer.append(cardImg)
    cardImg.append(image)
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


    for (let j = 0; j < recipe.ingredients.length; j++) {

        const allingredientsCard = createDomElement("allingredientsCard", "p");

        const ingredient = recipe.ingredients[j].ingredient
        const quantity = recipe.ingredients[j].quantity
        const unit = recipe.ingredients[j].unit

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