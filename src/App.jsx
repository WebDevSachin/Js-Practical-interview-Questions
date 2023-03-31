import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('first');
  });

  // const obj = {
  //   name: 'Sachin',
  //   class: '12',
  //   age: 22,
  // };

  // const newOne = { ...obj, lorem: 'ipsem' };
  // const { name, ...rest } = obj;

  const dd = [3, 1, [2, 7], 6, [9, [10, 5], 28], 99, [36, 93], 59];

  const finalArray = [];

  for (let i = 0; i < dd.length; i++) {
    if (Array.isArray(dd[i])) {
      for (let j = 0; j < dd[i].length; j++) {
        finalArray.push(dd[j]);
      }
    }
    finalArray.push(dd[i]);
  }

  console.log(finalArray);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

// 1;
// 7;
// 2;
// 6;
// 3;
// 5;
// 4;

// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();

// // 3

// function func2() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
// }
// func2();

// // 3
// // 3
// // 3

function runFunc() {
  console.log('1' + 1);
  // 2
  console.log('A' - 1);
  // error
  console.log(2 + '-2' + '2');
  // 2
  console.log('Hello' - 'World' + 78);
  //
  console.log('Hello' + '78');
  // Hello78
  console.log(2 + 5 + '3');
  // 10
}
runFunc();

// // curring
// const mul = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };

// console.log(mul(2)(3)(4));

// // run `node index.js` in the terminal

// const dd = [3, 1, [2, 7], 6, [9, [10, 5], 28], 99, [36, 93], 59];

// const finalArray = [];

// // for (let i = 0; i < dd.length; i++) {
// //   if (Array.isArray(dd[i])) {
// //     for (let j = 0; j < dd[i].length; j++) {
// //       finalArray.push(dd[j]);
// //     }
// //   }
// //   finalArray.push(dd[i]);
// // }

// // console.log(finalArray);

// // with re
// const getFlat = (item) => {
//   if (item) getFlat(item);
// };

// getFlat(dd);

// function runFunc() {
//   console.log('1' + 1);
//   // 11
//   console.log('A' - 1);
//   // NaN
//   console.log(2 + '-2' + '2');
//   // 2-22
//   console.log('Hello' - 'World' + 78);
//   // NaN
//   console.log('Hello' + '78');
//   // Hello78
//   console.log(2 + 5 + '3');
//   // 73
// }
// runFunc();

// const dd = [3, 1, [2, 7], 6, [9, [10, 5], 28], 99, [36, 93], 59];

// function flattenArray(arr) {
//   let result = [];

//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   });

//   return result;
// }

// const flattenedArray = flattenArray(dd);
// console.log(flattenedArray);
