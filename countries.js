document.getElementById("svg2").onclick = getDetails;

const url = "https://countries.plaul.dk/api/countries/";

function getDetails(evt) {
  const target = evt.target;
  const id = target.id;

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

    
    });
}
/* 
<p><img id="flag" src="#" alt="flag" /></p>

<p>Country: <span id="name"></span></p>

<p>Member of UN: <span id="un-member"></span></p>

<p>Currencies: <span id="currencies"></span></p>

<p>Capital: <span id="capital"></span></p>

<p>Borders: <span id="borders"></span></p> */
