
movieurl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt='+makeDay();
detailurl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=';
moviedburl = 'https://api.themoviedb.org/3/search/movie?api_key=e74869b4f7d0e8c609e11e474ee85790&query=';

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
for(let i=0; i<10; i++) {
    AllMovie.push({ onemovie: {
        "movietitle": "",
        "rank": "",
        "movieaudience": "",
        "movieopendate": "",
        "movieimageurl": "",
        "movierating": "",
        "moviegenre": "",
        "moviedirector": "",
    }})
}



const useAPI = function(url) {
    return new Promise(function (resolve, reject) {
        response = fetch(url);
        if (response != null) {
            resolve(response);
        }
        else {
            reject(Error("실패!!"));
        }
		
    })
}


useAPI(movieurl)
.then(function(val) { return val.json(); })
.then(function(val) { return val.boxOfficeResult.dailyBoxOfficeList})
.then(function(array) {
    for(let i=0; i<10; i++) {
        movie = array[i];
        AllMovie[i].onemovie.movietitle = movie.movieNm;
        AllMovie[i].onemovie.rank = movie.rank;
        AllMovie[i].onemovie.movieopendate = movie.openDt;
        AllMovie[i].onemovie.movieaudience = movie.audiAcc;
        useAPI(moviedburl+movie.movieNm)
        .then(function(val) { return val.json() })
        .then(function(val) {
            AllMovie[i].onemovie.movieimageurl= "https://image.tmdb.org/t/p/w500"+val.results[0].poster_path
            AllMovie[i].onemovie.movierating = val.results[0].vote_average
            })
        useAPI(detailurl+movie.movieCd)
        .then(function(val) {return val.json()})
        .then(function(val) {
            AllMovie[i].onemovie.moviedirector = val.movieInfoResult.movieInfo.genres[0].genreNm;
            AllMovie[i].onemovie.moviegenre = val.movieInfoResult.movieInfo.directors[0].peopleNm;
        })

        
    }
})
.then(function() {
    console.log(AllMovie);
    return AllMovie;
})



