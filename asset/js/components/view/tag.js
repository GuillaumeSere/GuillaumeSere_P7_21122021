export const createTag = (name, dropdown) => {
    return `  
        <div class="tag tag${dropdown}">
            <span class="tagTxt">${name}</span>
            <i class="bi bi-x-circle"></i>
        </div>
    `
}