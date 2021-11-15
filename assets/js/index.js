// function tareas(materia, callback) {
//   console.log("Iniciando mi tare de" + materia);
//   callback();
// }

// console.log("libro de Descanso");

// tareas("Matematica", final);

// function final() {
//   console.log("Finalizando mi tarea.");
// }

// setTimeout(() => {
//   console.log("despues de 2 segundos");
// }, 2000);

// setTimeout(() => {
//   console.log("despues de 3 segundos");
// }, 3000);

// setTimeout(() => {
//   console.log("despues de 1 segundo");
// }, 1000);

// function getUserData(id, callback) {
//   setTimeout(() => {
//     let data = {};
//     if (id === 1) {
//       data = {
//         id: 2356256,
//         name: "Juan",
//         lastName: "Duran",
//         age: 35,
//       };
//     }
//     if (id === 2) {
//       data = {
//         id: 27564512,
//         name: "Manuel",
//         lastName: "Perez",
//         age: 31,
//       };
//     }
//     callback(data);
//   }, 1000);
// }
// getUserData(1, (user) => console.log(user));
// getUserData(2, (user) => console.log(user));

// const randomNumber = (min, max) => {
//   return parseInt(Math.random() * (max - min) + min);
// };

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, randomNumber(500, 20000));
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, randomNumber(500, 20000));
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, randomNumber(500, 20000));
// });

// Promise.race([promise1, promise2, promise3]).then((response) => {
//   console.log(response);
// });

// const randomNumber = (min, max) => {
//   return parseInt(Math.random() * (max - min) + min);
// };
// const suma = (num1, num2) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let sumaNum = "La Suma es" + (num1 + num2);
//       resolve(sumaNum);
//     }, randomNumber(500, 20000));
//   });

// const resta = (num1, num2) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let restaNum = "la resta es " + (num1 - num2);
//       resolve(restaNum);
//     }, randomNumber(500, 20000));
//   });

// const multiplicacion = (num1, num2) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let multiplicacionaNum = "la multiplicacion es " + num1 * num2;
//       resolve(multiplicacionaNum);
//     }, randomNumber(500, 20000));
//   });

// Promise.race([suma(5, 3), resta(5, 2), multiplicacion(5, 2)]).then(
//   (response) => {
//     console.log(response);
//   }
// );
