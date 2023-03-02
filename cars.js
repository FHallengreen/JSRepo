document.getElementById("btn-get-all").onclick = getAllCars;

const URL = "https://cars-r-us2.azurewebsites.net/api/cars";

function getAllCars() {
  fetch(URL)
    .then((res) => res.json())
    .then((cars) => {
        const tr = cars.map(car => `
        <tr>
        <td>${car.car_id}</td>
        <td>${car.brand}</td>
        <td>${car.pricePrDay}</td>
        </tr>`)
        const tableRowsString = tr.join("")
        document.getElementById("tbody-cars").innerHTML = tableRowsString;
      });
}
