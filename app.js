const renderProducts = function () {
    for (let i = 0; i<products.length; i++) {

        catalogDiv.innerHTML += `

        <div class="product">
            <h2>${products[i].name}</h2>
            <img src="${products[i].image}"/>
            <p>${products[i].price}</p>
            <button onclick="buy(${i})"${products[i].availble ? '' : 'disabled'}>BUY</button>
        </div>`
    }
}

const buy = function (index) {
    cart.push(index)
    renderCart()
}

const renderCart = function () {
    cartDiv.innerHTML = `
    items: ${cart.length}`;
    // hw1: add condition so it renders "empty" if no products in the cart
    if (cart.length === 0) {
        cartDiv.innerHTML += `<br>empty`;
    }
    // hw2: add total cost of all selected items
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        totalCost += products[cart[i]].price;
    }
    cartDiv.innerHTML += `<br>Total Cost: $${totalCost}`;
}