import { products } from "./products-data.js";

let productsContainer = document.getElementById('products')

console.log(products);

productsContainer.innerHTML = products.map(product => {
    return `<div class="bg-white rounded pb-4 duration-300 hover:shadow-mainShadow w-full h-full">
                    <div class="flex items-end relative">
                        <img src="${product.images[0]}" class='rounded w-full object-cover h-full'>
                        <div class="absolute right-3 top-0 bg-blue-100 px-1 rounded">
                            <i class="fa-regular fa-heart like-product"></i>
                        </div>
                    </div>
                    <div class="px-3 py-3 flex flex-col gap-3">
                        <div class="flex items-center">
                            <h1><b>${product.price}$</b></h1>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h1>${product.name}</h1>
                            <p class="line-clamp-3 text-[13px] xl:line-clamp-1">${product.description}</p>
                            <div class="text-[10px]">
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                            </div>
                        </div>
                        <button class="border-2 border-mainColor py-2 rounded hover:bg-mainColor hover:text-white">В корзину</button>
                    </div>
                </div>`
}).join('')


let searcherInput = document.getElementById('search-input')
searcherInput.addEventListener('input', (e) => {
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    productsContainer.innerHTML = filteredProducts.map(product => {
        return productsContainer.innerHTML = filteredProducts.length 
        ?    `<div class="bg-white rounded pb-4 duration-300 hover:shadow-mainShadow w-full h-full">
                    <div class="flex items-end relative">
                        <img src="${product.images[0]}" class='rounded w-full object-cover h-full'>
                        <div class="absolute right-3 top-0 bg-blue-100 px-1 rounded">
                            <i class="fa-regular fa-heart like-product"></i>
                        </div>
                    </div>
                    <div class="px-3 py-3 flex flex-col gap-3">
                        <div class="flex items-center">
                            <h1><b>${product.price}$</b></h1>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h1>${product.name}</h1>
                            <p class="line-clamp-3 text-[13px] xl:line-clamp-1">${product.description}</p>
                            <div class="text-[10px]">
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                                <i class="fa-solid fa-star text-mainColor"></i>
                            </div>
                        </div>
                        <button class="border-2 border-mainColor py-2 rounded hover:bg-mainColor hover:text-white">В корзину</button>
                    </div>
                </div>`
        : `<p>No products found.</p>`;
    }).join('')
})