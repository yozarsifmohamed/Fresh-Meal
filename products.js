//jason - repeat card to 10 cards dynamic
var products = [
    {
        id:1 ,
        img:"Assets/Images/icone.png" ,
        name:"Product one",
        price:30,

    },
    {
        id:2 ,
        img:"Assets/Images/jars.jpg" ,
        name:"Product two",
        price:45,
    },
    {
        id:3 ,
        img:"Assets/Images/plate-2.png" ,
        name:"Product three",
        price:28,
    },
    {
        id:4 ,
        img:"Assets/Images/plate-3.png" ,
        name:"Product four",
        price:28,
    },
    {
        id:5 ,
        img:"Assets/Images/plate-1.png" ,
        name:"Product five",
        price:50,
    },
    {
        id:6 ,
        img:"Assets/Images/salad-table.jpg" ,
        name:"Product six",
        price:60,
    },
    {
        id:7 ,
        img:"Assets/Images/yogurt.png" ,
        name:"Product seven",
        price:75,
    },
    {
        id:8 ,
        img:"Assets/Images/cupcake.png" ,
        name:"Product eight",
        price:72,
    },
    {
        id:9 ,
        img:"Assets/Images/food-table.jpg" ,
        name:"Product nine",
        price:80,
    },
    {
        id:10,
        img:"Assets/Images/coffee.jpg" ,
        name:"Product ten",
        price:100,
    },
]

document.addEventListener('DOMContentLoaded', ()=>{
    
    let items = ''
    for( let i = 0 ; i < products.length ; i++ ){
        items += `
            <div class="card">
                <div>
                    <img src="${products[i].img}">
                </div>
                <div class="card_details">
                    <b>${products[i].name}</b>
                    <p>${products[i].price}</p>
                    <button onclick='addToCart(${i})'> Add To Cart </button>
                </div>
            </div>
            `
        }
    //setInterval(()=>{
        document.querySelector('.products .container').innerHTML = items
    //}, 2000)
    
})

//add to cart
let cart = []
function addToCart(index){
    const exisitingProduct = cart.find(item => item.id === products[index].id)
    if(exisitingProduct){
        exisitingProduct.quantity += 1
    }else{
        cart.push({
            ...products[index], quantity: 1
        })
    }
    // console.log(index)
    // cart.push( products[index] )
    displayProducts()
    handleCheckBox(products[index])
    // console.log('success')
}

//check box notfication
function handleCheckBox (pro){
        const box = document.createElement('div')
            box.className = 'checkBox'
        const icon = document.createElement('i')
            icon.className = 'fa-solid fa-check-double'
        const p = document.createElement('p')
            p.innerHTML = `The product has been added successfully <br> <span> ( ${pro.name} ) </span>`

            // console.log(box)
            // console.log(icon)
            // console.log(p)
    box.appendChild(p)
    box.appendChild(icon)

    document.body.appendChild(box)
    
    shadowBox.classList.add('open')


    shadowBox.onclick = function(){
        shadowBox.classList.remove('open')
        box.classList.add('hide')
    }

    setTimeout(()=>{
        shadowBox.classList.remove('open')
        box.classList.add('hide')
    }, 2000)
}

function displayProducts(){
    let card =''
    let total = 0
    for(let i = 0; i < cart.length; i++){
        total += +cart[i].price * cart[i].quantity
        card += `
            <div class="card2">
                <img src="${cart[i].img}" alt="">
                <div>
                    <p>${cart[i].name}</p>
                    <p>${cart[i].price}</p>
                </div>
                <div>
                    <button onclick='inc(${i})'>+</button>
                    <span>${cart[i].quantity}</span>
                    <button onclick='dec(${i})'>-</button>
                </div>
                <i onclick='deleteProducts(${i})' class="fa-solid fa-trash"></i>
            </div>
            `
        }
        document.querySelector('.totalCart').innerHTML = '$' + total.toFixed(3)
        document.querySelector('.amount').innerHTML = cart.length
    //if el cart empty
    if(cart.length > 0){
        document.querySelector('.cart1 .container').innerHTML = card;
    }else{
        document.querySelector('.cart1 .container').innerHTML = 'Your Cart Is Empty';
    }
    
}
displayProducts()

function inc(index){
    cart[index].quantity += 1
    displayProducts()
}
function dec(index){
    if(cart[index].quantity > 1){
        cart[index].quantity -= 1
    }else{
        cart.splice(index , 1)
    }
    displayProducts()
}

//delete products
function deleteProducts(index){
    cart.splice( index , 1 )
    displayProducts()
}



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


