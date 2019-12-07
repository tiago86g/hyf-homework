console.log("Script loaded");

// console.log(getAvailableProducts());

// let testProductNames = ["Flat screen", "Mobile phone", "Wallet"];

// let myUl = document.querySelector("ul");
// let myLi = document.createElement("li");
// myUl.appendChild(myLi);

// function renderProducts(products){
//     for (let i = 0; i < testProductNames.length; i++) {
//         const element = testProductNames[i];
//         let myUl = document.querySelector("ul");
//         let myLi = document.createElement("li");
//         myUl.appendChild(myLi);
//         myLi.innerText=`${testProductNames[i]}`;

//     }
// }
// renderProducts(testProductNames);

const products = getAvailableProducts();
console.log(products)
 

function renderProducts(products){
let myUl = document.querySelector(".products ul");
    for (let i = 0; i < products.length; i++) {
        // const element = products[i];
        // let myUl = document.querySelector("ul");
        let myLi = document.createElement("li");
        myUl.appendChild(myLi);
        
        let myUl2 = document.createElement("ul");
        myLi.appendChild(myUl2);

        let myLi2 = document.createElement("li");
        myLi2.innerText=`${products[i].name}`;
        
        let myLi3 = document.createElement("li");
        myLi3.innerText=`${products[i].price}`;

        let myLi4 = document.createElement("li");
        myLi4.innerText=`${products[i].rating}`;

        let myLi5 = document.createElement("li");

        myUl2.append(myLi2, myLi3, myLi4, myLi5);

        let myUlShipping = document.createElement("ul");
        myLi5.appendChild(myUlShipping);

        for (let j = 0; j < products[i].shipsTo.length; j++) {
            const element = products[i].shipsTo[j];
            
            let myLiShipping = document.createElement("li");
            myLiShipping.innerHTML = element;
            myUlShipping.appendChild(myLiShipping);
        }
    }
}
renderProducts(products);