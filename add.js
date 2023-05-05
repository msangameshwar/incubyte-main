function add(numbers) {
  let delimiter = ',';
  //Check if number is empty
  if (numbers == '') {
    return 0;
  }
  // Check for the delimiter
  if (numbers.startsWith('//')) {
    delimiter = numbers[2];
    numbers = numbers.substring(4);
  }

  let arr = numbers.split('\n').join(delimiter).split(delimiter);
  console.log(arr);
}

console.log(add(''));
