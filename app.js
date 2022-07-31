'use strict'

//random number generator 
function getRandomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1) + min );
}


function getRandomNumber(min, max) {
 
  return Math.floor(Math.random() * (max - min + 1) + min );
}


function cities(location, min, max, average, ) {

  this.location = location
  this.min = min
  this.max = max
  this.average = average

  this.printLocation = function () {
    console.log(this.location)
  };
}

let Seattle = new cities ('Seattle', 23, 65, 6.3);
let Tokyo = new cities ('Tokyo', 3, 24, 1.2);
let Dubai = new cities ('Dubai', 11, 38, 3.7);
let Paris = new cities ('Paris', 20, 38, 2.3)
let Lima = new cities ('Lima', 2, 16, 4.6)

console.log(Seattle, Tokyo, Dubai, Paris, Lima)