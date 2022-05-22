'use strict';

//store min/max hr customers
//# of cookies sold per hr, location
//

function randCustomer(min,max) {
  return min + Math.random() * (max - min);
}
console.log(randCustomer (23, 65));

let storeHours = [
  '6am',
  '7am', 
  '8am', 
  '9am', 
  '10am', 
  '11am', 
  '12pm', 
  '1pm', 
  '2pm', 
  '3pm', 
  '4pm', 
  '5pm', 
  '6pm', 
  '7pm', 
  '8pm',
];
console.log(storeHours);

let salesLocation = [
  {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
  },

  {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
  },

  {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
  },

  {
    Location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
  },

  {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
  }

]

console.log(salesLocation)