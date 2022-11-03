function getPanier() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}

panier = getPanier();

panier.forEach((element) => {
  canap_id = element.id;
  let canap_colors = element.colors;
  let canap_quantity = element.quantity;
  let urlProductpanier = `http://localhost:3000/api/products/${canap_id}`;

  fetch(urlProductpanier)
    .then((data) => {
      return data.json();
    })
    .then((urlProductpanier) => {
      let HTML = document.getElementById("cart__items");

      // ****HTML****//
      let cart__item = document.createElement("article");

      cart__item.setAttribute("data-id", panier.id);
      cart__item.setAttribute("data-color", panier.id);
      cart__item.classList.add("cart__item");

      HTML.appendChild(cart__item);

      let cart__item__img = document.createElement("div");
      cart__item__img.classList.add("cart__item__img");
      cart__item.appendChild(cart__item__img);

      let cart_img = document.createElement("img");
      cart_img.classList.add("cart_img");

      cart__item__img.appendChild(cart_img);
      cart_img.src = urlProductpanier.imageUrl;

      let cart__item__content = document.createElement("div");
      cart__item__content.classList.add("cart__item__content");
      cart__item.appendChild(cart__item__content);

      let cart__item__content__description = document.createElement("div");
      cart__item__content__description.classList.add(
        "cart__item__content__description"
      );
      cart__item__content.appendChild(cart__item__content__description);

      let nom_produit = document.createElement("h2");
      nom_produit.classList.add("nom_produit");
      nom_produit.textContent = urlProductpanier.name;
      cart__item__content__description.appendChild(nom_produit);

      let colors = document.createElement("p");
      colors.textContent = canap_colors;
      cart__item__content__description.appendChild(colors);

      let prix = document.createElement("p");
      prix.textContent = urlProductpanier.price + "\u20AC";
      cart__item__content__description.appendChild(prix);

      let cart__item__content__settings = document.createElement("div");
      cart__item__content__settings.classList.add(
        "cart__item__content__settings"
      );
      cart__item__content.appendChild(cart__item__content__settings);

      let cart__item__content__settings__quantity =
        document.createElement("div");
      cart__item__content__settings__quantity.classList.add(
        "cart__item__content__settings__quantity"
      );
      cart__item__content__settings.appendChild(
        cart__item__content__settings__quantity
      );

      let quantité = document.createElement("p");
      quantité.classList.add("quantité");
      quantité = document.createTextNode("Qté : ");
      cart__item__content__settings__quantity.appendChild(quantité);

      let itemQuantity = document.createElement("input");
      itemQuantity.classList.add("itemQuantity");
      itemQuantity.name = itemQuantity;
      itemQuantity.type = "number";
      itemQuantity.defaultValue = canap_quantity;
      itemQuantity.min = 0;
      itemQuantity.max = 100;
      cart__item__content__settings__quantity.appendChild(itemQuantity);
      (itemQuantity = panier.quantity), changeQuantity;

      /**TEST**/
      function changeQuantity(canap_id, canap_quantity) {
        let panier = getPanier();
        let foundProduct = panier.find((p) => p.id == canap_id);
        if (foundProduct != undefined) {
          foundProduct.quantity += canap_quantity;
          if (foundProduct.quantity <= 0) {
            removeFromPanier(foundProduct);
          } else {
            savePanier(panier);
          }
        }
      }

      let cart__item__content__settings__delete = document.createElement("div");
      cart__item__content__settings__delete.classList.add(
        "cart__item__content__settings__delete"
      );
      cart__item__content__settings.appendChild(
        cart__item__content__settings__delete
      );

      let deleteItem = document.createElement("p");
      deleteItem.classList.add("deleteItem");
      let deleteText = document.createTextNode("Supprimer");
      deleteItem.appendChild(deleteText);
      cart__item__content__settings__delete.appendChild(deleteItem);

      /**TEST**/

      // deleteItem.addEventListener("click", removeFromPanier);

      // function removeFromPanier(canap_id) {
      //   let panier = getPanier();
      //   panier = panier.filter((p) => p.id != canap_id);
      //   savePanier(panier);
      // }

      let quantiteTotal = document.getElementById("totalQuantity");
      quantiteTotal.innerHTML = getNumberProduct();
      function getNumberProduct() {
        let panier = getPanier();
        let number = 0;
        for (let product of panier) {
          number += parseInt(product.quantity);
        }
        return number;
      }

      let totalPrix = document.getElementById("totalPrice");
      totalPrix.innerHTML = getTotalPrice();
      function getTotalPrice() {
        let panier = getPanier();
        let total = 0;
        for (let product of panier) {
          total +=
            parseInt(product.quantity) * parseFloat(urlProductpanier.price);
        }
        return total;
      }
    });
});
