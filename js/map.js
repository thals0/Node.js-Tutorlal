// @ts-check
const arr = [10, 20, 30, 40, 50];

arr.map(function (element, index) {
  console.log(index + '번 값은' + element);
});

// 화살표 함수
arr.map((element, index) => {
  console.log(index + '번 값은' + element);
});
