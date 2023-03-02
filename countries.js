document.getElementById("svg2").onclick = getDetails;

const url = "https://countries.plaul.dk/api/countries/";

function getDetails(evt) {
  const target = evt.target;
  const id = target.id;

// Get the previously selected element, if any exists
const prevSelected = document.querySelector(".selected");

if (prevSelected) {
  // Remove the selected class
  prevSelected.classList.remove("selected");

  // Set the fill color to the default color of the SVG image
  prevSelected.style.fill = "#dcdcdc";
}

// Set the new element to selected
const selected = document.getElementById(id);
selected.style.fill = "#3366bb";
selected.classList.add("selected");

/* The classList property is a read-only property that returns a 
live DOMTokenList collection of the class attributes of the element. 
It allows you to add, remove, and toggle classes on an element in the DOM without 
having to manipulate the className property directly. */

  fetch(url + id)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("name").innerText = data.name.common;
      document.getElementById("flag").src = data.flag;
      document.getElementById("un-member").innerText = data.unMember;
      if (data.unMember == true) {
        document.getElementById("un-member").innerText = "Yes";
      } else {
        document.getElementById("un-member").innerText = "No";
      }
      const currencies = data.currencies;

      let html = "";

      for (const currencyCode in currencies) {
        const currency = currencies[currencyCode];
        // display only the symbol property
        const currencyHtml = `${currencyCode} ${currency.symbol}`;
        html += currencyHtml;
      }
      document.getElementById("currencies").innerHTML = html;
      document.getElementById("capital").innerText = data.capital;
      document.getElementById("borders").innerText = data.borders;
    });
}
