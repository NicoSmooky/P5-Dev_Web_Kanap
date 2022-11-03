const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

let urlBase = "http://localhost:3000/api/products/";
let urlProduct = `http://localhost:3000/api/products/${id}`;

console.log(urlProduct);

fetch(urlProduct)
  .then((data) => {
    return data.json();
  })
  .then((urlProduct) => {
    console.log(urlProduct);

    let image = document.querySelector(".item__img img");
    image.alt = urlProduct.altTxt;
    image.src = urlProduct.imageUrl;

    let nom = document.getElementById("title");
    console.log(nom);
    nom.textContent = urlProduct.name;

    let prix = document.getElementById("price");
    console.log(price);

    var prixproduit = urlProduct.price;
    prix.textContent = new Intl.NumberFormat("de-DE", {
      style: "decimal",
      currency: "EUR",
      currencyDisplay: "code",
    }).format(prixproduit);

    let description = document.getElementById("description");
    console.log(description, image);

    description.textContent = urlProduct.description;

    let couleur = document.getElementById("colors");
    console.log(colors);

    console.log(urlProduct.colors);
    urlProduct.colors.forEach((color) => {
      console.log(color);

      let colorElt = document.createElement("option");
      colorElt.value = color;
      colorElt.textContent = color;
      colors.appendChild(colorElt);
    });

    let btnpanier = document.getElementById("addToCart");
    console.log(btnpanier);

    function savePanier(panier) {
      localStorage.setItem("panier", JSON.stringify(panier));
    }

    function getPanier() {
      let panier = localStorage.getItem("panier");
      if (panier == null) {
        return [];
      } else {
        return JSON.parse(panier);
      }
    }

    function addPanier() {
      var color_select = document.getElementById("colors").value;
      console.log(color_select);

      var quantity_select = document.getElementById("quantity").value;
      console.log(quantity_select);

      product = {
        id: urlProduct._id,
        colors: color_select,
        quantity: quantity_select,
      };

      let panier = getPanier();
      let foundProduct = panier.find((p) => p.id == urlProduct._id);
      if (foundProduct != undefined) {
        if (foundProduct.colors == urlProduct.colors) {
          foundProduct.quantity++;
        } else {
          panier.push(product);
        }
      } else {
        panier.push(product);
      }

      savePanier(panier);
    }

    btnpanier.addEventListener("click", addPanier);
  });
