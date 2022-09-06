
window.localStorage.getItem('panier');

panier = JSON.parse(window.localStorage.getItem('panier'))


console.log(panier)




// let len = localStorage.length;
// console.log(len);


//** TEST **//
id = panier.id  
// key boucle //
// let urlBase = "http://localhost:3000/api/products/"
let urlProductpanier = `http://localhost:3000/api/products/${id}`




fetch(urlProductpanier)
.then(data=>{
    return data.json()
}).then(urlProductpanier=>{

//** END TEST**//


// window.localStorage.clear();
   
    let HTML = document.getElementById("cart__items")
   
        
// ****HTML****//
    let cart__item = document.createElement ("article")
    
    console.log(panier.id)

    cart__item.setAttribute("data-id", panier.id)
    cart__item.setAttribute("data-color", panier.id)
    cart__item.classList.add("cart__item")

    
    HTML.appendChild(cart__item)
    

        let cart__item__img = document.createElement("div")
        cart__item__img.classList.add("cart__item__img")
        // console.log(cart__item__img)
        cart__item.appendChild(cart__item__img)
        
            let cart_img = document.createElement("img")
            cart_img.classList.add("cart_img")
            
            cart__item__img.appendChild(cart_img)
            cart_img.src = urlProductpanier.imageUrl

        
        let cart__item__content = document.createElement("div")
        cart__item__content.classList.add("cart__item__content")
        cart__item.appendChild(cart__item__content)
        


            let cart__item__content__description = document.createElement("div")
            cart__item__content__description.classList.add("cart__item__content__description")
            cart__item__content.appendChild(cart__item__content__description)
            

                let nom_produit = document.createElement("h2")
                nom_produit.classList.add("nom_produit")
                nom_produit.textContent = urlProductpanier.name
                cart__item__content__description.appendChild(nom_produit)
                

                let colors = document.createElement("p")
                colors.classList.add("colors")
                colors.textContent = panier.colors
                cart__item__content__description.appendChild(colors)


                let prix = document.createElement("p")
                
                prix.textContent = urlProductpanier.price + ('\u20AC')
                cart__item__content__description.appendChild(prix)
                
                
            let cart__item__content__settings = document.createElement("div")
            cart__item__content__settings.classList.add("cart__item__content__settings")
            cart__item__content.appendChild(cart__item__content__settings)

                let cart__item__content__settings__quantity = document.createElement("div");
                cart__item__content__settings__quantity.classList.add("cart__item__content__settings__quantity")
                cart__item__content__settings.appendChild(cart__item__content__settings__quantity);

                    let quantité = document.createElement("p")
                    quantité.classList.add("quantité")
                    quantité = document.createTextNode ('Qté : ')
                    cart__item__content__settings__quantity.appendChild(quantité)

                    let itemQuantity = document.createElement("input")
                    itemQuantity.setAttribute("number", "itemQuantity", "min", "max");
                    // var = document.querySelector('input').value;
                    
                    itemQuantity.classList.add("itemQuantity")
                    cart__item__content__settings__quantity.appendChild(itemQuantity)
                    // ici //
                    itemQuantity = panier.quantity
                    
                    

                let cart__item__content__settings__delete = document.createElement("div");
                cart__item__content__settings__delete.classList.add("cart__item__content__settings__delete")
                cart__item__content__settings.appendChild(cart__item__content__settings__delete);
                    
                let deleteItem = document.createElement("p")
                    deleteItem.classList.add("deleteItem")
                let deleteText = document.createTextNode ('Supprimer')
                    deleteItem.appendChild(deleteText)
                    cart__item__content__settings__delete.appendChild(deleteItem)

        
    // var tQuantity = document.getElementById("totalQuantity").value;
    // tQuantity = quantity_select
  

    // let tPrice = document.getElementById("totalPrice");
    // tPrice = panier.prixP
  
});

    
    
        
        
    
        
            
            
            

           
    
  
    

   

