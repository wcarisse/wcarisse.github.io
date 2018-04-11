var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var title = request.response;
    populateHeader(title);
    show
}