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

// getInfo = async function(code) {
//     const movies = await fetch(detailurl+code);
//     const movieList  = await movies.json();s
//     const res = await movieList.movieInfoResult.movieInfo;
//     return  res;
// }



// getMovie = async function(){
//     const movies = await fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt='+makeDay());
//     const movieList  = await movies.json();
//     const res = await movieList.boxOfficeResult.dailyBoxOfficeList;
//     return res;
// }





// getPoster = async function(name) {
//     const movieDb = await fetch('https://api.themoviedb.org/3/search/movie?api_key=e74869b4f7d0e8c609e11e474ee85790&query='+name);
//     const db  = await movieDb.json();
//     const res = await {
//         poster: db.results[0].poster_path,
//         rating: db.results[0].vote_average
//     }
//     return res;
// }

// function makeResult() {
//     getMovie()
//     .then(function(movies) {
//         movies.map(async function(movie) {
//             const posterRating = await getPoster(movie.movieNm);
//             const movierating = posterRating.rating;
//             const movieimageurl = posterRating.poster;
//             const detail = await getInfo(movie.movieCd);
//             const moviegenre = detail.genres[0].genreNm;
//             const moviedirector = detail.directors[0].peopleNm;
//             const temp= { onemovie: {
//                 "movietitle": movie.movieNm,
//                 "rank": movie.rank,
//                 "movieaudience": movie.audiAcc,
//                 "movieopendate": movie.openDt,
//                 "movieimageurl": "https://image.tmdb.org/t/p/w500"+ movieimageurl,
//                 "movierating": movierating,
//                 "moviegenre": moviegenre,
//                 "moviedirector": moviedirector,
//             }}
//             AllMovie.push(temp)
            
//         })}
//     )
//     .then(function() {
//         console.log(AllMovie);
//     })
// }