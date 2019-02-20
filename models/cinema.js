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

Cinema.prototype.findByGenre = function (genre) {
  foundFilms = [];
  for (const film of this.films) {
    if (film.genre === genre) {
      foundFilms.push(film);
    }
  }
  return foundFilms;
};

Cinema.prototype.findByYear = function (year) {
  const filmYear = this.films.filter(film => film.year === year);
  return filmYear;
};


module.exports = Cinema;
