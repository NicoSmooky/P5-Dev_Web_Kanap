
// console.log(window)
// console.log(window.location)

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)


let urlBase = "http://localhost:3000/api/products/"
let urlProduct = `http://localhost:3000/api/products/${id}`
// let urlProduct = urlBase + id
console.log(urlProduct)


fetch(urlProduct)
.then(data=> {
    return data.json()
}).then(urlProduct=>{
    console.log(urlProduct)

    let image = document.querySelector(".item__img img")
    image.alt = urlProduct.altTxt;
    image.src = urlProduct.imageUrl;

    
    let nom = document.getElementById("title")
    console.log(nom)
    nom.textContent = urlProduct.name;

    //** Prix **//
  
    let prix = document.getElementById("price")
    console.log(price)
    
    var prixproduit = urlProduct.price;
    prix.textContent = (new Intl.NumberFormat('de-DE', { style: 'decimal', currency: 'EUR' , currencyDisplay: "code" }).format(prixproduit));
    

    //** Prix End **//


    let description = document.getElementById("description")
    console.log(description , image)

    description.textContent = urlProduct.description;
    

    let couleur = document.getElementById("colors")
    console.log(colors)


    console.log(urlProduct.colors)
    urlProduct.colors.forEach((color) => {
        console.log(color)

        let colorElt = document.createElement ("option");
        //Value
        colorElt.value = color
        //Textcontent
        colorElt.textContent = color
        colors.appendChild(colorElt)


    });

    let btnpanier = document.getElementById("addToCart");
    console.log(btnpanier)

    
    btnpanier.addEventListener("click", event => {
    event.preventDefault()
    alert("Produit ajouté")

    var color_select = document.getElementById("colors").value;
    console.log(color_select)
   
    var quantity_select = document.getElementById("quantity").value;
    console.log(quantity_select)


    myProduct = {
        id : urlProduct._id,
        imgProduit : urlProduct.imageUrl,
        nomProduit : urlProduct.name,
        descriptionProduit : urlProduct.description,
        // *** color : couleur sélectionné *** //
        colors : color_select,
        // *** quantité : quantité sélectionné *** //
        quantity : quantity_select
    };
    
    console.log(myProduct)
   
    urlProduct = JSON.stringify(myProduct);
   
    
    
    myProduct = localStorage.getItem("myProduct");
    
    localStorage.setItem('panier', urlProduct);
    
    
    console.log(localStorage.getItem('panier'));
    

});


myProduct = JSON.parse(localStorage.getItem('panier'))

var myProduct = urlProduct;

sessionStorage.removeItem("myProduct");

myProduct = localStorage.getItem("myProduct");

});

