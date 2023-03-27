const product = [
    {
        id: 0, 
        image: 'images/laptop1.jpeg', 
        title: 'laptop', 
        price: 320
    },
    {
        id: 1, 
        image: 'images/laptop2.jpeg', 
        title: 'laptop', 
        price: 220
    },
    {
        id: 2, 
        image: 'images/laptop3.jpeg', 
        title: 'laptop', 
        price: 100
    },
    {
        id: 3, 
        image: 'images/laptop4.jpeg', 
        title: 'laptop', 
        price: 140
    }
]

const categories = [...new Set(product.map((item)=> 
    {return item}))]

let i = 0
document.getElementById('root').innerHTML = categories.map((item)=> {
    var {image, title, price} = item

    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image} />
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
                "<button onclick='addToCart("+(i++)+")'> Add to cart</button>" +
            `</div>
        </div>`
    )
}).join('')


var cart = []

function addToCart(a) {
    cart.push({...categories[a]})
    displayCart()
}

function delElement(a) {
    cart.splice(a, 1)
    displayCart()
}

function displayCart(a) {
    let j = 0, total = 0
    document.getElementById('count').innerHTML = cart.length
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty"
        document.getElementById('total').innerHTML = "$ " + 0 + ".00"
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items)=>{
            var {image, title, price} = items
            total += price
            document.getElementById("total").innerHTML = "$ " + total + ".00"

            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image} />
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` + 
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i>" +
                `</div>`
            )
        }).join('')
    }
}