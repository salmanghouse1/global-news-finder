// -----------------------Daniel's Section-----------------------

//^ Select Dropdown
const select = document.querySelector("select");
// console.log(select);
select.innerHTML = `
<option>Select Country</option>
<option value="au">Australia</option>
<option value="fr">France</option>
<option value="in">India</option>
<option value="ru">Russia</option>
<option value="gb">United Kingdom</option>
<option value="us">United States of America</option>
`;

//^ Making select work
let country = "";
function selectCountry() {
  country = select.value;
  return countryNews(country);
}

function countryNews(country) {
  const newsUrl = `https://saurav.tech/NewsAPI//top-headlines/category/general/${country}.json`;

  // //^ Variables
  const newsSection = document.querySelector(".news-section");

  let output = "";

  // //^ Fetching
  fetch(newsUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      data.articles.forEach(function (element, index) {
        if (index <= 9) {
          //* Create elements
          const img = document.createElement("img");
          const title = document.createElement("h1");
          const author = document.createElement("p");
          const description = document.createElement("p");
          //* Add data
          output += `
          <a href="${element.url}" target=_blank>${element.source.name}
            <div class="news">
                <img src="${element.urlToImage}" alt="No Image Available" height=100px width=100px />
                <h2>${element.title}</h2>
                <p>${element.author}</p>
                <p>${element.description}</p>
                </div>
            </a>
                `;

          //* Append to div
          newsSection.innerHTML = output;
        }
      });
    getRestAPI(country);
    });
}


// -----------------------Ethan's Section-----------------------
let maincountry = {};

function appendInfo(info) {

    $("#main").find("h2").html(info.commonName);
    $("#main").find("#change").html(
        `<li>` + maincountry.currency + `</li><li>` + maincountry.primaryLanguage + `</li><li>` + maincountry.capital + `</li><li>` + maincountry.population + `</li>`
    );
    $("#flagCoat").find("#flag").attr({src:maincountry.flag, width:50});
    $("#flagCoat").find("#coatOfArms").attr({src:maincountry.coatOfArms, width:50});

}


function getRestAPI(countryName) {

    rest_api = "https://restcountries.com/v3.1/alpha/" + countryName;

    apiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

    
    fetch(rest_api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var currencyObject = data[0].currencies;
            var currency = Object.keys(currencyObject);

            var languageObject = data[0].languages;
            var language = Object.keys(languageObject);

            maincountry = {
                "commonName": data[0].name.common,
                "currency": data[0].currencies[currency[0]].name + " (" + data[0].currencies[currency[0]].symbol + " " + currency[0] + ")",
                "primaryLanguage": data[0].languages[language[0]],
                "secondaryLanguage": data[0].languages[language[1]],
                "capital": data[0].capital[0],
                "population": data[0].population,
                "flag": data[0].flags.png,
                "coatOfArms": data[0].coatOfArms.png
            }

            appendInfo(maincountry);

        })
        .catch(err => console.error(err));

};


