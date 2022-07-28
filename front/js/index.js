let url = "http://localhost:3000/api/products"

fetch(url)
.then(data=> {
    return data.json()
}).then(products=>{
    console.log(products)


    let HTML = document.getElementById("items")

    let myHTML =""

    products.forEach((product) => {
       
        console.log(product)
        console.log(product.name)
        // console.log(product.id)

        let card = document.createElement ("a");
        card.href = `./product.html?id=${product._id}`
        let cardArticle = document.createElement ("article");
        let cardImg = document.createElement("img");
        let productName = document.createElement("h3");
        productName.textContent = product.name;
        let productParagraphe = document.createElement("br");
        let productDescription = document.createElement("p");
        cardImg.src = product.imageUrl;
        // productDescription = document.createTextNode (`${product.description}`)
        productDescription.textContent = product.description;
        cardImg.alt = product.altTxt;
        productName.h3 = product.name;
        productDescription.p = product.description;
        cardArticle.appendChild(cardImg)
        card.appendChild(cardArticle)
        cardArticle.appendChild(productName)
        cardArticle.appendChild(productParagraphe)
        cardArticle.appendChild(productDescription)

        HTML.appendChild(card)


    
    });
  
})

