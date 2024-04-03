import { appendFileSync, truncateSync } from "fs";
import { getAllMethods } from "./utils.js";
import Sorts from "./sorts.js";
import { groups } from "./data.js";

// clear the results file if exists
truncateSync("results.csv", 0)
const csvRows = [];

const instance = new Sorts([]); // Instantiate the Quadratic class
const arrayOfSorts = getAllMethods(instance).filter(
  (el) => el !== "constructor"
);

// add row with sorting algos names
csvRows.push(`,${arrayOfSorts.join(',')}`);

for (let i = 0; i < groups.length; i++) {
  instance.array = groups[i][1];
  let typeOfTestData = groups[i][0];
  // add row with arrayType
  csvRows[i + 1] = (`${typeOfTestData},`);
  arrayOfSorts.forEach((typeOfSortingAlgo, index) => {
    let start = performance.now().toFixed(2);
    instance[typeOfSortingAlgo]();
    let end = performance.now().toFixed(2);
    let timeBetweenStartStopMS = (end - start).toFixed(2);
    console.log(`testCase ${i + 1}/${groups.length}: algorithm ${index + 1}/${arrayOfSorts.length}`);
    // append row with sorting time in MS
    csvRows[i + 1] = csvRows[i + 1].concat(`${timeBetweenStartStopMS},`);
  });
}

csvRows.forEach((row) => appendFileSync("results.csv", `${row}\n`));
