let container=document.getElementById("products");

function render(){
container.innerHTML="";

products.forEach((p,i)=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${p.title}</h3>
<p>${p.desc}</p>
<p>${p.price} DT + 7 DT delivery</p>
<button class="btn" onclick="addToCart(${i})">Add</button>
`;

container.appendChild(card);
});

}

render();

function addToCart(i){
cart.push(products[i]);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added");
}