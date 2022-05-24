//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


var items = [];
getUsers();
setTimeout(() => { makeTable(); }, 2000);



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
    let html = '';
    users.forEach(user => {
        items.push([user.title, user.price]);
        
    });

    
}

renderUsers();





function makeTable(){
    
    //Create a HTML Table element.
    var table = document.createElement("TABLE");

    //Get the count of columns.
    var columnCount = items[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    /*for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }*/

    //Add the data rows.
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
    }

    var dvTable = document.getElementById("body");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}



            





