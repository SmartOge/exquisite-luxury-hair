const product = [
  {
    id: 0,
    image: 'image/hair1.png',
    title: ' Brailian',
    price: 120,
  },

  {
    id: 1,
    image: 'image/hair1.png',
    title: ' Brailian',
    price: 128,
  },

  {
    id: 2,
    image: 'image/hair2.png',
    title: ' Brailian',
    price: 129,
  },

  {
    id: 3,
    image: 'image/hair3.png',
    title: ' Brailian',
    price: 120,
  },

  {
    id: 4,
    image: 'image/hair3.png',
    title: ' Brailian',
    price: 120,
  },

  {
    id: 5,
    image: 'image/hair3.png',
    title: ' Brailian',
    price: 120,
  },

  {
    id: 3,
    image: 'image/hair3.png',
    title: ' Brailian',
    price: 120,
  },

  {
    id: 3,
    image: 'image/hair3.png',
    title: ' Brailian',
    price: 120,
  },

];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
  let { image, title, price } = item;
  return (
    `<div class= 'box'>
      <div class = 'img-box'>
        <img class= 'images' src=${image}></img>
      </div>
      <div class= 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>
        <button onclick='addtocart(${i++})'> Add to cart </button>
      </div>
    </div>`
  );
}).join('');





let cart = [];

function addtocart(a) {
  const selectedProduct = { ...categories[a], quantity: 1 };
  cart.push(selectedProduct);
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let total = 0;
  document.getElementById('count').innerHTML = cart.length;

  if (cart.length === 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById('total').innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((items, index) => {
      let { image, title, price, quantity } = items;
      total = total + price * quantity;
      document.getElementById('total').innerHTML = "$ " + total + ".00";
      return (
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'>$ ${price}.00</h2>
          <input
            type="number"
            name="cartQuantity_${index}"
            id="cartQuantity_${index}"
            value="${quantity}"
            class="cart-quantity"
            oninput='updateQuantity(${index}, this.value)' min='1'>
          <i class='fa-solid fa-trash' onclick='delElement(${index})'> </i>
        </div>`
      );
    }).join('');
  }
}

function updateQuantity(index, newQuantity) {
  cart[index].quantity = parseInt(newQuantity, 10);
  displaycart();
}

function makePayment() {
  FlutterwaveCheckout({
    public_key: 'FLWPUBK_TEST-d403400d1778aaa2bcb6e205f158fb04-X',
    tx_ref: 'your_transaction_reference',
    amount: 1000, // Amount in NGN
    currency: 'NGN', // Use NGN for Nigerian Naira
    payment_options: 'card,mobile_money,ussd',
    redirect_url: 'https://yourwebsite.com/payment/success',
    meta: {
      consumer_id: 23,
      consumer_mac: '92a3-912ba-1192a',
    },
    customer: {
      email: 'user@example.com',
      phone_number: '08102909304',
      name: 'John Doe',
    },
    callback: function (data) {
      console.log(data);
    },
    onclose: function () {
      console.log('Payment closed');
    },
    customizations: {
      title: 'Your App Name',
      description: 'Payment for your products',
      logo: 'https://yourwebsite.com/logo.png',
    },
  });
}


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/payment/success', (req, res) => {
  const { tx_ref, status, amount } = req.body;

  // Perform additional processing or update order status in your database
  if (status === 'successful') {
    console.log(`Payment successful: ${amount} for transaction ${tx_ref}`);
    // Update order status or perform other actions
  } else {
    console.log(`Payment failed: ${amount} for transaction ${tx_ref}`);
  }

  res.json({ status: 'success' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});