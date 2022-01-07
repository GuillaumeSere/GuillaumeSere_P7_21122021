function createTagTemplate(recipes){
    let template = "";
    recipes.forEach(tag => {
        template +=
        `
        <li class="p-3 selected-tags__ingredients">${tag.ingredients}</li>
        <li class="p-3 selected-tags__appliances">${tag.appliances}</li>
        <li class="p-3 selected-tags__ustensils">${tag.ustensils}</li>
        `
        console.log(tag)
    }) ;
    return template;
}

export default {
    createTagTemplate
}