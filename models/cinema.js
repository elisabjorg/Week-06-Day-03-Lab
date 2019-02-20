const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.returnFilmTitles = function (films) {
  return films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.findByTitle = function (title) {
  foundFilms = [];

  for (const film of this.films) {
    if (film.title === title) {
      foundFilms.push(film);
    }
  }
  return foundFilms;
};

// Cinema.prototype.findByProperty = function (property, value) {
//   foundFilms = [];
//   for (const film of this.films) {
//     if (film.property === value) {
//       foundFilms.push(film);
//     }
//   }
//   return foundFilms;
// };

Cinema.prototype.findByProperty = function (property, value) {
  const foundFilm = this.films.filter(film => film[property] === value);
  return foundFilm;
};

Cinema.prototype.findByYear = function (year) {
  const filmYear = this.films.filter(film => film.year === year);
  return filmYear;
};

Cinema.prototype.findByLength = function (length) {
  const filmLength = this.films.filter(film => film.length > length);
  return filmLength;
};

Cinema.prototype.returnTotalLengths = function (films) {
  lengthArray = [];
  for (const film of this.films) {
    lengthArray.push(film.length);
  }
  const sumLengths = lengthArray.reduce(function (total, film) {
    return total += film;
  })
  return sumLengths;
};


module.exports = Cinema;
