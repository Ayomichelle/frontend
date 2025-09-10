fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=> json.map((product)=>{
            let row = document.getElementById("row")
            // div with class of col-sm-4
            let divCol = document.createElement("div")
            divCol.classList.add("col-sm-4")
            // append divCol to row
            row.appendChild(divCol)

            // div with class of card
            let card = document.createElement('div')
            card.classList.add("card")
            divCol.appendChild(card)

            let img = document.createElement("img")
            img.classList.add("card-img-top")
            img.src = product.image
            card.appendChild(img)


            let cardBody = document.createElement("div")
            cardBody.classList.add("card-body")
            card.appendChild(cardBody)

            let h5 = document.createElement("h5")
            h5.classList.add("card-text")
            h5.textContent = product.title
            cardBody.appendChild(h5)

            let p = document.createElement("p")
            p.textContent = product.description
            p.classList.add("card-text")
            cardBody.appendChild(p)

            let i = document.createElement("i")
            i.textContent = `$${product.price}`
            cardBody.appendChild(i)

            
            
            

            //description and price
        }))
