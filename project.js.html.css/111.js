//get total
let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes= document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit= document.getElementById('submit')

let mood ='create';
let tmp;
function getTotal()
{
    if (price.value !='') {
        let result = (+price.value + +taxes.value + +ads.value) - (+discount.value)
        total.innerHTML = result ;
        total.style.background = 'green';
    }
    else{
        total.innerHTML='';
        total.style.background ='#8d0303' 
    }
}
//create product
let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}
else{
    datapro = [];
}
submit.onclick = function(){
    let newpro= {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }

    if (title.value!=''&& price.value!=''&& category.value!=''&& count.value <= 1000000000000) {
        datapro.push(newpro);

    }
    clearData();
    //save localstorage
    localStorage.setItem('product', JSON.stringify(datapro))
}
//clear inputs
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.value = '';
    count.value = '';
    category.value = '';
    showData();
}

//read
function showData(){
    getTotal();
    let table = '';
    for(let i = 1;i< datapro.length;i++){
        table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].count}</td>
        <td>${datapro[i].category}</td>
        <td>
        <button onclick="updateData(${i})" id="update">update</button>
        </td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>    
        `;

    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll')
    if(datapro.length >0){
        btnDelete.innerHTML=`
        <button onclick="deleteAll()">deleteAll(${datapro.length})</button>
        `}else{
            dtnDlelete.innerHTML = '';
        }
}
showData();

// localStorage.clear()
//count
//delete
function deleteData(i){
    datapro.splice(i,1);
    localStorage.product= JSON.stringify(datapro);
    showData()
}

function deleteAll(){
    localStorage.clear()
    datapro.splice(0)
    showData()
}
//update
function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    getTotal()
    count.style.display = 'none';
    category.value = datapro[i].category;
    submit.innerHTML = 'update';
    mood = 'update';
    tmp = i;
    scroll({
          top:0,
          behavior:'smooth',
    })
}

//search

let searchMood ='title';
function getsearchMood(id)
{
    let search = document.getElementById('search');

    if (id =='btnsearch') {
        searchMood = 'title';
    }else{
        searchMood ='Category';
    }
    search.placeholder = "search By "+searchMood;
    search.focus();
    search.value ='';
    showData();
}

function searchData(value)
{
    let table = '';
    if(searchMood == 'title')
    {
         for (let i = 0; i < datapro.length; i++) {
            if(datapro[i].title.includes(value))
            {
               table +=` <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].count}</td>
                <td>${datapro[i].category}</td>
                <td>
                <button onclick="updateData(${i})" id="update">update</button>
                </td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr> `   
            }

         }   
    }else{
        for (let i = 0; i < datapro.length; i++) {
            if(datapro[i].category.includes(value))
            {
                table +=` <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].count}</td>
                <td>${datapro[i].category}</td>
                <td>
                <button onclick="updateData(${i})" id="update">update</button>
                </td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr> `   
            }

         }   
    }
    document.getElementById('tbody').innerHTML = table;
}

//clean data

