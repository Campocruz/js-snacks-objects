// Create array object of bikes
const bikes = [
  {
    name: 'Bianchi',
    weight: 20
  },
  {
    name: 'Atala',
    weight: 15
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
// Variable to determinate te minor value of weight bikes
let minorWeight = 0;
// FOR IN cycle whit "key" like a index for all key inside array object bikes
for (let key in bikes) {
  // Save the weight vslue into a variable
  const weightBikes = bikes[key].weight;
  // If minorWeight is 0 rappresent the first cycle and write itself with new value
  if (minorWeight === 0) {
    minorWeight = weightBikes
  } else if (weightBikes <= minorWeight) { minorWeight = weightBikes }
}
console.log(minorWeight);