let items = [
      {id:1, name:"Cloth", price:100, color:"Red", image:"one.jpg"},
      {id:2, name:"Pant", price:200, color:"Blue", image:"two.jpg"},
      {id:3, name:"Shirt", price:500, color:"Green", image:"three.jpg"},
      {id:4, name:"Pant", price:700, color:"Red", image:"three_one.jpg"},
      {id:5, name:"Pant", price:700, color:"Red", image:"one_one.jpg"},
      {id:6, name:"Pant", price:700, color:"Red", image:"three_two.avif"},
      {id:7, name:"Pant", price:700, color:"Red", image:"two_two.jpg"},
      {id:8, name:"Pant", price:700, color:"Red", image:"one_two.png"},
      {id:9, name:"Pant", price:700, color:"Red", image:"two_one.jpg"}
    ];

    function printProduct() {
      let html = `<div class="products">`;
      items.forEach(item => {
        html += `
          <div class="card">
            <div class="card_image">
              <img src="image/${item.image}" width="200px" alt="">
            </div>
            <div class="card_info">
              ${item.name} <br>
              Price: ${item.price} <br>
              Color: ${item.color}
            </div>
            <div class="card_footer">
              <button onclick="orderNow(${item.id})">Order Now</button>
              <button onclick="addToCart(${item.id})">Add To Cart</button>
            </div>
          </div>
        `;
      });
      html += `</div>`;
      document.getElementById("shop").innerHTML = html;
    }

    function addToCart(id) {
      let item = items.find(i => i.id === id);
      if (!item) return;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let existing = cart.find(i => i.id === id);

      if (existing) {
        existing.qty = existing.qty ? existing.qty + 1 : 2;
      } else {
        cart.push({...item, qty: 1});
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(item.name + " added to cart");
    }

    function updateCartCount() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //   const cartCountElem = document.getElementById("cart-count");
    //   if (cartCountElem) cartCountElem.innerText = cart.length;
      let totalQty = 0;
      cart.forEach(item => {
        totalQty += item.qty
      });
      document.getElementById("cart-count").innerText = totalQty;
    }

    function orderNow(id) {
      let item = items.find(i => i.id === id);
      if (!item) return;
      localStorage.setItem("orderNow", JSON.stringify([item]));
      window.location.href = "bill.html";
    }

    document.addEventListener("DOMContentLoaded", function(){
      printProduct();
      updateCartCount();
})
