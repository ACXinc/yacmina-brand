function addProduct(){

let p={
id:Date.now(),
title:document.getElementById("title").value,
price:Number(document.getElementById("price").value),
desc:document.getElementById("desc").value,
image:"assets/images/default.jpg",
stock:10,
sizes:["S","M","L"]
};

products.push(p);

localStorage.setItem("products",JSON.stringify(products));

alert("Product Added");
location.reload();
}