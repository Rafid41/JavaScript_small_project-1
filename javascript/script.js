
let product_form = document.querySelector(".prod_form");
let cart_form = document.querySelector(".cart_form");

product_form.addEventListener('click', addToCart);
cart_form.addEventListener('click', remove_product);


function addToCart(e) {
   
   //var x= e.firstChild.innerHTML;
   
   
   if (e.target.hasAttribute("href")) {
      //console.log(e.target.previousElementSibling.textContent);
      let childrens = e.target.parentElement.children;
      let name = childrens[0].textContent;
      let price = childrens[1].textContent;
      let div = document.createElement('div');
      div.className = "product cart";
      div.innerHTML = `
         <h5>${name}</h5>
         <p>${price}</p>
         <a href="#">Remove</a>
      `;

      cart_form.appendChild(div);
      //console.log(name,price,div);
   }
   e.preventDefault();
   
}


function remove_product(e) {
   if (e.target.hasAttribute("href")) {
      e.target.parentElement.remove();
   }
}

