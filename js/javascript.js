const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if(bar) {
    bar.addEventListener('click', () => {
       nav.classList.add('active');
    })
    
}

if(close) {
    close.addEventListener('click', () => {
       nav.classList.remove('active');
    })
    
}

function addToCart() {
    // You can customize this function based on your needs
    // For simplicity, let's just log a message for now
    console.log("Item added to cart!");
}

// Add event listener to the "Add To Cart" button
// document.querySelector('.normal').addEventListener('click', addToCart);


// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");

// smallimg[0].onclick = function(){
//     MainImg.src = smallimg[0].src;
// }

// smallimg[1].onclick = function(){
//     MainImg.src = smallimg[1].src;
// }

// smallimg[2].onclick = function(){
//     MainImg.src = smallimg[2].src;
// }

// smallimg[3].onclick = function(){
//     MainImg.src = smallimg[3].src;
// }