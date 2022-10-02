// The filter method returns a new array with all the elements that pass the test defined by the given function
// The filter() method does not execute the function or empty elements
// This method does change the original array

const ages = [ 20, 23, 16, 14, 30];
const result = ages.filter(checkAdult); 
// arr.filter(callback(element), thisArg)

function checkAdult(age) {
    return age >= 18;
}

console.log(result);



const names = ["Jeremy", "Sharon", "Che", "Asher", "Ethan"];
const result = names.filter(checkNames);

function checkNames(name) {
return names;
}
console.log(result);
// Can't filter names yet

const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];
function checkPrice(element) {
  return element > 2000 && !Number.isNaN(element);
}
let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices);

// Above, all the numbers less than or equal to 2000, and all the non-numeric values are filtered out


const arr = [1,2,3,4,5,6,7,8,9,10];
 
const new_arr = arr.filter((e) => e%2 == 0);
console.log(new_arr);

// Output
// Prints even values
// (5) [2, 4, 6, 8, 10]