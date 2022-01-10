export const createDropdown = (name, id, nb) => {
    return `  
    <div class="selectContainer">
        <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdown--${name}" name="sort_by" id="sort_by">
            <div class="dropFirst">
                <label for="${id}">
                    <p class="name1">${name}</p>
                </label>
                <input type="text" class="${id} displayNone" id="${id}" placeholder="Rechercher...">
                <i class="bi bi-chevron-down arrowClose"></i>
            </div>
            <div class="optionContainer${nb} optionContainer dropdown${name} displayNone" role="listbox">
            <ul class="listElmt${nb}"></ul>
            </div>
        </div>
    </div>
    `
}