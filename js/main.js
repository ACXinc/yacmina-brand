let products = JSON.parse(localStorage.getItem("products")) || [
{
id:1,
title:"YACMINA HOODIE",
price:120,
desc:"Minimal black hoodie",
image:"assets/images/hoodie.jpg",
stock:10,
sizes:["S","M","L"]
},
{
id:2,
title:"WHITE TEE",
price:60,
desc:"Clean oversized tee",
image:"assets/images/tshirt.jpg",
stock:15,
sizes:["M","L"]
}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];