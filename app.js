

async function main() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=40109b33&s=action");
  const moviesData = await movies.json();
  console.log(moviesData);
}
main();
