let container=document.getElementById("orders");

orders.forEach(o=>{

let div=document.createElement("div");
div.className="card";

div.innerHTML=`
<h3>${o.customer.name} ${o.customer.lastname}</h3>
<p>${o.customer.phone}</p>
<p>${o.customer.address}</p>
<p>Total: ${o.total} DT</p>

<hr>

${o.items.map(i=>`
<p>${i.title} - ${i.size} - ${i.price} DT</p>
`).join("")}
`;

container.appendChild(div);

});