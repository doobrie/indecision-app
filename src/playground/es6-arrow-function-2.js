// arguments object is no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments)
//   return a + b
// }


const add = (a, b) => {
  //console.log(arguments)
  return a + b;
}

console.log(add(55, 1))


// this keyword no longer bound


const user = {
  name: 'David',
  cities: ['Leeds', 'Reading'],
  printPlacesLived() {

    return this.cities.map((city) => this.name + ' has lived in ' + city + '!')

  }
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())