
function createTagTemplate(recipe){
    let template = "";
        template +=
        `
        <li class="p-3 selected-tags__ingredients">${recipe.ingredient}</li>
        <li class="p-3 selected-tags__appliances">${recipe.appliance}</li>
        <li class="p-3 selected-tags__ustensils">${recipe.ustensils}</li>
        `;
        console.log(recipe)
    return template;
}

export default {
    createTagTemplate
}