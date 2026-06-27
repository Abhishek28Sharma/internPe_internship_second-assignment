// Mobile Navbar Toggle Interactivity
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) bar.addEventListener('click', () => nav.classList.add('active'))
if (close) close.addEventListener('click', () => nav.classList.remove('active'))

// Centralized Mock Product Data Array (10 Items)
const products = [
  {
    id: 1,
    name: 'Minimalist Leather Watch',
    brand: 'Chrono',
    price: 120,
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400',
  },
  {
    id: 2,
    name: 'Wireless Noise-Cancelling Headphones',
    brand: 'AudioX',
    price: 199,
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400',
  },
  {
    id: 3,
    name: 'Ergonomic Mechanical Keyboard',
    brand: 'KeyClick',
    price: 85,
    img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400',
  },
  {
    id: 4,
    name: 'Premium Leather Backpack',
    brand: 'PackCo',
    price: 145,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400',
  },
  {
    id: 5,
    name: 'Hydro Sports Water Bottle',
    brand: 'Aqua',
    price: 25,
    img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400',
  },
  {
    id: 6,
    name: 'Smart Fitness Running Shoes',
    brand: 'Stride',
    price: 110,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400',
  },
  {
    id: 7,
    name: '4K UltraHD Action Camera',
    brand: 'LensPro',
    price: 250,
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=400',
  },
  {
    id: 8,
    name: 'Minimalist Wallet (RFID)',
    brand: 'Slim',
    price: 40,
    img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400',
  },
  {
    id: 9,
    name: 'Portable Bluetooth Speaker',
    brand: 'Boom',
    price: 65,
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=400',
  },
  {
    id: 10,
    name: 'Organic Cotton Summer Hoodie',
    brand: 'Thread',
    price: 55,
    img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400',
  },
  {
    id: 11,
    name: 'Ultra-Wide Curved Monitor',
    brand: 'ViewMax',
    price: 349,
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400',
  },
  {
    id: 12,
    name: 'Wireless Ergonomic Mouse',
    brand: 'KeyClick',
    price: 45,
    img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400',
  },
  {
    id: 13,
    name: 'Smart Ambient Desk Lamp',
    brand: 'Lumina',
    price: 38,
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400',
  },
  {
    id: 14,
    name: 'Sleek Aluminum Laptop Stand',
    brand: 'Elevate',
    price: 29,
    img: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=400',
  },
  {
    id: 15,
    name: 'Dual Wireless Charging Pad',
    brand: 'Volt',
    price: 49,
    img: 'https://plus.unsplash.com/premium_photo-1776277143720-9b24ec9f4388?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    name: 'Professional Studio Microphone',
    brand: 'AudioX',
    price: 129,
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400',
  },
  {
    id: 17,
    name: 'Vintage Polaroid Camera',
    brand: 'LensPro',
    price: 95,
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=400',
  },
  {
    id: 18,
    name: 'Leather Passport Holder',
    brand: 'PackCo',
    price: 22,
    img: 'https://images.unsplash.com/photo-1620109176813-e91290f6c795?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 19,
    name: 'Stainless Steel Espresso Machine',
    brand: 'Brew',
    price: 280,
    img: 'https://images.unsplash.com/photo-1623443175467-1ed6a9861b9a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 20,
    name: 'Minimalist Ceramic Coffee Mug',
    brand: 'Brew',
    price: 18,
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400',
  },
]

let cart = JSON.parse(localStorage.getItem('ecommerce_cart')) || []

function renderProductGrid(containerId) {
  const container = document.getElementById(containerId)
  if (!container) return

  container.innerHTML = ''
  products.forEach((product) => {
    container.innerHTML += `
            <div class="pro" onclick="window.location.href='sproduct.html?id=${product.id}'">
                <div class="img-container">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <h4>$${product.price}</h4>
                </div>
                <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${product.id});">🛒</button>
            </div>
        `
  })
}

function addToCart(id) {
  const product = products.find((p) => p.id === id)
  const existingItem = cart.find((item) => item.id === id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem('ecommerce_cart', JSON.stringify(cart))
  alert(`${product.name} added to cart!`)
  if (document.getElementById('cart-table-body')) renderCartView()
}

function renderCartView() {
  const tbody = document.getElementById('cart-table-body')
  const totalElement = document.getElementById('cart-total')
  if (!tbody) return

  tbody.innerHTML = ''
  let grandTotal = 0

  if (cart.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="padding: 20px;">Your cart is currently empty.</td></tr>`
    if (totalElement) totalElement.innerText = '$0.00'
    return
  }

  cart.forEach((item, index) => {
    let itemSubtotal = item.price * item.quantity
    grandTotal += itemSubtotal

    tbody.innerHTML += `
            <tr>
                <td><button class="remove-btn" onclick="removeFromCart(${index})">❌</button></td>
                <td><img src="${item.img}" alt=""></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td><input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></td>
                <td>$${itemSubtotal}</td>
            </tr>
        `
  })

  if (totalElement) totalElement.innerText = `$${grandTotal}`
}

function updateQuantity(index, val) {
  if (val < 1) val = 1
  cart[index].quantity = parseInt(val)
  localStorage.setItem('ecommerce_cart', JSON.stringify(cart))
  renderCartView()
}

function removeFromCart(index) {
  cart.splice(index, 1)
  localStorage.setItem('ecommerce_cart', JSON.stringify(cart))
  renderCartView()
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty! Add products before checking out.')
    return
  }
  alert('Thank you for your purchase! Order processed successfully.')
  cart = []
  localStorage.removeItem('ecommerce_cart')
  renderCartView()
}

function loadProductDetails() {
  const detailsContainer = document.getElementById('prodetails')
  if (!detailsContainer) return

  const urlParams = new URLSearchParams(window.location.search)
  const productId = parseInt(urlParams.get('id'))

  const product = products.find((p) => p.id === productId) || products[0]

  detailsContainer.innerHTML = `
        <div class="single-pro-image">
            <img src="${product.img}" width="100%" id="MainImg" alt="${product.name}">
        </div>
        <div class="single-pro-details">
            <h6>Home / ${product.brand}</h6>
            <h2>${product.name}</h2>
            <h2>$${product.price}.00</h2>
            <select id="product-size">
                <option>Select Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
            </select>
            <input type="number" value="1" min="1" id="product-quantity">
            <button class="btn" onclick="addDetailedItemToCart(${product.id})">Add To Cart</button>
            <h4>Product Details</h4>
            <span>This premium product from ${product.brand} features high-quality materials engineered for absolute durability and modern day-to-day comfort.</span>
        </div>
    `
}

function addDetailedItemToCart(id) {
  const qtyInput = document.getElementById('product-quantity')
  const quantity = qtyInput ? parseInt(qtyInput.value) : 1

  const product = products.find((p) => p.id === id)
  const existingItem = cart.find((item) => item.id === id)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({ ...product, quantity: quantity })
  }

  localStorage.setItem('ecommerce_cart', JSON.stringify(cart))
  alert(`${quantity}x ${product.name} added to your cart!`)
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid('featured-products-container')
  renderCartView()

  loadProductDetails()
})

function loadProductDetails() {
  const detailsContainer = document.getElementById('prodetails')
  if (!detailsContainer) return

  const urlParams = new URLSearchParams(window.location.search)
  const productId = parseInt(urlParams.get('id'))
  const product = products.find((p) => p.id === productId) || products[0]

  detailsContainer.innerHTML = `
        <div class="single-pro-image">
            <img src="${product.img}" width="100%" id="MainImg" alt="${product.name}">
        </div>
        <div class="single-pro-details">
            <h6>Home / ${product.brand}</h6>
            <h2>${product.name}</h2>
            <h2 class="product-price">$${product.price}.00</h2>
            
            <select id="product-size">
                <option>Select Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
            </select>
            
            <div class="purchase-actions">
                <input type="number" value="1" min="1" id="product-quantity">
                <button class="btn" onclick="addDetailedItemToCart(${product.id})">Add To Cart</button>
            </div>
            
            <h4>Product Details</h4>
            <span>This premium item from ${product.brand} features high-quality materials engineered for absolute durability and modern day-to-day comfort. It adapts gracefully across styles to deliver utility, balance, and aesthetic presentation.</span>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid('featured-products-container')
  renderCartView()
})
