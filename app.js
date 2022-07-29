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
  
  minimum: 23,
  maximum: 65,
  aveCookies: 6.3,

  randomCustNumber: function (){
    return getRandomNumber (this.minimum, this.maximum);
  }

};

//Dubai
let Dubai = {
  
  minimum: 23,
  maximum: 65,
  aveCookies: 6.3,

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
  
  minimum: 23,
  maximum: 65,
  aveCookies: 6.3,

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
  
  minimum: 23,
  maximum: 65,
  aveCookies: 6.3,

  randomCustNumber: function (){
    return getRandomNumber (this.minimum, this.maximum);
  }

};

function getRandomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1) + min );
}

console.log(Lima.randomCustNumber());
