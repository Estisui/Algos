import { appendFileSync } from "fs";

export function writingIntoFile(fileName, data) {
  try {
    appendFileSync(fileName, data);
    return true;
  } catch (err) {
    console.log(fileName);
    console.log(err);
    return false;
  }

  // return new Promise((resolve, reject) => {
  // .then(() => {
  // console.log("The file has been written");
  // resolve("The file has been written");
  // })
  // .catch((err) => {
  // console.log(fileName);
  // console.log(err);
  // reject("Error happen");
  // });
  // });
}

export function getAllMethods(obj) {
  let methods = [];
  let proto = Object.getPrototypeOf(obj);
  let keys = Object.getOwnPropertyNames(proto);
  let protoMethods = keys.filter((key) => {
    return typeof proto[key] === "function";
  });
  methods = methods.concat(protoMethods);
  return methods;
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateAlmostSortedArray(size, numSwaps) {
  const array = Array.from({ length: size }, (_, index) => index);
  for (let i = 0; i < numSwaps; i++) {
    const index1 = random(0, size - 1);
    const index2 = random(0, size - 1);
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }
  return array;
}

export function generateWithPercentageOfRepeating(size, percentage) {
  const NUM = random(0, 100);
  const array = Array.from({ length: size });
  for (let i = 0; i < Math.floor(size * percentage); i++) {
    array[i] = NUM;
  }
  for (let i = Math.floor(size * percentage); i < array.length; i++) {
    array[i] = random(0, 100);
  }
  return array;
}

function fillArrayWithNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = i;
  }
  return array;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function uniteBothSorted(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  // сравниваем пока не дойдем до конца одного из массивов
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++; // увеличиваем индекс одного массива
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // если один из массивов закончился, то добавляем остаток
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
