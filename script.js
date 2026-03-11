let cart = [];

function addToCart(name, price){

cart.push({name, price});

updateCartCount();

alert(name + " added to cart");
}

function updateCartCount(){
document.getElementById("cart-count").innerText = cart.length;
}

/* PRODUCT SEARCH */

document.getElementById("searchInput").addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(function(product){

let name = product.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});
