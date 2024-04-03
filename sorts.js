import { heapify, merge } from "./utils.js";

export default class Sorts {
  selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
  }

  bubbleSort(array) {
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j + 1], array[j]] = [array[j], array[j + 1]];
        }
      }
    }
    return array;
  }

  insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      while (j >= 0 && array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        j--;
      }
    }
    return array;
  }

  gnomeSort(array) {
    let pos = 0;
    while (pos < array.length) {
      if (pos === 0 || array[pos] >= array[pos - 1]) {
        pos++;
      } else {
        let temp = array[pos];
        array[pos] = array[pos - 1];
        array[pos - 1] = temp;
        pos--;
      }
    }
    return array;
  }

  radixSortLSD(array) {
    let sortedArray = [];
    let groupedArray = [];
    const maxDigits = Math.max(...array).toString().length;
    let zeroesArray = array.map((num) => {
      const numToString = num.toString();
      return "0".repeat(maxDigits - numToString.length) + numToString;
    });
    for (let place = 1; place <= maxDigits; place++) {
      for (let digit = 0; digit < 10; digit++) {
        let currentDigit = digit.toString();
        sortedArray = zeroesArray.filter(
          (numToString) => numToString.at(-place) === currentDigit
        );
        groupedArray = groupedArray.concat(sortedArray);
      }
      zeroesArray = [...groupedArray];
      groupedArray = [];
    }
    return zeroesArray.map((zeroesNum) => parseInt(zeroesNum));
  }

  shellSort(array) {
    let n = array.length;
    for (let interval = n / 2; interval > 0; interval /= 2) {
      for (let i = interval; i < n; i += 1) {
        let temp = array[i];
        let j;
        for (
          j = i;
          j >= interval && array[j - interval] > temp;
          j -= interval
        ) {
          array[j] = array[j - interval];
        }
        array[j] = temp;
      }
    }
    return array;
  }

  quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pp = Math.floor(arr.length / 2),
      pivot = arr[pp];
    const left = [],
      right = [];
    for (var i = 0; i < arr.length; i++) {
      if (i == pp) continue;
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return this.quickSort(left).concat(pivot, this.quickSort(right));
  }

  heapSort(array) {
    const N = array.length;

    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
      heapify(array, N, i);
    }

    for (let i = N - 1; i > 0; i--) {
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;
      heapify(array, i, 0);
    }
  }

  mergeSort(array) {
    if (array.length === 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2); // Find the middle index
    const left = array.slice(0, middle); // Split the array into left half
    const right = array.slice(middle); // Split the array into right half

    return merge(this.mergeSort(left), this.mergeSort(right));
  }
}
