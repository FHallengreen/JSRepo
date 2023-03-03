document.getElementById("btn-get-all").onclick = getAllCars;

const URLCar = "https://cars-r-us2.azurewebsites.net/api/cars";
const URLMember = "https://cars-r-us2.azurewebsites.net/api/members/";

function getAllCars() {
  fetch(URLCar)
    .then((res) => res.json())
    .then((cars) => {
      const tr = cars.map(
        (car) => `
        <tr>
        <td>${car.car_id}</td>
        <td>${car.brand}</td>
        <td>${car.pricePrDay}</td>
        <td>${car.bestDiscount}</td>
        </tr>`
      );
      const tableRowsString = tr.join("");
      document.getElementById("tbody-cars").innerHTML = tableRowsString;
    });
}

const getBtn = document.getElementById("btn-find-member");
getBtn.onclick = findMember;

function findMember() {
  const id = document.getElementById("text-for-id").value;
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
      </tr>`;
      document.getElementById("tbody-member").innerHTML = tr;
    });
}

// return new Car(c.car_id, c.brand, c.model, c.pricePrDay, c.bestDiscount);

document.getElementById("btn-create-car").onclick = createCar;
function createCar() {
  const car = {
    brand: document.getElementById("input-brand").value,
    model: document.getElementById("input-model").value,
    pricePrDay: document.getElementById("input-priceprday").value,
    bestDiscount: document.getElementById("input-bestdiscount").value,
  };

  const returnMessage = document.getElementById("create-car-message");

  if (
    car.brand == "" ||
    car.model == "" ||
    car.pricePrDay == "" ||
    car.bestDiscount == ""
  ) {
    alert("Please fill out all fields!");
    return;
  }
  fetch(URLCar, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  })
    .then((res) => res.json())
    .then((car) => {
      console.log(car);
      returnMessage.textContent = "Car created successfully!";
      const tr = `
    <tr>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.pricePrDay}</td>
    <td>${car.bestDiscount}</td>
    </tr>`;
      document.getElementById("tbody-car").innerHTML = tr;
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong!");
    });
}

document.getElementById("btn-fetch-car").onclick = findCarByID;

function findCarByID() {
  const id = document.getElementById("text-for-id2").value;
  //Fetch and insert into table
  fetch(URLCar + "/" + id)
    .then((res) => res.json())
    .then((car) => {
      const tr = `
      <tr>
      <td id="update-brand" contenteditable="true">${car.brand}</td>
      <td id="update-model" contenteditable="true">${car.model}</td>
      <td id="update-price" contenteditable="true">${car.pricePrDay}</td>
      <td id="update-discount" contenteditable="true">${car.bestDiscount}</td>
      </tr>`;
      document.getElementById("tbody-car-fetched").innerHTML = tr;
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong!");
    });
}

document.getElementById("btn-update-car").onclick = updateCar;
const returnMessage = document.getElementById("update-car-message");

function updateCar() {
  const inputID = document.getElementById("text-for-id2").value;
  const car = {
    car_id: inputID,
    brand: document.getElementById("update-brand").textContent,
    model: document.getElementById("update-model").textContent,
    pricePrDay: document.getElementById("update-price").textContent,
    bestDiscount: document.getElementById("update-discount").textContent,
  };

  fetch(URLCar + "/" + inputID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  })
    .then((res) => res.json())
    .then((updatedCar) => {
      returnMessage.textContent = "Car updated successfully!";
      console.log("Car updated: ", car);
    })
    .catch((error) => alert("Error updating car: ", error));
}
