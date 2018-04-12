var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://wcarisse.github.io/assignments/mountainspoke/data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var services = request.response;
    populateTable = (services);
}

function populateTable(jsonObj) {
    var headings = jsonObj['services'];
    
    var col = [];
    for (var i = 0; i < headings.length; i++) {
        for (var key in services[i]){
            if (col.indexOf(key) === -1){
                col.push(key);
            }
        }
    }
    
    var table = document.createElement('table');
    var tr = table.insertRow(-1);
    
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = col[i];
        tr.appendChild(th);
        
        for (var j = 0; j < col.length; j++) {
        var tableCell = tr.insertCell(-1);
        tableCell.innerHTML = services[i][col[j]];
        }
        
    }
    
    var divContainer = document.getElementById("showServices");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
}