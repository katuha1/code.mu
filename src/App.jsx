import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Задание 7

// function App() {
//   return <div>
//     <p class='text'>katya</p>
//     <p class='text1'>gr/p>
//   </div>;

// }

//Задание 8

// function App() {
//   return  <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//     <li>6</li>
//     <li>7</li>
//     <li>8</li>
//     <li>9</li>
//     <li>10</li>
//     </ul>;
// }

//Задание 9

// function App() {
//   return <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>;
// }

//Задание 10

// function App() {
//   return (
//     <>
//   <div>
//     <ul>
//     <li>text1</li>
//     <li>text2</li>
//     <li>text3</li>
//   </ul>
//   </div>
//   <div>
//     <ul>
//     <li>text1</li>
//     <li>text2</li>
//     <li>text3</li>
//   </ul>
//   </div>
//   </>
//   )
// }

//Задание 11

// function App() {
//   return <input />;
// }

//Задание 12

// function App() {
//   return (<>
//     <input />
//     <input />
//     <input />
//     </>)
// }

//Задание 13

// function App() {
//   const str1 = 'text1';
//   const str2 = 'text2';

//   return <div>
//     <p>{str1}</p>
//     <p>{str2}</p>
//   </div>;
// }

//Задание 14

// function App() {
//   const name = 'user';
//   const age  = '30';

//   return <div>
//     name: {name}
//     age:  {age}
//   </div>;
// }

//Задание 15

// function App() {
//   const arr = [1, 2, 3, 4, 5];

//   return <div>
//     <ul>
//       <li>{arr[0]}</li>
//       <li>{arr[1]}</li>
//       <li>{arr[2]}</li>
//       <li>{arr[3]}</li>
//       <li>{arr[4]}</li>
//     </ul>
//   </div>
// }

//Задание 16

// function App() {
//   const obj = { name: 'john', surname: 'smit' };

//   return <div>
//     <p>
//       name:<span>{obj.name}</span>,<br />
//       surname: <span>{obj.surname}</span>,
//     </p>
//   </div>;
// }

//Задание 17

// function App() {
//   const attr = 'block';

//   return <div id={attr}>
//     text
//   </div>;
// }

//Задание 19

// function App() {
//   const li1 = <li>text1</li>;
//   const li2 = <li>text2</li>;
//   const li3 = <li>text3</li>;

//   return (
//     <ul>
//       {li1}
//       {li2}
//       {li3}
//     </ul>
//   );
// }

//Задание 20

// function App() {
//   const items = (
//     <>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </>
//   );

//   return (
//     <ul>
//       {items}
//     </ul>
//   );
// }

//Задание 22

// function App() {
//   return <div>
//     <input /> <br />
//     <input /> <br />
//     <input />
//   </div>;
// }

//Задание 23.1

// function App() {
//   return <div>
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//       <li>4</li>
//       <li>5</li>
//       <li>6</li>
//       <li>7</li>
//       <li>8</li>
//       <li>9</li>
//       <li>10</li>
//     </ul>
//   </div>
// }

//Задание 23.2

// function App() {
//   return <table>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//       </tr>
//       <tr>
//         <td>4</td>
//         <td>5</td>
//         <td>6</td>
//       </tr>
//       <tr>
//         <td>7</td>
//         <td>8</td>
//         <td>9</td>
//       </tr>
//     </tbody>
//   </table>;
// }

//Задание 24.1

// result: 9

//Задание 24.2

// result: john smit

//Задание 24.3

// result: 2