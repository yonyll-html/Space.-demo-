const stg1 = document.getElementById("256");
const stg2 = document.getElementById("512");
const price = document.getElementById("productprice");

function removeActiveClass(buttons) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

stg1.addEventListener("click", function() {
    price.innerHTML = "From $999 or $41.62/mo. for 24 mo";
    removeActiveClass([stg1, stg2]);
    stg1.classList.add('active');
});

stg2.addEventListener("click", function() {
    price.innerHTML = "From $1199 or $49.95/mo. for 24 mo";
    removeActiveClass([stg1, stg2]);
    stg2.classList.add('active');
});


const lavendar = document.getElementById('color1');
const sage = document.getElementById('color2');
const mistblue = document.getElementById('color3');
const white = document.getElementById('color4');
const black = document.getElementById('color5');
const productImage = document.getElementById('ipimage');

if (lavendar) {
    lavendar.addEventListener('click', () => {
        productImage.src = './assets/17baselav.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([lavendar, sage, mistblue, white, black]);
        lavendar.classList.add('active');
    });
}

if (sage) {
    sage.addEventListener('click', () => {
        productImage.src = './assets/17basesage.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([lavendar, sage, mistblue, white, black]);
        sage.classList.add('active');
    });
}

if (mistblue) {
    mistblue.addEventListener('click', () => {
        productImage.src = './assets/17baseblue.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([lavendar, sage, mistblue, white, black]);
        mistblue.classList.add('active');
    });
}

if (white) {
    white.addEventListener('click', () => {
        productImage.src = './assets/17basewhite.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([lavendar, sage, mistblue, white, black]);
        white.classList.add('active');
    });
}

if (black) {
    black.addEventListener('click', () => {
        productImage.src = './assets/17baseblack.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([lavendar, sage, mistblue, white, black]);
        black.classList.add('active');
    });
}

function removeActiveClass(buttons) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

stg1.addEventListener("click", function() {
    price.innerHTML = "From $799 or $33.29/mo. for 24 mo";
    removeActiveClass([stg1, stg2, stg3]);
    stg1.classList.add('active');
});

stg2.addEventListener("click", function() {
    price.innerHTML = "From $999 or $41.62/mo. for 24 mo";
    removeActiveClass([stg1, stg2]);
    stg2.classList.add('active');
});

const Purchase = document.getElementById('Purchase');
const Finance = document.getElementById('Finance');

if (Purchase) {
    Purchase.addEventListener('click', () => {
        window.location.href = './purchase.html';
    });
}

if (Finance) {
    Finance.addEventListener('click', () => {
        window.location.href = './purchase.html';
    });
}