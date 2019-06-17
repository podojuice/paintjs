// const client_id = 'Z0wQ0QZTPG8N48RpQbK7'
// const client_secret = 'H83PcF7bBg'
// let naver_url = 'https://openapi.naver.com/v1/search/movie.json?query=' + 'movie_title'

const string = '맨 인 블랙'
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string)

// getInfo = async () => {
//     const httpRequest = new XMLHttpRequest();
//     await httpRequest.open("GET", "https://openapi.naver.com/v1/search/movie.json?query="+"기생충", true);
//     await httpRequest.setRequestHeader("client_id", client_id);
//     await httpRequest.setRequestHeader("client_secret", client_secret);
//     await httpRequest.send(null);
//     return httpRequest.abort()
// }


// console.log(getInfo());



// const request = new XMLHttpRequest();
// const url = 'http://naver.com'; // 긁어오고 싶은 주소를 넣는다. 예제는 네이버

// request.open('GET', url, true);
// request.onload = function () {
//   console.log(request.responseText); // 긁어온 내용 뿌리기
// };
// request.send();