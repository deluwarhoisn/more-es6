const numbers = [ 1,5,16,10,45,2,7];
const firstEven = numbers.find(x => x%2 === 0)

const greaterThan50 = numbers.find( num => num > 50)
console.log(greaterThan50)