let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


// get total
function getTotal(){
 
 if(price.value!='')
 {
  let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
  total.innerHTML = result;
  total.style.background = "#040"
 }else {
  total.innerHTML = '';
  total.style.background = "#a00d02"
 }
}
// create Product
let dataPro;
if(localStorage.product != null){
 dataPro = JSON.parse(localStorage.product)
}else{
 dataPro = []
}


submit.onclick = function(){
 let newPro = {
  title : title.value,
  price : title.price,
  taxes : taxes.value,
  ads : ads.value,
  discount : discount.value,
  total : title.innerHTML,
  count : count.value,
  category : category.value
 }

 dataPro.push(newPro);
 localStorage.setItem('product' ,   JSON.stringify(dataPro)  )

 clearData()
 showData()
}


// save local storage
// clear inputs data

function clearData(){
title.value = ''
price.value = ''
taxes.value = ''
ads.value = ''
discount.value = ''
total.innerHTML = ''
count.value = ''
category.value = ''
}
// read

function showData(){
let table = '' ;

for(let i=0 ; i< dataPro.length ; i++ ){
 table += `<tr>
      <td>${i}</td>
      <td>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td>${dataPro[i].category}</td>
      <td><button id="update">update</button></td>
      <td><button id="delete">delete</button></td>
     </tr>`;
}

document.getElementById('tbody').innerHTML = table;
}

showData()
// count 
// delete or delete all
// update
// search
// clean inputs data