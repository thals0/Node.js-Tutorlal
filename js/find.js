// @ts-check

const arr = [10, 20, 30, 40, 50];

const result = arr.find(function (element) {
  // 20이 여러개여도 처음꺼 찾고 끝냄
  // 여러개 찾고 싶으면 filter라는 method 사용해야함
  return element === 20;
});

console.log(result);
