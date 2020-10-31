const addToCart = document.getElementsByClassName('btn-success');
document.addEventListener('DOMContentLoaded', () =>{
    for(let i = 0; i < addToCart.length; i++){
        addToCart[i].addEventListener('click', (event) =>{
            // let amp = event.target.parentElement.children[0].children[0].attributes[0].textContent;
            // console.log(typeof(amp));
               cartItems(event.target.parentElement);
        });
    }
});
//Persisting Items to local storage
function cartItems(items){
    let image = items.children[0].children[0].attributes[0].textContent;
    let description = items.children[1].textContent;
    let amount = items.children[2].textContent;
    let storage = {
        image,
        description,
        amount,
        count: 1
    };
      local(storage);  
}

//Local Storage
function local(store) {
    let storage = JSON.parse(localStorage.getItem("carts")) || [];
    let len = storage.length;
    if(!len) {
        storage.push(store);
        localStorage.setItem("carts",JSON.stringify(storage));
        return;
    }else{
            for(let i=0; i < len;i++){
                if(store.image === storage[i].image){
                    storage[i].count++;
                    localStorage.setItem("carts",JSON.stringify(storage));
                    return;
                }
            }
            storage.push(store);
            localStorage.setItem("carts",JSON.stringify(storage));
            return;
    }
    
}
//Displaying items on the cart
const getStore = function(){
    let storage = JSON.parse(localStorage.getItem("carts"));
    return storage;
};

const products = document.querySelector("#products");
document.addEventListener('DOMContentLoaded', () => {
        let getItems = getStore();

let html = '';
getItems.forEach( value =>{
    html += `
    <div class="cart-container mx-auto">
         <button class="btn btn-danger btn-sm float-right mt-2 mr-1">X</button>
         <div class="checkout">
            <div class="ml-2"><img src=${value.image} class="cart-image my-2" alt=""></div>
            <h5 class="my-3 mx-2">${value.description}</h5>
            <h5 class="my-3 mx-2">${value.amount}</h5>
            </div>
            <div>
            <button class="count btn btn-secondary btn-smml-1 mb-1 ml-1">${value.count}</button>
            <button class="btn btn-primary mr-2 mb-1 float-right">Pay</button>
            </div>
     </div>
 `
    products.innerHTML = html;
});

// const removeItem = document.querySelector("#removeItem");
// const cartContainer = document.querySelector(".cart-container")
// for(let i = 0; i < removeItem.length; i++){
//     removeItem.addEventListener('click', () => {
//         for(let j = 0; j < cartContainer.length; j++){
//             cartContainer.style.display = 'none';
//         }
//     })
// }

});


{/* <div class="cart-container ml-auto mr-auto mb-3">
<div class="mx-2 checkout">
<div class="p-2 cart-image"><img src=${value.image} width="100%"  height="100%" class="display-img" alt=""></div>
    <h5 class="mr-3 my-3 description">${value.description}</h5>
    <h5 class="mr-3 my-3 description ">${value.amount}</h5>
</div>
<div>
<button >${value.count}</button>
<button class="btn btn-primary my-2 mx-4 pay">Pay</button>
<button class="btn btn-danger btn-sm" id="removeItem">X</button>
    </div>
</div>  */}