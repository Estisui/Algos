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

export function heapify(arr, N, i)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
}

export function merge(left, right) {
  let resultArray = [],
      leftIndex = 0,
      rightIndex = 0;

  // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++; // Move to the next element in the `left` array
      } else {
          resultArray.push(right[rightIndex]);
          rightIndex++; // Move to the next element in the `right` array
      }
  }

  // Concatenate the remaining elements from either `left` or `right` (if any)
  return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
}
