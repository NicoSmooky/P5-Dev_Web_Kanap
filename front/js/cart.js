
function getPanier() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}
function savePanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier));
}

panier = getPanier();
let canap = 0;
let deleteItem = [];
panier.forEach((element) => {
  let canap_id = element.id;
  let canap_colors = element.colors;
  let canap_quantity = element.quantity;
  let urlProductpanier = `http://localhost:3000/api/products/${canap_id}`;

  fetch(urlProductpanier)
    .then((data) => {
      return data.json();
    })
    .then((urlProductpanier) => {
      let HTML = document.getElementById("cart__items");
      canap++;
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
      itemQuantity.setAttribute("id", canap_id);
      itemQuantity.classList.add("itemQuantity");
      itemQuantity.name = itemQuantity;
      itemQuantity.type = "number";
      itemQuantity.defaultValue = canap_quantity;
      itemQuantity.min = 0;
      itemQuantity.max = 100;
      cart__item__content__settings__quantity.appendChild(itemQuantity);

      itemQuantity.addEventListener("change", function () {
        changeQuantity(canap_id);
      });
      itemQuantity = panier.quantity;
      console.log(canap_quantity);

      function changeQuantity(canap_id) {
        console.log(`canap_id ${canap_id}`);
        let canap_quantity = document.getElementById(canap_id).valueAsNumber;
        console.log(canap_quantity);
        let panier = getPanier();
        let foundProduct = panier.find((p) => p.id == canap_id);
        if (foundProduct != undefined) {
          foundProduct.quantity = canap_quantity;
          if (foundProduct.quantity <= 0) {
            removeFromPanier(foundProduct);
            savePanier(panier);
            location.reload();
          } else {
            savePanier(panier);
            location.reload();
          }
        }
        location.reload();
      }

      let cart__item__content__settings__delete = document.createElement("div");
      cart__item__content__settings__delete.classList.add(
        "cart__item__content__settings__delete"
      );
      cart__item__content__settings.appendChild(
        cart__item__content__settings__delete
      );
      console.log(canap, canap_id);
      deleteItem[canap] = document.createElement("p");
      deleteItem[canap].classList.add("deleteItem");
      let deleteText = document.createTextNode("Supprimer");
      deleteItem[canap].appendChild(deleteText);
      cart__item__content__settings__delete.appendChild(deleteItem[canap]);

      /*canap_colors*/
      deleteItem[canap].addEventListener("click", () => {
        removeFromPanier();
      });

      function removeFromPanier(canap_id) {
        console.log("removefromPanier", canap_colors, canap_id);

        let panier = getPanier();
        if ((panier = panier.filter((p) => p.id != canap_id)));
        savePanier(panier);
        location.reload();
        if ((panier = panier.filter((p) => p.colors != canap_colors)));
        savePanier(panier);
        location.reload();
      }
      /*canap_colors*/

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

/*VALIDATE FORM */
// firstName = document.getElementById("firstName") 
// firstName.addEventListener('change', Validate ()) 

// function textValidation(){
//   if (document.value== "") { 
//   }

//   if (!/^[a-zA-Z]*$/firstName.document(value));
//   { location.reload()
//     alert('Prénom incorrect')
//   }
// };

function Validate () {
  if (document.myForm.FirstName.value == "") {
      firstName = document.getElementById("firstName") 
      firstNameErrorMsg = document.getElementById("firstNameErrorMsg")
      var regex = new RegExp (!/^[a-zA-Z]*$/)
      firstNameErrorMsg.alert("Prénom incorrect") 
      document.myForm.Name.focus() ;
      return false;
  }

  if (document.myForm.lastName.value == "") {
      lastName = document.getElementById("lastName") 
      lastNameErrorMsg = document.getElementById("lastNameErrorMsg") 
      lastNameErrorMsg.alert("Nom incorrect") 
      document.myForm.Name.focus() ;
      return false;
  }
  if (document.myForm.Location.value == "") {
      address = document.getElementById("address") 
      addressErrorMsg = document.getElementById("addressErrorMsg") 
      addressErrorMsg.alert("Adresse incorrect") 
      document.myForm.Name.focus() ;
      return false;
  }
  if (document.myForm.City.value == "") {
      city = document.getElementById("city") 
      cityErrorMsg = document.getElementById("cityErrorMsg") 
      cityErrorMsg.alert("Ville incorrect") 
      document.myForm.Name.focus() ;
      return false;
  }
  if (document.myForm.Email.value == "") {
      email = document.getElementById("email") 
      emailErrorMsg = document.getElementById("emailErrorMsg") 
      emailErrorMsg.alert("Email incorrect") 
      document.myForm.Name.focus() ;
      return false;
  }
}

/*VALIDATE FORM */

/*TEST SEND-DATA */

// function sendData(data) {
//   var XHR = new XMLHttpRequest();
//   var urlEncodedData = "";
//   var urlEncodedDataPairs = [];
//   var name;


//   for(name in data) {
//     urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
//   }

//   urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

//   XHR.addEventListener('load', function(event) {
//     alert('Ouais ! Données envoyées et réponse chargée.');
//   });

//   XHR.addEventListener('error', function(event) {
//     alert('Oups! Quelque chose s\'est mal passé.');
//   });

//   XHR.open('POST', 'https://example.com/cors.php');

//   XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//   XHR.send(urlEncodedData);
// }


/*TEST SEND-DATA */