//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import deletePic from "./delete.png"
import plusPic from "./plus.png"
import minusPic from "./minus.png"



//import App from './App';
//import * as serviceWorker from './serviceWorker';

window.remove = remove;
window.increaseCount = increaseCount;
window.decreaseCount = decreaseCount;
var items = [];
let total_value = 0;
//getUsers();
setTimeout(() => { makeTable(); }, 2000);
//renderUsers();


async function getUsers() {
    let url = 'https://fakestoreapi.com/products';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    users.forEach(item => {
        items.push({ 
            name: item.title, 
            price: item.price, 
            count: 1 })
        
    });


    
}

function remove(rowid) {
    var row = document.getElementById(rowid);
    row.parentNode.removeChild(row);
    items.splice(rowid, 1);
    if (items.length <= 4)
        shippingValue();

}

function totalValue() {
    total_value = 0;
    for (var i = 0; i < items.length; i++) {
        total_value += parseFloat(items[i].price)*parseFloat(items[i].count);
    }
    document.getElementById('products-price').innerHTML = "Total Value: "+total_value.toFixed(2);

}

function shippingValue(){
    if (items.length > 4)
        document.getElementById('shipping-value').innerHTML = "Shipping Value: 40";
    else
    document.getElementById('shipping-value').innerHTML = "Shipping Value: 20";
}

function makeTable() {

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.setAttribute("id", "TABLE")
    items.push({ name: 'Socks', price: 25, count: 1 })
    items.push({ name: 'Jeans', price: 75, count: 1 })
    items.push({ name: 'Short', price: 35, count: 1 })

    totalValue()
    shippingValue()


    for (var i = 0; i < items.length; i++) {
        var row = table.insertRow(-1);
        row.setAttribute("id", i);
        var cell = row.insertCell(-1);
        cell.innerHTML = items[i].name;
        cell.setAttribute("class", "first_cell");
        cell = row.insertCell(-1);
        cell.innerHTML = items[i].price;
        cell.setAttribute("class", "second_cell");

        var plus = row.insertCell(-1);
        var img = document.createElement('img');
        img.src = plusPic;
        plus.setAttribute("onclick", "increaseCount(" + i + ")");
        plus.appendChild(img);

        var cell = row.insertCell(-1);
        cell.innerHTML = items[i].count;
        cell.setAttribute("id", "count" + i)
        cell.setAttribute("class", "third_cell");

        var minus = row.insertCell(-1);
        img = document.createElement('img');
        img.src = minusPic;
        minus.setAttribute("onclick", "decreaseCount(" + i + ")");
        minus.appendChild(img);



        var trash = row.insertCell(-1);
        img = document.createElement('img');
        img.src = deletePic;
        trash.setAttribute("onclick", "remove(" + i + ")");
        trash.appendChild(img);


    }
    var dvTable = document.getElementById("body");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function increaseCount(rowid) {
    const element = document.getElementById("count" + rowid);
    let count = element.innerHTML;
    count++;
    items[rowid].count = count;
    element.innerHTML = count;
    totalValue();
}

function decreaseCount(rowid) {
    const element = document.getElementById("count" + rowid);
    let count = element.innerHTML;
    count--;
    items[rowid].count = count;
    if (count === 0) {
        remove(rowid);
        items.splice(rowid, 1);
    }
    else
        element.innerHTML = count;
        totalValue();
}









