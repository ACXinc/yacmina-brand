let container = document.getElementById("orders");

orders.forEach(o=>{
let div = document.createElement("div");
div.innerHTML = `
<h3>${o.name} ${o.lastname}</h3>
<p>${o.phone}</p>
<p>${o.address}</p>
<p>Items: ${o.items.length}</p>
`;
container.appendChild(div);
});