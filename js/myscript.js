const ImmaginiArr = [
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

let immagineMain =  ''; //creiamo una variabile let(perchè il contenuto cambia) vuota che poi andremo a riempire
let elementActive = 0;  // creiamo una variabile e gli diamo 0 per renderla false che serve per rende le nostre img nascoste

for (let i = 0; i< ImmaginiArr.length; i++){ //creiamo un ciclo for che va a riempire il contenuto della nostra variabile immagineMain per ogni volta fino a quando la funzione .lenght lo rende possibile 
    immagineMain += `
        <div class="item" id="item-${i}">
            <img src="${ImmaginiArr[i]}">
        </div>`;
}

const contenitoreMain = document.querySelector ('.container');
contenitoreMain.innerHTML = immagineMain;

let imgActive = document.getElementById('item-' + elementActive) 
imgActive.classList.add('active');
//fine immagine principale 


let immaginiLaterali =  ''; //creiamo una variabile let(perchè il contenuto cambia) vuota che poi andremo a riempire

for (let i = 0; i< ImmaginiArr.length; i++){ //creiamo un ciclo for che va a riempire il contenuto della nostra variabile immagineMain per ogni volta fino a quando la funzione .lenght lo rende possibile 
    immaginiLaterali += `
        <div class="items" id="item-${i}">
            <img src="${ImmaginiArr[i]}">
        </div>`;
}

const contenitoreSide = document.querySelector ('.ms_side');
contenitoreSide.innerHTML += immaginiLaterali;
//fine immagine principale 



//let testoMain =  ''; //creiamo una variabile let(perchè il contenuto cambia) vuota che poi andremo a riempire

//for (let i = 0; i< title.length; i++){ //creiamo un ciclo for che va a riempire il contenuto della nostra variabile immagineMain per ogni volta fino a quando la funzione .lenght lo rende possibile 
//    testoMain += `
//        <h3 class="titolo" id="titolo1-${i}">
//            
//        </h3>`;
//}

//const contenitoreTesto = document.querySelector ('.titolo');
//contenitoreTesto.innerHTML =+ testoMain;

//non funziona
const up = document.getElementById ('.ms_up');
const down = document.getElementById ('.ms_down');

up.addEventListener('click',function(){
    elementActive++;
    imgActive.classList.remove('active');
    imgActive = getElementById('item-'+ elementActive);
    imgActive.classList.add('active')
});

down.addEventListener('click',function(){
    elementActive--;
    imgActive.classList.remove('active');
    imgActive = getElementById('item-'+ elementActive);
    imgActive.classList.add('active')
});