document.getElementById("btn-get-all").onclick = getAllCars;

const URLCar = "https://cars-r-us2.azurewebsites.net/api/cars/";
const URLMember = "https://cars-r-us2.azurewebsites.net/api/members/";

function getAllCars() {
  fetch(URLCar.slice(0,URLCar.length-1))
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

const getBtn = document.getElementById("btn-find-member")
getBtn.onclick = findMember

function findMember(){
  const id = document.getElementById("text-for-id").value
  //Fetch and insert into table
  fetch(URLMember + id)
    .then((res) => res.json())
    .then((member) => {
      const tr = `
      <tr>
      <td>${member.username}</td>
      <td>${member.email}</td>
      <td>${member.firstName}</td>
      <td>${member.lastName}</td>
      </tr>`
      document.getElementById("tbody-member").innerHTML = tr;
    });

}

// return new Car(c.car_id, c.brand, c.model, c.pricePrDay, c.bestDiscount);

 document.getElementById("btn-create-car").onclick = createCar;
function createCar(){
  const car = {
    brand: document.getElementById("input-brand").value,
    model: document.getElementById("input-model").value,
    pricePrDay: document.getElementById("input-priceprday").value,
    bestDiscount: document.getElementById("input-bestdiscount").value
  }

  const returnMessage = document.getElementById("create-car-message");

  if (car.brand == "" || car.model == "" || car.pricePrDay == "" || car.bestDiscount == "") {
    alert("Please fill out all fields!");
    return;
  }
  fetch(URLCar, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  })
  .then(res => res.json())
  .then(car => {
    console.log(car);
    returnMessage.textContent = "Car created successfully!";
    const tr = `
    <tr>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.pricePrDay}</td>
    <td>${car.bestDiscount}</td>
    </tr>`
    document.getElementById("tbody-car").innerHTML = tr;
  })
  .catch(err => {
    console.log(err);
    alert("Something went wrong!");
  });
}

document.getElementById("btn-fetch-car").onclick = findCarByID

function findCarByID(){
  const id = document.getElementById("text-for-id2").value
  //Fetch and insert into table
  fetch(URLCar + id)
    .then((res) => res.json())
    .then((car) => {
      const tr = `
      <tr>
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.pricePrDay}</td>
      <td>${car.bestDiscount}</td>
      </tr>`
      document.getElementById("tbody-car-fetched").innerHTML = tr;
    });

}

