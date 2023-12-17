const data = localStorage.getItem('items');
const items = JSON.parse(data);
console.log(items);

const sameDiv = document.querySelector('.sameDiv');
const totalPriceDiv = document.querySelector('.totalpricediv');
const btnShopMore = document.querySelector('.btnshopmore');

function renderItems() {
    if (items.length > 0){
        sameDiv.innerHTML = ''
        let netAmount = 0;

        for (let i = 0; i < items.length; i++){
            // console.log(items[i]);
            const quantity = items[i].length || 1;

            let total;
            if (items[i].length) {
                total = items[i].length * items[i].price;
            } else {
                total = items[i].price;
            }
            roundedTotal = total.toFixed(2);

            netAmount += total;
            roundedNetAmount = netAmount.toFixed(2);

            sameDiv.innerHTML += `
            <div class="card p-1 mb-3 shadow-lg" style="width: 16rem; height: 31.5rem">
                <img width ='' height ='200px' src= ${items[i].image} class="card-img-top" alt="Product image">
            <div class="card-body">
            <h5 class="card-title titleh5">Title: ${items[i].title}</h5>
            <p class="card-text">Category: ${items[i].category}</p>
            <h5 class="card-title">Price: $${items[i].price}</h5>
            <p class="card-text">Total price: $${roundedTotal}</p>
            <p class="card-text fw-bolder">
            <span>
            <a onclick="delete2(${i})" class="btn btn-warning">Delete</a>
            <a onclick="minusItem(${i})" class="btn fw-bolder shadow-lg" style="width: 2.5rem; background-color: rgb(216, 216, 216);">−</a>
            ${quantity}
            <a onclick="addItem(${i})" class="btn fw-bolder shadow-lg" style="width: 2.5rem; background-color: rgb(216, 216, 216);">+</a>
            </span>
            </p>
            </div>
            </div>
            `
        }        
      totalPriceDiv.innerHTML = `<h3>Net Amount: $${roundedNetAmount}</h3>`
    } else {
        sameDiv.innerHTML = 'No product found in the cart right now!';
        totalPriceDiv.innerHTML = '';
    }
}

renderItems();


function delete2(index){
    items.splice(index , 1);
    renderItems();
    localStorage.setItem('items' , JSON.stringify(items));
}

function addItem(index) {
    items[index].length = (items[index].length || 1) + 1;
    renderItems();
    localStorage.setItem('items' , JSON.stringify(items));
}

function minusItem(index) {
    if (items[index].length > 0) {
        items[index].length -= 1;

        if (items[index].length === 0) {
            items.splice(index , 1);
        }
        renderItems();
        localStorage.setItem('items' , JSON.stringify(items));
    } 
}

btnShopMore.addEventListener('click' , () => {
    localStorage.setItem('items' , JSON.stringify(items));
    window.location = 'price oye.html';
})






