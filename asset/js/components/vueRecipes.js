
function createListTemplate(recipes) {
    let template = "";
    recipes.forEach(recipe => {
        template +=
        ` <div class="col-12 col-md-6 col-xl-4">
        <div class="card">
            <div class="card__picture"></div>
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
                                <p class="card__ingredients__quantity"> : 400</p>
                                <p class="card__ingredients__unit">ml</p>
                            </div>
                        </li>
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex">
                                <p class="card__ingredients__quantity"> : 2</p>
                            </div>
                        </li>
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex">
                                <p class="card__ingredients__quantity"> : 2</p>
                                <p class="card__ingredients__unit">cuillères à soupe</p>
                            </div>
                        </li>
                        <li class="d-flex flex-wrap">
                            <p class="card__ingredients__name"></p>
                            <div class="d-flex">
                                <p class="card__ingredients__quantity"> : 30</p>
                                <p class="card__ingredients__unit">grammes</p>
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
        `
    });
    return template;
}


export default {
    createListTemplate
}