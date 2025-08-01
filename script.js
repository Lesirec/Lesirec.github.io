let cart = {};

function getProductName(productCard) {
    return productCard.querySelector('.product-title').innerText.trim();
}

function addToCart(button, price) {
    let productCard = button.closest('.product-card');
    let overlay = productCard.querySelector('.overlay');
    let quantitySpan = overlay.querySelector('.quantity');
    let productName = getProductName(productCard);

    if (!productCard.classList.contains('added')) {
        // Добавляем первый раз
        productCard.classList.add('added');
        overlay.style.display = 'flex';
        cart[productName] = { quantity: 1, price: price };

        quantitySpan.textContent = cart[productName].quantity;
        
        button.classList.add('added');
        button.innerHTML = renderQuantityControls(cart[productName]);

        let minusButton = button.querySelector('.minus');
        let plusButton = button.querySelector('.plus');

        minusButton.addEventListener('click', function (e) {
            e.stopPropagation();
            decreaseQuantity(this, price);
        });

        plusButton.addEventListener('click', function (e) {
            e.stopPropagation();
            increaseQuantity(this, price);
        });

        updateCartIcon();
        showCartButton();
    } else {
        // Если уже есть, просто увеличиваем
        increaseQuantity(button.querySelector('.plus'), price);
    }
}

function renderQuantityControls(item) {
    let sum = item.quantity * item.price;
    return `
        <div class="quantity-controls">
            <button class="minus">-</button>
            <span class="quantity">${sum} Р</span>
            <button class="plus">+</button>
        </div>
    `;
}




function updateCartIcon() {
    const cartBtn = document.querySelector('.cart-btn');
    let total = 0;
    for (let item in cart) {
        total += cart[item].quantity * cart[item].price;
    }
    cartBtn.dataset.price = total;
    if (total > 0) {
        cartBtn.classList.remove('hidden');
    } else {
        cartBtn.classList.add('hidden');
    }
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('cart-total-price');
    cartItems.innerHTML = "";

    let total = 0;

    for (let name in cart) {
        let item = cart[name];
        total += item.quantity * item.price;
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <strong>${name}</strong> - ${item.quantity} x ${item.price}₽
        `;
        cartItems.appendChild(div);
    }

    totalPrice.textContent = `${total} Р`;

    modal.classList.add('active');
}

function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.remove('active');
} 

function increaseQuantity(button, price) {
    let productCard = button.closest('.product-card');
    let overlay = productCard.querySelector('.overlay');
    let productName = getProductName(productCard);

    cart[productName].quantity++;

    // Обновляем сумму
    button.parentElement.querySelector('.quantity').textContent =
        cart[productName].quantity * cart[productName].price + ' ₽';
    
    overlay.querySelector('.quantity').textContent = cart[productName].quantity;

    updateCartIcon();
}

function decreaseQuantity(button, price) {
    let productCard = button.closest('.product-card');
    let overlay = productCard.querySelector('.overlay');
    let productName = getProductName(productCard);

    if (cart[productName].quantity > 1) {
        cart[productName].quantity--;
        button.parentElement.querySelector('.quantity').textContent =
            cart[productName].quantity * cart[productName].price + ' ₽';
        overlay.querySelector('.quantity').textContent = cart[productName].quantity;
    } else {
        // Удаляем товар
        delete cart[productName];
        productCard.classList.remove('added');
        overlay.style.display = 'none';

        let addButton = productCard.querySelector('.add-to-cart');
        addButton.classList.remove('added');
        addButton.innerHTML = `${price} Р +`;
    }

    updateCartIcon();

    if (Object.keys(cart).length === 0) {
        hideCartButton();
    }
}

function showCartButton() {
    document.querySelector('.cart-btn').classList.remove('hidden');
}

function hideCartButton() {
    document.querySelector('.cart-btn').classList.add('hidden');
}

function openCart() {
    alert('Корзина:\n' + JSON.stringify(cart, null, 2));
}
