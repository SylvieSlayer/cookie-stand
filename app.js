'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allStores = [];

function randomNumber(min, max) {
  return Math.floor(math.random() * (max - min)) + min;
}

function Cookies(name, min, max, avg) {
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.name = name;

  this. total = 0;
  this.cookiesPerHour = [];

  allStores.push(this);
}
Cookies.prototype.calcCustomerPerHour = function () {
  for (let i = 0; i <hours.length; i++){
    this.cookiesPerHour.push(math.floor(this.calcCustomerPerHour() * this.avg));
    this.total += this.cookiesPerHour[i];}
}  
    //function cookie () 
  

const Seattle = new Cookies('Seattle', 23, 65, 6.3);
//console.log(Seattle);

const Tokyo = new Cookies('Tokyo', 3, 24, 1.2);

const Dubai = new Cookies('Dubai', 11, 38, 3.7);

const Paris = new Cookies('Paris', 20, 38, 2.3);

const Lima = new Cookies('Lima', 2, 16, 4.6)

//console.log('allStores', allStores);



let parent = document.getElementById('parent');

let table = document.createElement('table');


function makingHeader() {
  let headingrow = document.createElement('tr');
  table.appendChild(headingrow);

  let firstTh = document.createElement('th');
  headingrow.appendChild(firstTh);
  firstTh.textContent = 'Name';

  for (let i = 0; i < hours.length; i++) {
    let hoursTh = document.createElement('th');
    headingrow.appendChild(hoursTh);
    hoursTh.textContent = hours[i];
  }

  let finalTh = document.createElement('th');
  headingrow.appendChild(finalTh);
  finalTh.textContent = "Daily Location Total";
}

Cookies.prototype.render = function () {
  let storeRow = document.createElement('tr');
  table.appendChild(storeRow);

  let nameTd = document.createElement('td');
  storeRow.appendChild('nameTd');
  nameTd.textContent = this.name;

  for (let i = 0; i < hours.length; i++) {
    let cookiesTd = document.createElement('td');
    storeRow.appendChild(cookiesTd);
    cookiesTd.textContent = this.cookiesPerHour[i];
  }
  let totalTd = document.createElement('td');
  storeRow.appendChild(totalTd);
}

function makingFooter() {
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  let firstTh = document.createElement('th');
  footerRow.appendChild(firstTh);

  firstTh.textContent = 'Totals';

  let totalForEachHour;
  let megaTotal = 0;
  for (let i = 0; i <hours.length; i++){
totalForEachHour = 0;
for (let j = 0; j < stores.length; j++) {
  totalForEachHour += stores[j].cookiesPerHour[i];
  megaTotal += stores[j].cookiesPerHour[i];
}

let footerTh = document.createElement('th');
footerRow.appendChild(footerTh);
footerTh.textContent = totalForEachHour;
}

let totalTh = document.createElement('th');
footerRow.appendChild(totalTh);

}


function newStore(event) {
  event.preventDefault();
  let newPlace = event.target.storeCountry.value;
  let min = parseInt(event.target.minCustPerHr.value);

}


let form = document.getElementById('form');
form.addEventListener('submit', newStore);

