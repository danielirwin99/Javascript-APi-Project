const moviesListEl = document.querySelector(" .landing__movies--container");

async function main() {
  const movies = await fetch(
    "https://www.omdbapi.com/?apikey=40109b33&s=action&page=1"
  );
  const moviesData = await movies.json();

  console.log(moviesData);

  moviesListEl.innerHTML = moviesData.Search.map((movieList) =>
    movieHTML(movieList)
  ).join("");
}

main();

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(Title);
}

function showMovies(Title) {
  localStorage.setItem("title", Title);
  window.location.href = `${window.location.origin}/user.html`;
}

function showMovieTitle(Title) {
  localStorage.setItem("Title", Title);
}

function movieHTML(movieList) {
  return `<div class="landing__movies--wrapper">
  <div class="landing__movies--description">
    <h3 class="landing__movies--title">${movieList.Title}</h3>
    <p class="landing__movies--year"> Year: ${movieList.Year}</p>
    <p class="landing__movies--imdbID">imdbID: ${movieList.imdbID}</p>
    <img class="landing__movies--img" src="${movieList.Poster}" alt="movie-photo" /> 
  </div>
</div>`;
}
