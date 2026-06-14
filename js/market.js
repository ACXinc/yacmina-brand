let container = document.getElementById("products");

products.forEach((p,i)=>{
let div = document.createElement("div");
div.className = "product";

div.innerHTML = `
<h3>${p.title}</h3>
<p>${p.desc}</p>
<p>${p.price} DT + 7 DT delivery</p>
<button onclick="addToCart(${i})">Add</button>
`;

container.appendChild(div);
});

function addToCart(i){
cart.push(products[i]);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}