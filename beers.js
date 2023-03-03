const URL = "https://api.punkapi.com/v2/beers";

window.onload = fetchBeers;

function fetchBeers() {
  fetch(URL)
    .then((res) => res.json())
    .then((beers) => {
      beers.forEach((beer) => {
        // Each beer are saved in local storage as an array.
        const savedBeers = JSON.parse(localStorage.getItem("savedBeers")) || [];
        // If the beer is not already saved, it is pushed to the array.
        if (!savedBeers.find((b) => b.name === beer.name)) {
          savedBeers.push(beer);
        }
        // The array is saved in local storage.
        localStorage.setItem("savedBeers", JSON.stringify(savedBeers));
      });

      const tr = beers.map(
        (beer) => `
          <tr>
          <td>${beer.name}</td>
          <td>${beer.tagline}</td>
          <td>${beer.abv}</td>
          <td>${beer.ibu}</td>
          <tr>`
      );
      const trString = tr.join("");
      document.getElementById("tbl1").innerHTML = trString;
    });
}

document.getElementById("abv-btn").onclick = showSpecificBeers;

function showSpecificBeers() {
  const inputABV = document.getElementById("filter-abv").value;
 // The array is fetched from local storage.
  const savedBeers = JSON.parse(localStorage.getItem("savedBeers"));

  // The array is filtered by the input value.
  const filteredbeers = savedBeers.filter((beer) => beer.abv > inputABV);
  const tr = filteredbeers.map(
    (beer) => `
        <tr>
        <td>${beer.name}</td>
        <td>${beer.tagline}</td>
        <td>${beer.abv}</td>
        <td>${beer.ibu}</td>
        <tr>`
  );
  const trString = tr.join("");
  document.getElementById("tbl1").innerHTML = trString;
}
