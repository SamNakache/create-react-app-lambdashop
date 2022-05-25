//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

window.remove= remove;
var items = [];
let total_value = 0;
//getUsers();
setTimeout(() => { makeTable(); }, 2000);
//renderUsers();


/*async function getUsers() {
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
    users.forEach(user => {
        items.push([user.title, user.price]);
        total_value += parseFloat(user.price);
        
    });
    document.getElementById('products-price').innerHTML = "Total Value:"+total_value.toFixed(2);


    
}*/

function remove(rowid){
    var row = document.getElementById(rowid);
    row.parentNode.removeChild(row);
    items.splice(rowid, 1);
    alert(items)
}

function addValue(){
    for (var i = 0; i < items.length; i++) {
        total_value += parseFloat(items[i][1]);
    }
    document.getElementById('products-price').innerHTML = "Total Value:"+total_value;
}

function makeTable(){
    
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.setAttribute("id","TABLE")
    items.push(["Socks", "25"]);
    items.push(["Jeans", "75"]);
    items.push(["Short", "40"]);
    addValue()


    //Get the count of columns.
    var columnCount = items[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < items.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = items[i][j];
            if (j === 0)
                cell.setAttribute("class", "first_cell");
            else
                cell.setAttribute("class", "second_cell");
        }
        var pic = row.insertCell(-1);
        var img = document.createElement('img');
        img.src = "https://img.icons8.com/material-rounded/344/filled-trash.png";
        row.setAttribute("id", i);
        pic.setAttribute("onclick", "remove("+i+")");
        pic.appendChild(img);
        
    }
    

    var dvTable = document.getElementById("body");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}



            





