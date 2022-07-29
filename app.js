'use strict'

//creating object literal 

function custPerHour(min, max) {
  return Math.random;
}

custPerHour.store = Math.random

//Seattle 
let Seattle = {
  
  minimum: 23,
  maximum: 65,
  aveCookies: 6.3,

  randomCustNumber: function (){
    return getRandomNumber (this.minimum, this.maximum);
  }

};

//random number generator 
function getRandomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1) + min );
}

console.log(Seattle.randomCustNumber());

//Tokyo
let Tokyo = {
  
  minimum: 3,
  maximum: 24,
  aveCookies: 1.2,

  randomCustNumber: function (){
    return getRandomNumber (this.minimum, this.maximum);
  }

};

//Dubai
let Dubai = {
  
  minimum: 11,
  maximum: 38,
  aveCookies: 3.7,

  randomCustNumber: function (){
    return getRandomNumber (this.minimum, this.maximum);
  }

};

function getRandomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1) + min );
}

console.log(Dubai.randomCustNumber());

//Paris
let Paris = {
  
  minimum: 20,
  maximum: 38,
  aveCookies: 2.3,

  randomCustNumber: function (){
    return getRandomNumber (this.minimum, this.maximum);
  }

};

function getRandomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1) + min );
}

console.log(Paris.randomCustNumber());

//Lima
let Lima = {
  
  minimum: 2,
  maximum: 16,
  aveCookies: 4.6,

  randomCustNumber: function (){
    return getRandomNumber (this.minimum, this.maximum);
  }

};

function getRandomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1) + min );
}

console.log(Lima.randomCustNumber());
