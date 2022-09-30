const fs = require("fs");
let dataArray;
let dataArray1;
fs.readFile("./add2.csv", "utf8", (err, data) => {
  dataArray = data.split(/\r?\n/);

  //Be careful if you are in a \r\n world...
  // Your array contains ['ID', 'D11', ... ]
});
fs.readFile("./add4.csv", "utf8", (err, data) => {
  dataArray1 = data.split(/\r?\n/);

  //Be careful if you are in a \r\n world...
  // Your array contains ['ID', 'D11', ... ]
});
setTimeout(() => {
  check();
}, 5000);
const check = () => {
  dataArray.map((addy) => {
    dataArray1.forEach((element) => {
      if (element.toLowerCase() == addy.toLowerCase()) {
        console.log(`${addy}Match ${element}`);
      }
    });
  });
};

// // function csvToArray(str, delimiter = ",") {
// //   // slice from start of text to the first \n index
// //   // use split to create an array from string by delimiter
// //   const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

// //   // slice from \n index + 1 to the end of the text
// //   // use split to create an array of each csv value row
// //   const rows = str.slice(str.indexOf("\n") + 1).split("\n");

// //   // Map the rows
// //   // split values from each row into an array
// //   // use headers.reduce to create an object
// //   // object properties derived from headers:values
// //   // the object passed as an element of the array
// //   const arr = rows.map(function (row) {
// //     const values = row.split(delimiter);
// //     const el = headers.reduce(function (object, header, index) {
// //       object[header] = values[index];
// //       return object;
// //     }, {});
// //     return el;
// //   });

// //   // return the array
// //   return arr;
// // }

// // let ara = reader.readAsText(file);
// // console.log(ara);

// // BREWs

// const fs = require("fs");

// let container = [];
// let container1 = [];

// let arr = fs.readFile("./add1.csv", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error occured while reading file");
//   } else {
//     container.push(data.split(/\r?\n/));
//     // console.log(container);
//   }
// });
// let arr1 = fs.readFile("./add2.csv", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error occured while reading file");
//   } else {
//     container1.push(data.split(/\r?\n/));
//     // console.log(container1);
//   }
// });

// const compare = (container, container1) => {
//   const finalResult = [];

//   container.forEach((element) =>
//     container1.forEach((element1) => {
//       // if (element == element1) {
//         console.log(element)
//       // }
//     })
//   );
//   console.log(finalResult);
// };

// setTimeout(() => {
//   compare(container, container1);
// }, 3000);
