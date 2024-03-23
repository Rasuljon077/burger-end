const product = {
    crazy: {
        name: "crazy",
        price: 31000,
        amount: 0,
        img: "images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        name: "light",
        price: 26000,
        amount: 0,
        img: "images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: "cheeseburger",
        price: 29000,
        amount: 0,
        img: "images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },

    dburger: {
        name: "dburger",
        price: 24000,
        amount: 0,
        img: "images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop'),
    basketBox = document.querySelector('.basket__box');


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = btn.closest('.card'),
            parentId = parent.getAttribute('id')
        product[parentId].amount++
        basketInfo()
    })
})
const g = ""

function basketInfo() {
    const productArr = []
    for (const key in product) {
        const pk = product[key]
        const productCard = document.querySelector(`#${key}`),
            span = productCard.querySelector('.card__item');

        if (pk.amount) {
            span.classList.add('active')
            span.innerHTML = pk.amount
            productArr.push(pk)
        }else{
            span.classList.remove('active')
        }
    }
    
    const h = document.querySelector(".basket__total")
   
    h.innerHTML = ""
    basketBox.innerHTML = ''
    for (let i = 0; i < productArr.length; i++) {
    
        basketBox.innerHTML += basketCard(productArr[i])
         h.innerHTML += prieces(productArr[i])
        
        function prieces(p) {
            const { amount, price } = p 
            const o = price * amount
           for (let z = 0; z < o.length; z++) {
            
           }
            return `<h2 class="basket__desc basket__total">${o}</h2>`
        }
       
    }
}

function basketCard(card) {
    const { amount, price, img, name } = card
    const a = price * amount

    return `<div class="basket__card">
             <img class="basket__img" src="${img}" alt="">
                <div class="basket__info">
                    <h3 class="basket__title">${name}</h3>
                    <p class="basket__price">${a} сум</p>
                </div>
                <div class="basket__btns" id="${name.toLowerCase()}_card">
                    <span class="basket__sym">-</span>
                    <span class="basket__amount">${amount}</span>
                    <span class="basket__sym">+</span>
                </div>
            </div>`
}

window.addEventListener('click', (e) => {
    const btn = e.target
    if (btn.classList.contains('basket__sym')) {
        const parent = btn.closest('.basket__btns'),
            parentId = parent.getAttribute('id').split('_')[0]
        btn.innerHTML == '+' ? product[parentId].amount++ : product[parentId].amount--
        basketInfo()
        console.log(product);
    }
})

const basket = document.querySelector('.basket'),
    shopBtn = document.querySelector('.shop '),
    basketClose = document.querySelector('.basket__close');
shopBtn.addEventListener('click', () => {
    basket.classList.add('active')
})
basketClose.addEventListener('click', () => {
    basket.classList.remove('active')
})
