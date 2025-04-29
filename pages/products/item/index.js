const productUrlString = window.location.search;
const prodUrlParams = new URLSearchParams(productUrlString);

const prodParamValue = prodUrlParams.get('id')

const product = products.find((product)=> parseInt(prodParamValue) ===  product.id)


if (product) {
    const display_image = document.getElementById("display_image")

    display_image.src = product.images[0]

    const thumbnails = document.getElementById("thumbnail-container")

    let thumbnail_display  = ''

    
    product.images.forEach((image, index) => {
        if (index == 0) {
            thumbnail_display += ` 
            <div class="thumbnail active">
              <img src="${image}" alt="Thumbnail ${index}">
            </div>`
        } else {
            thumbnail_display += ` 
            <div class="thumbnail">
              <img src="${image}" alt="Thumbnail ${index}">
            </div>`
        }
      
    })
    thumbnails.innerHTML = thumbnail_display

    const product_title = document.getElementById("product_title")
    product_title.innerHTML = product.name

    const product_description = document.getElementById("product_description")
    product_description.innerHTML = product.description

    const custom_select = document.getElementById("custom_select")

    let option_display  = ''
    product.variations.forEach((variation) => {
         option_display += `<option value="${variation.unit}" data-price="${variation.price}">${variation.unit}</option>`
    });

    custom_select.innerHTML = option_display
}

