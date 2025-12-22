//menu icon
const menuIcon = document.querySelector('.fa-bars-staggered')
const menuList = document.querySelector('.bottom-nav .menu ul');
const menuLinks = document.querySelectorAll('.bottom-nav .menu ul li a')

menuIcon.addEventListener('click', function(){
    this.classList.toggle('rotate')
    menuList.classList.toggle('show')
})
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(menuList.classList.contains('show')){
            menuList.classList.remove('show')
            menuIcon.classList.remove('rotate')
        }
    })
})


//slider code
$(document).ready(function(){
    $('.slider').slick({
        // setting-name: setting-value
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '.prev',
        nextArrow: '.next',
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
        ]
    });
});

//scroll code
const toUp = document.querySelector('.fa-circle-up')
addEventListener('scroll' , function(){
    if(window.scrollY >= 420){
        toUp.style.visibility = 'visible'
        toUp.style.opacity = 1
        toUp.style.bottom = '30px'
    }
    else{
        toUp.style.visibility = 'hidden'
        toUp.style.opacity = 0
        toUp.style.bottom = '100%'
    }
})

//scroll - to up code
toUp.addEventListener('click', function(){
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
})





// cart1
const openCart = document.querySelector('.fa-cart-shopping')
const closeCart = document.querySelector('.fa-circle-xmark')
const cartItems = document.querySelector('.cart1')
const shadowBox = document.querySelector('.shadowBox')


openCart.onclick = ()=> handleDisplayCart('open')
closeCart.onclick = ()=> handleDisplayCart('close')
shadowBox.onclick = ()=> handleDisplayCart('close')

function handleDisplayCart(x){
    if(x === 'open'){
        cartItems.classList.add('open')
        shadowBox.classList.add('open')
    }
    else{
        cartItems.classList.remove('open')
        shadowBox.classList.remove('open')
    }
}


