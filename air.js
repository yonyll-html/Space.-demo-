const stg1 = document.getElementById("256");
const stg2 = document.getElementById("512");
const stg3 = document.getElementById("1tb");
const price = document.getElementById("productprice");

stg1.addEventListener("click", function() {
    price.innerHTML = "From $999 or $41.62/mo. for 24 mo";
});

stg2.addEventListener("click", function() {
    price.innerHTML = "From $1199 or $49.95/mo. for 24 mo";
});

stg3.addEventListener("click", function() {
    price.innerHTML = "From $1399 or $58.29/mo. for 24 mo";
});

const skyblue = document.getElementById('color1');
const lightgold = document.getElementById('color2');
const cloudgold = document.getElementById('color3');
const spaceblack = document.getElementById('color4');
const productImage = document.getElementById('ipimage');

if (skyblue) {
    skyblue.addEventListener('click', () => {
        productImage.src = './assets/airskyblue.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([skyblue, lightgold, cloudgold, spaceblack]);
        skyblue.classList.add('active');
    });
}

if (lightgold) {
    lightgold.addEventListener('click', () => {
        productImage.src = './assets/airlightgold.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([skyblue, lightgold, cloudgold, spaceblack]); // Fixed this line
        lightgold.classList.add('active');
    });
}

if (cloudgold) {
    cloudgold.addEventListener('click', () => {
        productImage.src = './assets/aircloudgold.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([skyblue, lightgold, cloudgold, spaceblack]);
        cloudgold.classList.add('active');
    });
}

if (spaceblack) {
    spaceblack.addEventListener('click', () => {
        productImage.src = './assets/airspaceblack.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([skyblue, lightgold, cloudgold, spaceblack]);
        spaceblack.classList.add('active');
    });
}

// Add the removeActiveClass function
function removeActiveClass(buttons) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

stg1.addEventListener("click", function() {
    price.innerHTML = "From $999 or $41.62/mo. for 24 mo";
    removeActiveClass([stg1, stg2, stg3]);
    stg1.classList.add('active');
});

stg2.addEventListener("click", function() {
    price.innerHTML = "From $1199 or $49.95/mo. for 24 mo";
    removeActiveClass([stg1, stg2, stg3]);
    stg2.classList.add('active');
});

stg3.addEventListener("click", function() {
    price.innerHTML = "From $1399 or $58.29/mo. for 24 mo";
    removeActiveClass([stg1, stg2, stg3]);
    stg3.classList.add('active');
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