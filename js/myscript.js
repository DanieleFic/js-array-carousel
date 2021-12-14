const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let itemsContent =  '';
let elementActive = 0;

for (let i = 0; i< items.length; i++){
    itemsContent += `
        <div class="item" id="item-${i}">
            <img src="${items[i]}">
        </div>`;
}

const itemsContainer = document.querySelector ('.container');
itemsContainer.innerHTML = itemsContent;

const imgActive = document.getElementById('item-'+elementActive)
imgActive.classList.add('active');


let itemsSlide =  '';

for (let i = 0; i< items.length; i++){
    itemsSlide += `
        <div class="items" id="item-${i}">
            <img src="${items[i]}">
        </div>`;
}

const itemsContainer2 = document.querySelector ('.ms_side');
itemsContainer2.innerHTML = itemsSlide;