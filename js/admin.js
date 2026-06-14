function addProduct(){

let p = {
title:document.getElementById("title").value,
price:document.getElementById("price").value,
stock:document.getElementById("stock").value,
desc:document.getElementById("desc").value,
sizes:document.getElementById("sizes").value
};

products.push(p);
localStorage.setItem("products", JSON.stringify(products));

alert("Product Added");
location.reload();
}