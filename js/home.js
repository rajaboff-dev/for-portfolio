import {categories} from "./categories-data.js";

function showCategories(){
    let categoryContainer = document.getElementById('categories');
    if(categoryContainer.classList.contains('hidden')){
        categoryContainer.classList.remove('hidden');
        categoryContainer.classList.add('active');
        categoryContainer.innerHTML += categories.map(category => {
            return `
                <a href="./category.html" class="flex items-center gap-3 py-2 hover:bg-gray-100 px-2 rounded">
                    <img src="${category.image}" alt="category-image" class="w-10 h-10 object-cover rounded-full">
                    <h1>${category.name}</h1>
                </a>
            `;
        }).join('')
    }else {
        categoryContainer.classList.add('hidden');
        categoryContainer.classList.remove('active');
        categoryContainer.innerHTML = ''
    }
}

document.getElementById('category-btn').addEventListener('click', showCategories);
document.getElementById('category-btn-phone').addEventListener('click', showCategories);



let magazineButtons = document.querySelectorAll('.magazines button')
let map = document.querySelector('.our-magazines iframe')

magazineButtons.forEach(magazineButton => {
    magazineButton.addEventListener('click', (e) => {
        map.setAttribute('src', e.target.getAttribute('data-map'));
        magazineButtons.forEach(btn => {
            btn.classList.replace('bg-[#70C05B]', 'bg-[#F3F2F1]')
            if(btn.classList.contains('bg-[#70C05B]')){
                btn.classList.remove('text-black')
                btn.classList.add('text-white')
            }else{
                btn.classList.add('text-black')
                btn.classList.remove('text-white')
            }
        })
        magazineButton.classList.replace('bg-[#F3F2F1]', 'bg-[#70C05B]')
        magazineButton.classList.add('text-white')
    })
})