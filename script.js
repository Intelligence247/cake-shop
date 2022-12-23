let cakes = [
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
const input = document.querySelector('input')
const pictures = document.querySelector('.pictures')
const cakeEl = document.querySelector('#cakes')
const cupcakes = document.querySelector('#cupcakes')
const sweets = document.querySelector('#sweets')
const doughnuts = document.querySelector('#doughnuts')
const all = document.querySelector('#all')

for (const c of cakes) {
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



cakeEl.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Cake Item')
    for (const c of filter) {
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
})

cupcakes.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Cupcake Item')
    for (const c of filter) {
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
})

sweets.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Sweet Item')
    for (const c of filter) {
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
})


doughnuts.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Doughnut Item')
    for (const c of filter) {
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
})



all.addEventListener('click', () => {
    pictures.innerHTML = ''
    for (const c of cakes) {
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
})

input.addEventListener('input', () => {
    pictures.innerHTML = ''

    const filter = cakes.filter((n) => n.name.toUpperCase().includes(input.value.toUpperCase()))

    for (const c of filter) {
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
})