let container = document.getElementById("products");

function render(){

container.innerHTML="";

products.forEach((p,i)=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${p.image}" style="width:100%;height:250px;object-fit:cover;">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<p><b>${p.price} DT</b></p>

<select id="size-${i}">
${p.sizes.map(s=>`<option>${s}</option>`).join("")}
</select>

<button class="btn" onclick="addToCart(${i})">Add to Cart</button>
`;

container.appendChild(card);

});

}

render();

function addToCart(i){

let size=document.getElementById("size-"+i).value;

cart.push({
...products[i],
size:size,
qty:1
});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");
}