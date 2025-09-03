// Expanding Functionality
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let rowData = csvData.split('\n')
let csvArr = []

for (i = 0 ; i < rowData.length ; i++) {
    let colData = rowData[i].split(',')
    csvArr.push(colData)
}
// Transforming Data
let objArr = []

for (j = 0 ; j < csvArr.length-1 ; j++ ) {
    let arrObj = {}
    for ( k = 0 ; k < csvArr[j].length ; k++) {
        let newKey = csvArr[0][k].toLowerCase();
        arrObj[newKey] = csvArr[j+1][k]
    }
    objArr.push(arrObj)
}
console.log(objArr)

// Sorting and Manipulating Data
objArr.pop(); 
objArr.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })
objArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(objArr)

let ages = 0;
objArr.forEach(entry => ages+=parseInt(entry.age))
console.log(`${ages/objArr.length} is the average age of the group.`);

// Full Circle, Back To A String

let resultString = "";
for(let i = 0; i < objArr.length;i++){
    let objEntry = objArr[i]
    for(key in objEntry){
        resultString+=key
        resultString+=","
    }
}
console.log(resultString)