//================== bubble===============
const mainArr = [5, 2, 9, 1, 5, 6];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log("=======================  Bubble Sort =======================")

console.log("unsorted array", mainArr);
const sortedArr = bubbleSort(mainArr.slice());
console.log("sorted array using bubble sort", sortedArr);


// ========================= quick  ========================
const quickSort=(arr) => {

  if (arr.length <= 1) {
    return arr;
  }
  const pivot= arr[0];
  const left= [];
  const right= [];
  const equal= [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

const quickSortedArr = quickSort(mainArr.slice());
console.log("=================== Quick Sort ===========================")
console.log("sorted array using quick sort", quickSortedArr);

// ======================== insertion  ========================
const insertionSort=(arr)=> {

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log("=================== Insertion Sort ===========================")
const insertionSortedArr = insertionSort(mainArr.slice());
console.log("sorted array using insertion sort", insertionSortedArr);



