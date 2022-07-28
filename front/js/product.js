
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

    let prix = document.getElementById("price")
    console.log(price)
    
    prix.textContent = urlProduct.price;

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
    alert("ok")




    console.log(myProduct)




});




// myProduct = JSON.parse(localStorage.getItem('panier'))

// var myProduct = urlProduct;
myProduct = {
    id : urlProduct._id,
    nom : urlProduct.name,
    image : urlProduct.imageUrl,
    description : urlProduct.description,
    // prix : urlProduct.price,   
};



urlProduct = JSON.stringify(myProduct);

localStorage.setItem('panier', urlProduct);


console.log(localStorage.getItem('panier'));


});

