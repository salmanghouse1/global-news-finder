//Testing api calls

let country = {};

function appendInfo(info) {

    $(".main").find("h2").html(info.officialName + " (" + info.commonName + ")");
    $(".main").find("ul").html(
        `<li>Currency: ` + country.currency + `</li><li>Language: ` + country.primaryLanguage + `</li><li>Capital: ` + country.capital + `</li><li>Population: ` + country.population + `</li>`
    );
    $("#flag").attr({src:country.flag, width:100});
    $("#coatOfArms").attr({src:country.coatOfArms, width:100});

}


function getRestAPI(countryName) {

    rest_api = "https://restcountries.com/v3.1/name/" + countryName;

    apiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

    
    fetch(rest_api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)

            var currencyObject = data[0].currencies;
            var currency = Object.keys(currencyObject);

            var languageObject = data[0].languages;
            var language = Object.keys(languageObject);

            country = {
                "officialName": data[0].name.official,
                "commonName": data[0].name.common,
                "currency": data[0].currencies[currency[0]].name + " (" + data[0].currencies[currency[0]].symbol + " " + currency[0] + ")",
                "primaryLanguage": data[0].languages[language[0]],
                "secondaryLanguage": data[0].languages[language[1]],
                "capital": data[0].capital[0],
                "population": data[0].population,
                "flag": data[0].flags.png,
                "coatOfArms": data[0].coatOfArms.png
            }

            appendInfo(country);

        })
        .catch(err => console.error(err));

};

getRestAPI("China");