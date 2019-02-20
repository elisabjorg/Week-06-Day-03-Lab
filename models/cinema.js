const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.returnFilmTitles = function (films) {
  return films.map((film) => {
    return film.title;
  });
};

module.exports = Cinema;
