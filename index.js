const addToCart = document.getElementsByClassName('btn-success');
document.addEventListener('DOMContentLoaded', () =>{
    for(let i = 0; i < addToCart.length; i++){
        addToCart[i].addEventListener('click', (event) =>{
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

