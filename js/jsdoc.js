// @ts-check

/**
 * @param {string} name
 * @param {number} age
 * @returns 이름과 나이를 받아서 문자열로 출력
 * @deprecated
 */
function hello(name, age) {
  return `내 이름은 ${name}이고 나이는 ${age} 입니다.`;
}

console.log(hello('bay', 24));

/**
 * @todo 내일 새로운 매개변수 추가 해야함 due to 10:30 ..
 */

/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post} */
const post = {
  id: 1,
  title: 'title',
  content: 'content',
};

console.log(post.id);
