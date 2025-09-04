// Expanding Functionality
let csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rowData = csvData.split("\n");
let csvArr = [];
console.log("\nPart 2");
for (i = 0; i < rowData.length; i++) {
  let colData = rowData[i].split(",");
  csvArr.push(colData);
}
console.log(csvArr);
// Transforming Data
console.log("\nPart 3");
let objArr = [];

for (j = 0; j < csvArr.length - 1; j++) {
  let arrObj = {};
  for (k = 0; k < csvArr[j].length; k++) {
    let newKey = csvArr[0][k].toLowerCase();
    arrObj[newKey] = csvArr[j + 1][k];
  }
  objArr.push(arrObj);
}
console.log(objArr);

// Sorting and Manipulating Data
console.log("\nPart 4");
objArr.pop();
objArr.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
objArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objArr)
let ages = 0;
objArr.forEach((entry) => (ages += parseInt(entry.age)));
console.log(`${ages / objArr.length} is the average age of the group.`);

// Full Circle, Back To A String
console.log("\nPart 5");
let resultCSV = "";

let keys = Object.keys(objArr[0]);
for (let i = 0; i < objArr.length; i++) {
  let values = Object.values(objArr[i]);
  if (i == 0) {
    resultCSV += keys;
  } else {
    resultCSV += "\n";
    resultCSV += values;
  }
}
console.log("Original Data:\n"+ csvData + "\n");
console.log("Altered Data:\n" + resultCSV + "\n");
