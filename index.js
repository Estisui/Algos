import { writingIntoFile, getAllMethods } from "./utils.js";
import Quadratic from "./sorts/quadraticSorts.js";
// const nLogNSorts = require("./sorts/nLogNSorts");
import { groups } from "./data.js";

try {
  const instance = new Quadratic([]); // Instantiate the Quadratic class
  // const instance = new nLogNSorts([]); // Instantiate the nLogNSorts class
  const arrayOfSorts = getAllMethods(instance).filter(
    (el) => el !== "constructor"
  );

  for (let i = 0; i < groups.length; i++) {
    instance.array = groups[i][1];
    let typeOfTestData = groups[i][0];
    let text = "";
    try {
      arrayOfSorts.forEach((typeOfSortingAlgo) => {
        let nameOfSortingAlgo = typeOfSortingAlgo;
        let start = performance.now().toFixed(2);
        instance[typeOfSortingAlgo]();
        let end = performance.now().toFixed(2);
        let timeBetweenStartStopMS =
          (end - start).toFixed(2) + " " + "miliseconds";
        text = `${typeOfSortingAlgo} ${typeOfTestData} ${timeBetweenStartStopMS}\n'`;

        let statusOfWriting = writingIntoFile(nameOfSortingAlgo, text);
        console.log(statusOfWriting);
      });
    } catch (err) {
      console.log(err);
    }
  }
} catch (err) {
  console.log(err);
}
