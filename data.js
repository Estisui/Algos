import {
  random,
  generateAlmostSortedArray,
  generateWithPercentageOfRepeating,
} from "./utils.js";

const group1 = [
  Array.from({ length: 10 }, () => random(0, 9)), // Range: 0-9, Array size: 10
  Array.from({ length: 1000 }, () => random(0, 999)), // Range: 0-999, Array size: 1000
  Array.from({ length: 100000 }, () => random(0, 99999)), // Range: 0-99999, Array size: 100000
  // Array.from({ length: 10000000 }, () => random(0, 999999999)), // Range: 0-999999999, Array size: 10000000
  Array.from({ length: 100000 }, () => random(0, 9999999)), // Range: 0-9999999, Array size: 100000
  Array.from({ length: 100000 }, () => random(0, 999999999)), // Range: 0-999999999, Array size: 100000
];

const group2 = [
  Array.from({ length: 10 }, (_, index) => index).sort(), // Single sequence of numbers
  Array.from({ length: 10 }, (_, index) => [index, index + 10])
    .flat()
    .sort(), // Two sequences of numbers
  Array.from({ length: 10 }, (_, index) => [index, index + 10, index + 20])
    .flat()
    .sort(), // Three sequences of numbers
];

const group3 = [
  generateAlmostSortedArray(10, 2), // Array size: 10 with 2 swaps
  generateAlmostSortedArray(100, 5), // Array size: 100 with 5 swaps
  generateAlmostSortedArray(1000, 10), // Array size: 1000 with 10 swaps
];

// Fourth Group - Fully sorted arrays (ascending and descending)
const group4 = [
  Array.from({ length: 10 }, (_, index) => index), // Ascending order, Array size: 10
  Array.from({ length: 10 }, (_, index) => 10 - index - 1), // Descending order, Array size: 10
  Array.from({ length: 100 }, (_, index) => index), // Ascending order, Array size: 100
  Array.from({ length: 100 }, (_, index) => 100 - index - 1), // Descending order, Array size: 100
];

const ten = 0.1;
const twentyFive = 0.25;
const fifty = 0.5;
const seventyFive = 0.75;
const ninety = 0.9;

const size10 = 10;
const size100 = 100;
const size1000 = 1000;
const size10000 = 10000;
const size100000 = 100000;

const group5 = [
  [generateWithPercentageOfRepeating(size10, ten)],
  [generateWithPercentageOfRepeating(size100, twentyFive)],
  [generateWithPercentageOfRepeating(size1000, fifty)],
  [generateWithPercentageOfRepeating(size10000, seventyFive)],
  [generateWithPercentageOfRepeating(size100000, ninety)],
];

export const groups = [
  // === RANDOMLY SORTED ELEMENTS FROM 10^1 -> 10^7
  ["Array of random elements " + group1[0].length + " length", group1[0]],
  ["Array of random elements " + group1[1].length + " length", group1[1]],
  ["Array of random elements " + group1[2].length + " length", group1[2]],
  // ["Array of random elements " + group1[3].length + " length", group1[3]],
  [
    "Array of random elements in range 10^7 " + group1[3].length + " length",
    group1[3],
  ],
  [
    "Array of random elements in range 10^9 " + group1[4].length + " length",
    group1[4],
  ],

  // === FEW SORTED SEQUENCES
  [
    "Array of " +
      group2[0].length +
      " elements with repeating of one sequence of numbers",
    group2[0],
  ],
  [
    "Array of " +
      group2[1].length +
      " elements with repeating of two sequences of numbers",
    group2[1],
  ],
  [
    "Array of " +
      group2[2].length +
      " elements with repeating of three sequences of numbers",
    group2[2],
  ],

  // === WITH FEW SWAPS
  ["Array of " + group3[0].length + " elements with 2 swaps", group3[0]],
  ["Array of " + group3[1].length + " elements with 5 swaps", group3[1]],
  ["Array of " + group3[2].length + " elements with 10 swaps", group3[2]],

  // === ALREADY SORTED
  [
    "Array of " + group4[0].length + " elements with ascending order",
    group4[0],
  ],
  [
    "Array of " + group4[1].length + " elements with descending order",
    group4[1],
  ],
  [
    "Array of " + group4[2].length + " elements with ascending order",
    group4[2],
  ],
  [
    "Array of " + group4[3].length + " elements with descending order",
    group4[3],
  ],

  // === REPEATING WITH PERCENTAGE FROM 10% -> 90%
  [
    `Array of ${group5[0][0].length} elements with repeating of one element by percentage ${ten}% `,
    group5[0][0],
  ],
  [
    `Array of ${group5[1][0].length} elements with repeating of one element by percentage ${twentyFive}% `,
    group5[1][0],
  ],
  [
    `Array of ${group5[2][0].length} elements with repeating of one element by percentage ${fifty}% `,
    group5[2][0],
  ],
  [
    `Array of ${group5[3][0].length} elements with repeating of one element by percentage ${seventyFive}% `,
    group5[3][0],
  ],
  [
    `Array of ${group5[4][0].length} elements with repeating of one element by percentage ${ninety}% `,
    group5[4][0],
  ],
];
