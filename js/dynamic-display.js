
const navigation = document.getElementById('main-nav');
const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);

const paramValue = urlParams.get('cat-id')

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
subCategory[paramValue].forEach((subItem) => {
    const subCategoryDisplay = `
        <li>
            <a href="${subItem.link}">${subItem.name}</a>
        </li>
    `
    categoryList.innerHTML += subCategoryDisplay
})

const categoryCard = document.getElementById('categoriesGrid')
subCategory[paramValue].forEach((subItem) => {
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



categoryTitle.innerHTML  = pageDetails[paramValue].title
categoryDescription.innerHTML = pageDetails[paramValue].description

// function getPageTitle(url) {
//     const regex = /category\/([a-zA-Z]+)\.html/;
//     const match = url.match(regex);

//     if (match) {
//     const title = match[1]; 
//     return title;
//     }
// }

