
const api_key = 'e4c27c6869d8b4d332b852773e24f030'
const URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20190614' + ''


AllMovie = []

function makeDay () {
    let today = new Date();
    let dd = today.getDate()-1;
    let mm = today.getMonth()+1;
    const yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    } 
    if(mm<10) {
        mm='0'+mm
    }
    return yyyy+mm+dd;
}





getInfo = async (code) => {
    const movies = await fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=20124079'+code);
    const movieList  = await movies.json();
    const res = await movieList.movieInfoResult.movieInfo;
    return  res;
}

getMovie = async function(){
    const movies = await fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt='+makeDay());
    const movieList  = await movies.json();
    const res = await movieList.boxOfficeResult.dailyBoxOfficeList;
    return res;
}




getPoster = async function(name) {
    const movieDb = await fetch('https://api.themoviedb.org/3/search/movie?api_key=e74869b4f7d0e8c609e11e474ee85790&query='+name);
    const db  = await movieDb.json();
    const res = await db.results[0].poster_path;
    return res;
}

function makeResult() {
    getMovie()
    .then(function(movies) {
        movies.map(async function(movie) {
            const poster = await getPoster(movie.movieNm);
            const temp= { onemovie: {
                "movietitle": movie.movieNm,
                "rank": movie.rank,
                "movieaudience": movie.audiAcc,
                "movieopendate": movie.openDt,
                "movieimageurl": "https://image.tmdb.org/t/p/w500"+ poster,
            }}
            AllMovie.push(temp)
            
        })}
    )
    .then(function() {
        console.log(AllMovie);
    })
}

makeResult();


// https://image.tmdb.org/t/p/w500/pCW0CzvApVp7zy9M0u1TPa8AcEm.jpg 무비디비 이미지 예시

// e74869b4f7d0e8c609e11e474ee85790 무비 db key

// https://api.themoviedb.org/3/movie/550?api_key=e74869b4f7d0e8c609e11e474ee85790

// 요청 예시


// https://api.themoviedb.org/3/search/movie?api_key=e74869b4f7d0e8c609e11e474ee85790&query=%EC%B2%9C%EB%A1%9C%EC%97%AD%EC%A0%95:+%EC%B2%9C%EA%B5%AD%EC%9D%84+%EC%B0%BE%EC%95%84%EC%84%9C

// 서치 예시.


let myFirstPromise = new Promise(function (resolve, reject) {  
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
  });