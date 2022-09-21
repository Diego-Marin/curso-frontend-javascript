//Seleccion de los elementos del menu email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//Seleccion de los elementos del menu mobile
const menuHamMobile_icon = document.querySelector(".menu");
const menuHamMobile = document.querySelector(".mobile-menu");

//Seleccion de los elementos del aside carrito de compras
const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const ShopingCarContainer = document.querySelector('#ShopingCarContainer');

//Seleccion de product container div
const cardsContainer = document.querySelector('.cards-container');

//Seleccion del Aside product detail y icon closed product detail aside
const asideProductDetail = document.querySelector('.ProductDetail');
const iconCloseAsideDetailProduct = document.querySelector('.product-detail-close');

//Evento click de los elementos
menuEmail.addEventListener('click', toogleDesktopMenu)
menuHamMobile_icon.addEventListener('click', toogleMobileMenu)
iconShoppingCart.addEventListener('click', toogleAsideMenu_shoppingCart)
iconCloseAsideDetailProduct.addEventListener('click', closeProductDetailAside)

//Funcion agregar la clase .inactive al Menu email
function toogleDesktopMenu() {

    const isMenuAsideClosed = ShopingCarContainer.classList.contains('inactive');

    if (!isMenuAsideClosed) {
        ShopingCarContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//Funcion agregar la clase .inactive al Menu mobile
function toogleMobileMenu() {

    const isMenuAsideClosed = ShopingCarContainer.classList.contains('inactive');

    if (!isMenuAsideClosed) {
        ShopingCarContainer.classList.add('inactive');
    }

    menuHamMobile.classList.toggle('inactive');
}

//Funcion agregar la clase .inactive  aside carrito de compras
function toogleAsideMenu_shoppingCart(){

    const isMenuMobileClosed = menuHamMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = ProductDetail.classList.contains('inactive');

    if (!isMenuMobileClosed) {
        menuHamMobile.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        ProductDetail.classList.add('inactive');
    }

    ShopingCarContainer.classList.toggle('inactive');
}

//Funcion para abrir el menu aside
function openProductDetailAside (){
   ShopingCarContainer.classList.add('inactive');
   ProductDetail.classList.remove('inactive');   
}

//Funcion para cerrar el menu aside
function closeProductDetailAside(){
    ProductDetail.classList.add('inactive');
}


/*Array de objetos con productos  y sus propiedades*/

const productList = [];

productList.push({
    name: 'bike',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'contador',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'bike',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'contador',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProduct(arr){
    for (product of arr) {

        //div contenedor
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');

        //div imagen product
        const ProductImg = document.createElement ('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.addEventListener('click', openProductDetailAside);

        //div product info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        //div product text
        const productTextCart = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        //figure
        const productInfoFigure = document.createElement('figure');

        const iconCarShoping = document.createElement ('img');
        iconCarShoping.setAttribute('src', './icons/bt_add_to_cart.svg');


        //agrupacion de nodos HTML

        productInfoFigure.appendChild(iconCarShoping);

        productTextCart.append(productPrice, productName);

        productInfo.append(productTextCart, productInfoFigure);

        productCart.append(ProductImg, productInfo);

        cardsContainer.appendChild(productCart);
    };
}
renderProduct(productList);