// operator if else


// if(num < 100){
//     console.log('error')
// } else {
//     console.log('true')
// }

// ternarnoy operator

// (num === 50) ? console.log('ok') : console.log('error');
// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         console.log('Neverno');
//         break; 
//     case 50:
//         console.log('V tochku');
//         break;   
//     default:
//         console.log('Neverno');
//         break;        
// }

/////////////////// Sikl///////////////////

// let num = 40;

// while (num =< 55) {
//     console.log(num);
//     num++;
    
// }

///////////////////////////////////////

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

///////// sikl For ////////////

// for (let i = 1; i <= 10; i++) {
//     if(i === 6) {
//         //break         // do 6    
//         continue;       // do 10 no krome 6
//     }
//     console.log(i);
// }

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // oprosnik

const personalMovieDB = {     //  peremenaya dlya zbra info
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
