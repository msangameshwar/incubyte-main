function add(numbers) {
  //Check if number is empty
  if (!numbers) {
    return 0;
  }
  let delimiter = ',';
  // Check for the delimiter
  if (numbers.startsWith('//')) {
    delimiter = numbers[2];
    numbers = numbers.substring(4);
  }

  let arr = numbers.split('\n').join(delimiter).split(delimiter);
  let sum = 0;
  let negatives = [];
  // Removing characters
  const filteredArr = arr.filter((elem) => !isNaN(elem) && elem !== '');

  //console.log(filteredArr);

  if (!filteredArr.length) {
    throw new Error('Invalid Input');
  }

  filteredArr.forEach((value) => {
    let num = parseInt(value);

    if (num < 0) {
      negatives.push(num);
    }
    sum += num;
  });

  if (negatives.length) {
    throw new Error('Negatives not allowed: ' + negatives.join(','));
  }
  return sum;
}

console.log(add(''));
console.log(add('1,2'));
console.log(add('1'));
console.log(add('-1,2,-3'));
console.log(add('1,#,3,\n4'));
add('dghh');
