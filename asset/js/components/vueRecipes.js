
function createListTemplate(recipes) {
    let template = "";
    recipes.forEach(recipe => {
        template +=
        ` 
        <div class="col-12 col-md-6 col-xl-4">
        <div class="card">
            <div class="card__picture">
            <img class="img-card" src="./asset/images/logo.svg" alt="Les petits plats logo">
            </div>
            <div class="card__informations pt-4 p-3">
                <div class="d-flex justify-content-between card__header mb-4">
                    <div class="card__title">${recipe.name}</div>
                    <div class="card__duration">
                        <img class="logo" src="./asset/images/timer.svg" alt="Recipe duration">
                        ${recipe.time}
                    </div>
                </div>
                <div class="d-flex justify-content-between card__description">
                    <ul class="card__ingredients">
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex">
                                <p class="card__ingredients__quantity">${recipe.ingredients[0].ingredient} : ${recipe.ingredients[0].quantity}</p>
                                <p class="card__ingredients__unit">${recipe.ingredients[0].unit}</p>
                            </div>
                        </li>
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex">
                                <p class="card__ingredients__quantity">${recipe.ingredients[1].ingredient} : ${recipe.ingredients[1].quantity}</p>
                            </div>
                        </li>
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex">
                                <p class="card__ingredients__quantity">${recipe.ingredients[2].ingredient} : ${recipe.ingredients[2].quantity}</p>
                                <p class="card__ingredients__unit">${recipe.ingredients[2].unit}</p>
                            </div>
                        </li>
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex">
                                <p class="card__ingredients__quantity"> : </p>
                                <p class="card__ingredients__unit"></p>
                            </div>
                        </li>
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex"></div>
                        </li>
                    </ul>
                    <div class="card__instructions">
                        <p>${recipe.description} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    });
    return template;
}


export default {
    createListTemplate
}