


const navigation = document.getElementById('main-nav');

let navigationDisplay = '<ul>'
category.forEach((item) => {
    navigationDisplay += `
        <li class="nav-item">
            <a href="${item.link}" class="nav-link">${item.name}</a>
        </li>
    `
})

navigationDisplay += '</ul>'
navigation.innerHTML = navigationDisplay

const categoryList = document.getElementById('categoryList')
subCategory[getPageTitle(window.location.href)].forEach((subItem) => {
    const subCategoryDisplay = `
        <li>
            <a href="${subItem.link}">${subItem.name}</a>
        </li>
    `
    categoryList.innerHTML += subCategoryDisplay
})

const categoryCard = document.getElementById('categoriesGrid')
subCategory[getPageTitle(window.location.href)].forEach((subItem) => {
    const subCategoryCardDisplay = `
        <a href="${subItem.link}" class="category-card">
            <div class="title">${subItem.name}</div>
            <div class="category-image">
                <img src="${subItem.img}" alt="${subItem.name}">
            </div>
        </a>
    `
    categoryCard.innerHTML += subCategoryCardDisplay
})

const categoryTitle = document.getElementById('categoryTitle')
const categoryDescription = document.getElementById('categoryDescription')



categoryTitle.innerHTML  = pageDetails[getPageTitle(window.location.href)].title
categoryDescription.innerHTML = pageDetails[getPageTitle(window.location.href)].description

function getPageTitle(url) {
    const regex = /category\/([a-zA-Z]+)\.html/;
    const match = url.match(regex);

    if (match) {
    const title = match[1]; 
    return title;
    }
}