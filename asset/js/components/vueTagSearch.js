function createIngredientTemplate(recipes) {
    let template = "";
    recipes.forEach(recipe => {
        template +=
        `
        <div class="mt-2 col-12 col-md-6 col-xl-3">
        <form class="form__ingredients" id="form-ingredient">
            <input class="secondary-search p-4 w-100 search__ingredients closed" placeholder="Ingredients" />
            <img class="closed-search close-ingredient" src="./asset/images/closed-search.svg" alt="" />
            <img class="opened-search open-ingredient invisible" src="./asset/images/opened-search.svg" alt="" />
            <ul class="d-flex pl-4 ingredients__results invisible">
                <li></li>
            </ul>
        </form>
        `
    });
    return template;
}

function createAppareilTemplate(appliance) {
    let template = "";
    template +=
    `
        <div class="mt-2 col-12 col-md-6 col-xl-3">
        <form class="form__appareils" id="form-appareil">
            <input class="secondary-search p-4 w-100 search__appareils closed" placeholder="Appareils" />
            <img class="closed-search close-appareil" src="./asset/images/closed-search.svg" alt="" />
            <img class="opened-search open-appareil invisible" src="./asset/images/opened-search.svg" alt="" />
            <ul class="d-flex pl-4 appliance__results invisible">
                <li>Blender</li>
            </ul>
        </form>
    </div>
    `;
    return template;
}

export default {
    createIngredientTemplate,
    createAppareilTemplate
}