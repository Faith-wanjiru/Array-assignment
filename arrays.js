// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let numbers = [3,7,34,90,12]
console.log('last item', numbers.slice(-1));

let items =[true, "green", "where",12,56];
console.log('last item', items.slice(-1));

// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

let mypets =["Cow", "Bird", "Snake", "Dog"];
console.log((mypets.join()))

// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let negative = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log((negative.sort()));

// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
  let arr = ["boy", "man", "girl",            "school", "girl"]
console.log((arr.splice()));

// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4]
 let arry5 = ["the", "way", "x", 4]
console.log((arry5.includes));





// Write a JS script to sort the following string:let word = "renniw"
let word = ["renniw"]
console.log((word.sort()));

// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits = ["Apple", "Orange", "Pineapple", "Mango", "Pear", "Watermelon"]
fruits.slice(5,0, "Tomato")
console.log((fruits));
