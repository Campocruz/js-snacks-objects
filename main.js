// First SNACK

// Create array object of bikes
const bikes = [
  {
    name: 'Bianchi',
    weight: 9
  },
  {
    name: 'Atala',
    weight: 16
  },
  {
    name: 'Colnago',
    weight: 18
  },
  {
    name: 'Pinarello',
    weight: 10
  },
  {
    name: 'De Rosa',
    weight: 14
  }
];
// Variables for save the key of bike with minor weight
let minorWeightKey;
// Variable to determinate te minor value of weight bikes
let minorWeight = 0;
// FOR IN cycle whit "key" like a index for all key inside array object bikes
for (let key in bikes) {
  // Save the weight vslue into a variable
  const weightBikes = bikes[key].weight;
  // If minorWeight is 0 rappresent the first cycle and write itself with new value
  if (minorWeight === 0) {
    minorWeight = weightBikes;
    minorWeightKey = key;
  } else if (weightBikes <= minorWeight) {
    minorWeight = weightBikes;
    minorWeightKey = key;
  }
}
console.log(`La bicicletta meno pesante è: ${bikes[minorWeightKey].name} con un valore di ${bikes[minorWeightKey].weight}Kg`);

// Second SNACK

// Create array object of teams
// const teams = [
//   {
//     name: 'Juve',
//     "points-scored": 0,
//     "fouls-suffered": 0
//   },
//   {
//     name: 'Milan',
//     "points-scored": 0,
//     "fouls-suffered": 0
//   },
//   {
//     name: 'Inter',
//     "points-scored": 0,
//     "fouls-suffered": 0
//   },
//   {
//     name: 'Atalanta',
//     "points-scored": 0,
//     "fouls-suffered": 0
//   },
//   {
//     name: 'Bari',
//     "points-scored": 0,
//     "fouls-suffered": 0
//   }
// ];
// // Empty array for insert the teams whit new value
// const finalList = [];
// // FOR IN cycle to change value for apecific key and after push in finalList arry 
// for (let key in teams) {
//   teams[key]["points-scored"] = randomNumber(1, 50);
//   teams[key]["fouls-suffered"] = randomNumber(60, 100);
//   finalList.push(`${teams[key].name} : ${teams[key]["fouls-suffered"]}`);
// }
// // Print the teams array with fouls suffered
// for (let i = 0; i < finalList.length; i++) {
//   console.log(finalList[i]);
// }


// // Function declaretion 
// function randomNumber(start, end) {
//   const random_number = Math.floor((Math.random() * (end - start) + start));
//   return random_number;
// }