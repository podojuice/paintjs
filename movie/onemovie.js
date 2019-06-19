const URL =  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=430156241533f1d058c603178cc3ca0e&movieNm=";


oneMovie = []

oneMovie.push({ onemovie: {
    "movietitle": "",
    "rank": "",
    "movieaudience": "",
    "movieopendate": "",
    "movieimageurl": "",
    "movierating": "",
    "moviegenre": "",
    "moviedirector": "",
    "moviedescription":""
}})


getInfo = async function(code) {

    const movies = await fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd='+code);
    const movieList = await movies.json();
    const res = await movieList.movieInfoResult.movieInfo;
    return res;

}


getMovie = async function(moviename) {
    const movies = await fetch(URL+moviename);
    const JSON = await movies.json();
    return JSON;

}




getPoster = async function(name) {
    const movieDb = await fetch('https://api.themoviedb.org/3/search/movie?api_key=e74869b4f7d0e8c609e11e474ee85790&query='+name);
    const db = await movieDb.json();
    const res = await {
        poster: db.results[0].poster_path,
        rating: db.results[0].vote_average
    }
    return res;
}


getMovie("봉오동").then(async function(res){

    const movietitle=res.movieListResult.movieList[0].movieNm;
    const moviecode = res.movieListResult.movieList[0].movieCd;
    oneMovie[0].onemovie.movietitle = movietitle;

    const detail =await getInfo(moviecode);
    console.log(detail);
    oneMovie[0].onemovie.moviegenre = detail.genres[0].genreNm;
    oneMovie[0].onemovie.moviedirector = detail.directors[0].peopleNm;

    const posterRating = await getPoster(movietitle);
    oneMovie[0].onemovie.movierating = posterRating.rating;
    oneMovie[0].onemovie.movieimageurl = posterRating.poster;
    oneMovie[0].onemovie.movieopendate = posterRating.release_date;
    oneMovie[0].onemovie.moviedescription = posterRating.overview;
}).then(function() {
    console.log(oneMovie);
    return oneMovie;
});