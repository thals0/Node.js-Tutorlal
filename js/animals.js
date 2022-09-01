// @ts-check

// CommonJS 방식
// const animals = ['dog', 'cat'];

// function showAnimals() {
//   animals.map((el) => console.log(el));
// }

// 위와 동일한 코드
// function showAnimals() {
//   animals.map(function (el) {
//     return console.log(el);
//   });
// }

// module.exports = {
//   animals,
//   showAnimals,
// };

// ES6 방식
// const animals = ['dog', 'cat'];
// function showAnimals() {
//   animals.map((el) => console.log(el));
// }
// export { animals as ani, showAnimals as show };

// 실습, 모듈 사용!
// const human = ['철수', '영희'];
// function showName() {
//   human.map((el) => console.log(el));
// }

// module.exports = {
//   human,
//   showName,
// };

// "type": "module",

// const student = ['세호', '재석'];
// function showStudent() {
//   student.map((el) => console.log(el));
// }
// export { student as stu, showStudent as show };

// export default class Animal {
//   constructor() {
//     this.animals = ['dog', 'cat'];
//   }
//   showAnimals() {
//     this.animals.map((el) => console.log(el));
//   }
// }
