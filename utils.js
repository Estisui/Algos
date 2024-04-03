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
