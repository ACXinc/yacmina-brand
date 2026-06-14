function placeOrder(){

if(cart.length===0){
alert("Cart is empty");
return;
}

let order={
id:Date.now(),
customer:{
name:document.getElementById("name").value,
lastname:document.getElementById("lastname").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value
},
items:cart,
total:calculateTotal(),
date:new Date().toLocaleString()
};

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));
localStorage.removeItem("cart");

alert("Order Confirmed!");
window.location.href="index.html";
}

function calculateTotal(){
let total=0;
cart.forEach(c=>{
total+=c.price*c.qty;
});
return total+7;
}