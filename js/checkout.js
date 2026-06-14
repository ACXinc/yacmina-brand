function placeOrder(){

let order = {
name:document.getElementById("name").value,
lastname:document.getElementById("lastname").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
location:document.getElementById("location").value,
address:document.getElementById("address").value,
items:cart,
delivery:7
};

orders.push(order);
localStorage.setItem("orders", JSON.stringify(orders));
localStorage.removeItem("cart");

alert("Order Confirmed!");
}