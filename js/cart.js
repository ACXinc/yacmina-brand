let container=document.getElementById("cartItems");
let totalBox=document.getElementById("total");

function renderCart(){

container.innerHTML="";
let total=0;

cart.forEach((c,index)=>{

total += c.price * c.qty;

let div=document.createElement("div");
div.className="card";

div.innerHTML=`
<h3>${c.title}</h3>
<p>Size: ${c.size}</p>
<p>${c.price} DT</p>

<button onclick="removeItem(${index})" class="btn">Remove</button>
`;

container.appendChild(div);

});

total += 7;

totalBox.innerHTML="Total: "+total+" DT ( +7 DT delivery )";
}

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
}

renderCart();