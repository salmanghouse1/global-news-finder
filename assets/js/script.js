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
  console.log(country);
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
      console.log(data.articles.length);
      console.log(data);
      data.articles.forEach(function (element, index) {
        console.log(index);
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
    });
}
