// -----------------------Daniel's Section-----------------------
//^ Select Dropdown
const select = document.querySelector("select");
// console.log(select);
select.innerHTML = `
<option>Select Country</option>
<option value="au">&#127462;&#127482; Australia</option>
<option value="fr">&#127467;&#127479; France</option>
<option value="in">&#127470;&#127475; India</option>
<option value="ru">&#127479;&#127482; Russia</option>
<option value="gb">&#127468;&#127463; United Kingdom</option>
<option value="us">&#127482;&#127480; USA</option>
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
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {


            data.articles.forEach(function(element, index) {
                if (index <= 9) {
                    //* Create elements
                    const img = document.createElement("img");
                    const title = document.createElement("h1");
                    const author = document.createElement("p");
                    const description = document.createElement("p");
                    //* Add data
                    output += `
                    
          <a style='display:block' href="${element.url}" target=_blank>${element.source.name}
            <div class="news border-t-4">
                <img src="${element.urlToImage}" style="float:left;display:inline;width: 100px; margin-left: 12px; margin-right: 12px" class='ml-1 mt-2' alt="No Image Available" height=100px width=100px />
                <h2 class='sm:text-2xl md:text-1xl' style=''>${element.title}</h2>
                <p style='color:green'>${element.author}</p>
                <p style="text-decoration:underline">${element.description}</p>
                </div>
            </a>
                `;

                    //* Append to div

                    // added slide down animation
                    $('article').slideDown(700, function() {
                        newsSection.innerHTML = output;

                    });


                }
            });
            getRestAPI(country);
        });
}

// -----------------------Ethan's Section-----------------------
let maincountry = {};

function appendInfo(info) {
    $("#main").find("h2").html(info.commonName);
    $("#main")
        .find("#change")
        .html(
            `<li>` +
            maincountry.currency +
            `</li><li>` +
            maincountry.primaryLanguage +
            `</li><li>` +
            maincountry.capital +
            `</li><li>` +
            maincountry.population +
            `</li>`
        );
    $("#flagCoat").find("#flag").attr({ src: maincountry.flag, width: 50 });
    $("#flagCoat")
        .find("#coatOfArms")
        .attr({ src: maincountry.coatOfArms, width: 50 });
}

function getRestAPI(countryName) {
    rest_api = "https://restcountries.com/v3.1/alpha/" + countryName;

    apiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

    fetch(rest_api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var currencyObject = data[0].currencies;
            var currency = Object.keys(currencyObject);

            var languageObject = data[0].languages;
            var language = Object.keys(languageObject);

            // Start open layers code


            document.getElementById('map').innerHTML = "";

            console.log(data);
            var map = new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([data[0].latlng[1], data[0].latlng[0]]),
                    zoom: 4
                })
            });

            //End open layers code 




            maincountry = {
                commonName: data[0].name.common,
                currency: data[0].currencies[currency[0]].name +
                    " (" +
                    data[0].currencies[currency[0]].symbol +
                    " " +
                    currency[0] +
                    ")",
                primaryLanguage: data[0].languages[language[0]],
                secondaryLanguage: data[0].languages[language[1]],
                capital: data[0].capital[0],
                population: data[0].population,
                flag: data[0].flags.png,
                coatOfArms: data[0].coatOfArms.png,
            };

            appendInfo(maincountry);
        })
        .catch((err) => console.error(err));
}

//--------------------- Shayne's Section-------------------

// Start open layers code



//End open layers code 


// function initAutocomplete() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -33.8688, lng: 151.2195 },
//         zoom: 13,
//         mapTypeId: "roadmap",
//     });
//     // Create the search box and link it to the UI element.
//     const input = document.getElementById("pac-input");
//     const searchBox = new google.maps.places.SearchBox(input || select.value);

//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(
//         input || select.value
//     );
//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener("bounds_changed", () => {
//         searchBox.setBounds(map.getBounds());
//     });

//     let markers = [];

//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener("places_changed", () => {
//         const places = searchBox.getPlaces();

//         if (places.length == 0) {
//             return;
//         }

//         // Clear out the old markers.
//         markers.forEach((marker) => {
//             marker.setMap(null);
//         });
//         markers = [];

//         // For each place, get the icon, name and location.
//         const bounds = new google.maps.LatLngBounds();

//         places.forEach((place) => {
//             if (!place.geometry || !place.geometry.location) {
//                 console.log("Returned place contains no geometry");
//                 return;
//             }

//             const icon = {
//                 url: place.icon,
//                 size: new google.maps.Size(71, 71),
//                 origin: new google.maps.Point(0, 0),
//                 anchor: new google.maps.Point(17, 34),
//                 scaledSize: new google.maps.Size(25, 25),
//             };

//             // Create a marker for each place.
//             markers.push(
//                 new google.maps.Marker({
//                     map,
//                     icon,
//                     title: place.name,
//                     position: place.geometry.location,
//                 })
//             );
//             if (place.geometry.viewport) {
//                 // Only geocodes have viewport.
//                 bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);
//     });
// }