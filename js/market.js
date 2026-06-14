let container = document.getElementById("products");

function render(){

container.innerHTML = "";

products.forEach((p,i)=>{

let div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<h3>${p.title}</h3>
<p>${p.desc}</p>
<p><b>${p.price} DT</b> + 7 DT delivery</p>
<button class="btn" onclick="addToCart(${i})">Add to Cart</button>
`;

container.appendChild(div);
});

}

render();

function addToCart(i){
cart.push(products[i]);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}