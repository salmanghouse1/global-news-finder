// `HTTP/1.1 426 Upgrade Required
// Upgrade: HTTP/3
// Connection: Upgrade`;

// To everyone out there who is getting the 426 error (upgrade required), make sure you’re using localhost instead of 127.0.0.1. in case you’re using live server extension, you can easily replace it by changing it in this extensions setting in VS Code.
// In VS Code > Files > Preferences > Extensions > Live Server > Click on the setting’s icon > Extension Settings > Live Server › Settings: Host (replace 127.0.0.1 with localhost).
console.log(`CHANGE1`);
//^ Select Dropdown
const select = document.querySelector("select");
// console.log(select);
select.innerHTML = `
<option value="ae">United arab emirates</option>
<option value="ar">Argentina</option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
`;
const option = document.querySelector("option");
console.log(option.value);
console.log(option.textContent);

//^ Country char codes

// ae = United arab emirates
// ar = Argentina
// at = Austria
// au = Australia
// be = Belgium
// bg = Bulgaria
// br = Brazil
// ca = Canada
// ch = Switzerland
// cn = China
// co = Colombia
// cu = Cuba
// cz = Czechia
// de = Germany
// eg = Egypt
// fr = France
// gb = United Kingdom of Great Britain and Northern Ireland
// gr = Greece
// hk = Hong Kong
// hu = Hungary
// id = Indonesia
// ie = Ireland
// il = Israel
// in = India
// it = Italy
// jp = Japan
// kr = Korea (the Republic of)
// lt = Lithuania
// lv = Libya
// ma = Morocco
// mx = Mexico
// my = Malaysia
// ng = Nigeria
// nl = Netherlands
// no = Norway
// nz = New Zealand
// ph = Phillippines
// pl = Poland
// pt = Portugal
// ro = Romania
// rs = Serbia
// ru = Russia
// sa = Saudi Arabia
// se = Sweden
// sg = Singapore
// si = Slovenia
// sk = Slovakia
// th = Thailand
// tr = Turkey
// tw = Taiwan
// ua = Ukraine
// us = United States of America
// ve = Venezuela
// za = South Africa

//^ Problems
//! There are some articles that don't have authors, they return the text content "null"
//! Some articles also don't have images, they will return "No Image Available" since I put that as the alt tag

//todo: Countries need be able to be selected through the selector

//^Link for country char codes
// https://newsapi.org/docs/endpoints/top-headlines

//^ NewsApi
const apiKey = `a17e8324af594038bb9255cf3207fbb7`;

//* country=us needs to be changed to match the input, each country name can only be specified with 2 characters, for example canada = ca, russia = ru

//* The language is set to default which will set it to the language of the country you clicked on if its available otherwise it will be in english and that will only work if english is avaialable
//& Should we change this to only english?

//^ Making select work
let country = "";
function doSomething() {
  country = select.value;
  console.log(country);
}

// //todo Remember to open this up using live server
const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;

// //^ Variables
const newsSection = document.querySelector(".news-section");

// let options = {
//   method: `GET`,
// };

let output = "";

// //^ Fetching
fetch(newsUrl)
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    data.articles.forEach(function (element) {
      //* Create elements
      const img = document.createElement("img");
      const title = document.createElement("h1");
      const author = document.createElement("p");
      const description = document.createElement("p");
      //* Add data
      output += `
        <div class="news">
            <img src="${element.urlToImage}" alt="No Image Available" height=100px width=100px />
            <h2>${element.title}</h2>
            <p>${element.author}</p>
            <p>${element.description}</p>
            <a href="${element.url}" target=_blank>${element.source.name}</a>
        </div>
        `;

      //* Append to div
      newsSection.innerHTML = output;
    });
  });
