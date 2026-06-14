let container = document.getElementById("cartItems");

cart.forEach((c)=>{
let div = document.createElement("div");
div.innerHTML = `
<h3>${c.title}</h3>
<p>${c.price} DT</p>
`;
container.appendChild(div);
});