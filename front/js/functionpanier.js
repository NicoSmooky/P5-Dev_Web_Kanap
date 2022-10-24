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

function addPanier(product) {
  let panier = getPanier();
  let foundProduct = panier.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    panier.push(product);
  }

  savePanier(panier);
}

function removeFromPanier(product) {
  let panier = getPanier();
  panier = panier.filter((p) => p.id != product.id);
  savePanier(panier);
}

function changeQuantity(product, quantity) {
  let panier = getPanier();
  let foundProduct = panier.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeFromPanier(foundProduct);
    } else {
      savePanier(panier);
    }
  }
}

function getNumberProduct() {
  let panier = getPanier();
  let number = 0;
  for (let product of panier) {
    number += product.quantity;
  }
  return number;
}

function getTotalPrice() {
  let panier = getPanier();
  let total = 0;
  for (let product of panier) {
    total += product.quantity * product.price;
  }
  return total;
}

// export {savePanier, getPanier, addPanier,removeFromPanier, changeQuantity, getNumberProduct, getTotalPrice};