let infos = [
    {
        bgimg: './media/sweets-1.jpeg',
        cartimg: './media/cart.svg',
        price: '$5',
        name: 'Sweet Item',
    },
    {
        bgimg: './media/cupcake-1.jpeg',
        cartimg: './media/cart.svg',
        price: '$5',
        name: 'Cupcake Item',
    },
    {
        bgimg: './media/cake-1.jpeg',
        cartimg: './media/cart.svg',
        price: '$5',
        name: 'Cake Item',
    },
    {
        bgimg: './media/doughnut-1.jpeg',
        cartimg: './media/cart.svg',
        price: '$5',
        name: 'Doughnut Item',
    },
    {
        bgimg: './media/sweets-2.jpeg',
        cartimg: './media/cart.svg',
        price: '$10',
        name: 'Sweet Item',
    },
    {
        bgimg: './media/cupcake-22.jpeg',
        cartimg: './media/cart.svg',
        price: '$10',
        name: 'Cupcake Item',
    },
    {
        bgimg: './media/cake-2.jpeg',
        cartimg: './media/cart.svg',
        price: '$10',
        name: 'Cake Item',
    },
    {
        bgimg: './media/doughnut-2.jpeg',
        cartimg: './media/cart.svg',
        price: '$10',
        name: 'Doughnut Item',
    },
    {
        bgimg: './media/sweets-3.jpeg',
        cartimg: './media/cart.svg',
        price: '$15',
        name: 'Sweet Item',
    },
    {
        bgimg: './media/cupcake-3.jpeg',
        cartimg: './media/cart.svg',
        price: '$15',
        name: 'Cupcake Item',
    },
    {
        bgimg: './media/cake-3.jpeg',
        cartimg: './media/cart.svg',
        price: '$15',
        name: 'Cake Item',
    },
    {
        bgimg: './media/doughnut-3.jpeg',
        cartimg: './media/cart.svg',
        price: '$15',
        name: 'Doughnut Item',
    },
]

const pictures = document.querySelector('.pictures')

for (const c of infos) {
    pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
}