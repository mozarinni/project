'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('How many movies have you watched?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('How many movies have you watched?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < this.count; i++) {
            const a = prompt('One of the last watched movies?', ''),
                b = prompt('How can you rate it?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                console.log('Error');
                --i;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('Very few movies');
        } else if (this.count < 30 && this.count > 10) {
            console.log('Not bad');
        } else if (this.count > 30) {
            console.log('Awesome');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        let genres = prompt('Enter your favourite genres separated with comma').toLowerCase;
        while (genres == null || genres == '') {
            genres = prompt('Enter your favourite genres separated with comma');
        }
        this.genres = genres.split(', ');
        this.genres.sort();
        this.genres.forEach((element, index) => {
            console.log('a[' + index + 1 + '] = ' + element);
        });
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    }
};
