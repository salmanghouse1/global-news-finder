//Testing api calls

let country = {};
function getRestAPI(countryName) {

    rest_api = "https://restcountries.com/v3.1/name/" + countryName;

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

            country = {
                "cname": data[0].name.official,
                "currency": data[0].currencies[currency[0]].name + " (" + data[0].currencies[currency[0]].symbol + currency[0] + ")",
                "primaryLanguage": data[0].languages[language[0]],
                "secondaryLanguage": data[0].languages[language[1]],
                "capital": data[0].capital[0],
                "population": data[0].population,
                "flag": data[0].flags.png,
                "coatofarms": data[0].coatOfArms.png
            }

            console.log(country)

        })
        .catch(err => console.error(err));

    
};

getRestAPI("Canada");