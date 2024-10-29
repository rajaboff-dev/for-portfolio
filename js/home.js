import {categories} from "./categories-data.js";

function showCategories(){
    let categoryContainer = document.getElementById('categories');
    if(categoryContainer.classList.contains('hidden')){
        categoryContainer.classList.remove('hidden');
        categoryContainer.classList.add('active');
        categoryContainer.innerHTML += categories.map(category => {
            return `
                <a href="" class="flex items-center gap-3 py-2 hover:border-b-gray-500 px-2 rounded">
                    <img src="${category.image}" alt="category-image" class="w-10 h-10 object-cover rounded-full">
                    <h1>${category.name}</h1>
                </a>
            `;
        }).join('')
    }else {
        categoryContainer.classList.add('hidden');
        categoryContainer.innerHTML = ''
    }
}

document.getElementById('category-btn').addEventListener('click', showCategories);
document.getElementById('category-btn-phone').addEventListener('click', showCategories);