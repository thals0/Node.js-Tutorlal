// @ts-check

const http = require('http');

/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 1,
    title: '첫번째 블로그 글',
    content: '첫번째 내용입니다',
  },
  {
    id: 2,
    title: '두번째 블로그 글',
    content: '두번째 내용입니다',
  },
  {
    id: 3,
    title: '세번째 블로그 글',
    content: '세번째 내용입니다',
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url);
  // req.url이 존재하면 req.url.split('/'), 존재하지 않으면 빈배열 선언
  const urlArr = req.url ? req.url.split('/') : [];
  let id = -1;
  // response header 설정
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
    // [, , id] = urlArr;
    // id = urlArr[2];
  }
  // console.log(id, typeof id);
  // console.log(urlArr);
  // console.log(urlArr[2]);

  /**
   * GET  /posts         목록 가져오기
   * GET  /posts/:id     특정 글 내용 가져오기
   * POST /posts        새로운 글 올리기
   * PUT  /posts/:id     특정 글 내용 수정하기
   * DELETE /posts/:id  특정 글 삭제하기
   */
  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      // posts: posts,
      // 전체 글 수 return
      totalCount: posts.length,
    };
    res.statusCode = 200;
    // JSON 형태로 읽을 수 있는 문자열로 바꿔서 전달해줌
    res.end(JSON.stringify(result));
    console.log('블로그의 글 목록을 가져오는 API 입니다.');
  } else if (id !== -1 && req.method === 'GET') {
    const result = posts.find((post) => post.id === id);
    if (result) {
      res.statusCode = 200;
      res.end(JSON.stringify(result));
      console.log('블로그의 특정 글 내용을 보여줄 API 입니다');
      console.log(`Post ID 값은 ${id} 입니다`);
    } else {
      res.statusCode = 404;
      res.end('포스트를 찾을 수 없습니다.');
      console.log('포스트를 찾을 수 없습니다.');
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      // posts.push(newPost);
      posts.push({
        id: posts[posts.length - 1].id + 1,
        title: newPost.title,
        content: newPost.content,
      });
    });
    res.statusCode = 200;
    res.end('새로운 글이 등록 되었습니다.');
    console.log('블로그의 새로운 글을 올릴 때 호출할 API 입니다');
  } else if (id !== -1 && req.method === 'PUT') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      // const result = posts.find((post) => post.id === id);
      // console.log(result.id);
      const updatePost = JSON.parse(data);
      updatePost.id = id;
      // index num = id - 1
      posts[id - 1] = updatePost;
      // result.title = updatePost.title;
      // result.content = updatePost.content;
    });
    res.statusCode = 200;
    res.end(`수정 된 포스트의 id는 ${id}번 입니다.`);
    console.log('블로그의 글을 수정 때 호출할 API 입니다');
  } else if (id !== -1 && req.method === 'DELETE') {
    // index id-1인 값 하나만 지워
    posts.splice(id - 1, 1);
    res.statusCode = 200;
    res.end(`id ${id}번인 포스트를 삭제 했습니다`);
    console.log('블로그의 글을 삭제 때 호출할 API 입니다');
  } else {
    res.statusCode = 400;
    res.end('Not Found');
    console.log('해당 API를 찾을 수 없습니다.');
  }

  // 서버가 정상일 때 200이라는 코드를 내보냄
  // res.statusCode = 200;
  // res.end('hello, back-end');
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}번 포트에서 작동 중입니다.`);
});
