const button1 = document.getElementById('17pro');
const button2 = document.getElementById('17promax');
const productName = document.getElementById('productname');
const productName1 = document.getElementById('productname1');
const productPrice = document.getElementById('productprice');
const storageButtons = document.getElementById('256');
const storageButtons1 = document.getElementById('512');
const storageButtons2 = document.getElementById('1tb');

function removeActiveClass(buttons) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

if (button1) {
    button1.addEventListener('click', () => {
        productName.innerHTML = 'Purchase <br> iPhone 17 Pro';
        productName1.innerHTML = 'iPhone 17 Pro';
        productPrice.innerHTML = 'From $1099 or $45.79/mo. for 24 mo';
        button2.innerHTML = 'iPhone 17 Pro Max <br> + $100';
        button1.innerHTML = 'iPhone 17 Pro <br> -From $1099';

        removeActiveClass([button1, button2]);
        button1.classList.add('active');

        const existing2TB = document.getElementById('2tb');
        if (existing2TB) {
            existing2TB.remove();
        }
    });
}

if (button2) {
    button2.addEventListener('click', () => {
        productName.innerHTML = 'Purchase <br> iPhone 17 Pro Max';
        productName1.innerHTML = 'iPhone 17 Pro Max';
        productPrice.innerHTML = 'From $1199 or $49.95/mo. for 24 mo';
        button1.innerHTML = 'iPhone 17 Pro <br> - $100';
        button2.innerHTML = 'iPhone 17 Pro Max <br> -From $1199';
        
        removeActiveClass([button1, button2]);
        button2.classList.add('active');

        if (!document.getElementById('2tb')) {
            const button2TB = document.createElement('button');
            button2TB.className = 'modelbutton';
            button2TB.id = '2tb';
            button2TB.innerHTML = '2 TB';
            
            button2TB.addEventListener('click', () => {
                productPrice.innerHTML = 'From $1999 or $83.29/mo. for 24 mo';
                removeActiveClass([storageButtons, storageButtons1, storageButtons2, button2TB]);
                button2TB.classList.add('active');
            });
            
            storageButtons2.after(button2TB);
        }
    });
}

if (storageButtons) {
    storageButtons.addEventListener('click', () => {
        if (productName1.innerHTML.includes('Pro Max')) {
            productPrice.innerHTML = 'From $1199 or $49.95/mo. for 24 mo';
        } else {
            productPrice.innerHTML = 'From $1099 or $45.79/mo. for 24 mo';
        }

        const existing2TB = document.getElementById('2tb');
        const storageButtonsArray = [storageButtons, storageButtons1, storageButtons2];
        if (existing2TB) storageButtonsArray.push(existing2TB);
        removeActiveClass(storageButtonsArray);
        storageButtons.classList.add('active');
    });
}

if (storageButtons1) {
    storageButtons1.addEventListener('click', () => {
        if (productName1.innerHTML.includes('Pro Max')) {
            productPrice.innerHTML = 'From $1399 or $58.29/mo. for 24 mo';
        } else {
            productPrice.innerHTML = 'From $1299 or $54.12/mo. for 24 mo';
        }

        const existing2TB = document.getElementById('2tb');
        const storageButtonsArray = [storageButtons, storageButtons1, storageButtons2];
        if (existing2TB) storageButtonsArray.push(existing2TB);
        removeActiveClass(storageButtonsArray);
        storageButtons1.classList.add('active');
    });
}

if (storageButtons2) {
    storageButtons2.addEventListener('click', () => {
        if (productName1.innerHTML.includes('Pro Max')) {
            productPrice.innerHTML = 'From $1599 or $66.62/mo. for 24 mo';
        } else {
            productPrice.innerHTML = 'From $1499 or $62.45/mo. for 24 mo';
        }
        
        const existing2TB = document.getElementById('2tb');
        const storageButtonsArray = [storageButtons, storageButtons1, storageButtons2];
        if (existing2TB) storageButtonsArray.push(existing2TB);
        removeActiveClass(storageButtonsArray);
        storageButtons2.classList.add('active');
    });
}

const silver = document.getElementById('color1');
const cosmicOrange = document.getElementById('color2');
const deepBlue = document.getElementById('color3');
const productImage = document.getElementById('ipimage');

if (silver) {
    silver.addEventListener('click', () => {
        productImage.src = './assets/17prosilver.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([silver, cosmicOrange, deepBlue]);
        silver.classList.add('active');
    });
}

if (cosmicOrange) {
    cosmicOrange.addEventListener('click', () => {
        productImage.src = './assets/17proorange.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([silver, cosmicOrange, deepBlue]);
        cosmicOrange.classList.add('active');
    });
}

if (deepBlue) {
    deepBlue.addEventListener('click', () => {
        productImage.src = './assets/17prodeepblue.png';
        productImage.style.height = '500px';
        productImage.style.marginLeft = '0px'; 
        removeActiveClass([silver, cosmicOrange, deepBlue]);
        deepBlue.classList.add('active');
    });
}

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