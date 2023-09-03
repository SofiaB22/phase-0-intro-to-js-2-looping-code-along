// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(array, surprise) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`);
  }
  return arr;
}


console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday")); 

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}
countDown(10);