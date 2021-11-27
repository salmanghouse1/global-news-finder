//^ Problems
//! There are some articles that don't have authors, they return the text content "null"
//! Some articles also don't have images, they will return "No Image Available" since I put that as the alt tag

//todo: Countries need be able to be selected through the selector

//^Link for country char codes
// https://newsapi.org/docs/endpoints/top-headlines

//^ NewsApi
const apiKey = `a17e8324af594038bb9255cf3207fbb7`;

//* country=us needs to be changed to match the input, each country name can only be specified with 2 characters, for example canada = ca, russia = ru

//* The language is set to default which will set it to the language of the country you clicked on if its available otherwise it will be in english
//& Should we change this to only english?

const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;

//^ Variables
const newsSection = document.querySelector(".news-section");

let output = "";

//^ Fetching
fetch(newsUrl)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    data.articles.forEach(function (element) {
      //* Create elements
      const img = document.createElement("img");
      const title = document.createElement("h1");
      const author = document.createElement("p");
      const description = document.createElement("p");
      //* Add data
      output += `
        <div class="news-section">
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
