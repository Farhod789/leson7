const numberofFilms = +prompt('Skolko filmov vi uje smotreli');

conslog.log('numberofFilms');

const personalMovieBD = {
    count: numberofFilms,
    movies: {lastFilms, markFilms},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Posledniy film', ''),
      b = prompt('Otsenite film', ''),
      c = prompt('Posledniy film', ''),
      d = prompt('Otsenite film', '');

personalMovieBD.movies[a] = b;      
personalMovieBD.movies[c] = d;   

console.log(personalMovieBD)

