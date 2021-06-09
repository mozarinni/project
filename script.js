'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

function rememberMyFilms(numberOfFilms) {
    for (let i = 0; i < numberOfFilms; i++) {
        const a = prompt('One of the last watched movies?', ''),
            b = prompt('How can you rate it?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('Error');
            --i;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Very few movies');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
        console.log('Not bad');
    } else if (personalMovieDB.count > 30) {
        console.log('Awesome');
    } else {
        console.log('Error');
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) console.log(personalMovieDB);
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`What is your favourite movie genre ${i+1}`, '');
    }
}

start();

rememberMyFilms(numberOfFilms);

detectPersonalLevel();

writeYourGenres();

showMyDB();