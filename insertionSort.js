var insert = function (array, rightIndex, value) {
  var i = rightIndex;
  for (; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
};

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
}

var array = [2, 3, 5, 7, 11, 13, 9, 6];
console.log(array);
//insert(array, 5, 9);
insertionSort(array);
console.log(array);

var array = [22, 11, -99, 88, -9, 7, -42];
console.log(array);
insertionSort(array);
console.log(array);
