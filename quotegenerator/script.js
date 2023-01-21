let obj = {};

fetch('./quotes.json')
  .then(response => response.json())
  .then(data => {
    obj = data;
    console.table(obj.quotes)
    myFunc();
  })
  .catch(error => console.error(error));

function myFunc() {
  var x = Math.floor(Math.random() * obj.quotes.length);
  
  document.getElementById('textField').innerHTML = obj.quotes[x].quote;
  document.getElementById('authorField').innerHTML = obj.quotes[x].author;
}
