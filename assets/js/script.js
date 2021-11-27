// Base URL: https://gnews.io/docs/v4#introduction

// Seems like news apis don't take requests from front end web apps

//^ Gnews
// const apiKey = "103da2a3151236f2c411a030592388f8";

// const newsUrl = `https://gnews.io/api/v4/search/top-headlines?token=${apiKey}`;

//^ NewsApi
const apiKey = `a17e8324af594038bb9255cf3207fbb7`;

const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;

//^ Ignore
// Want
// data.article[0].author
// data.article[0].description
// data.article[0].source
// data.article[0].title
// data.article[0].url
// data.article[0].urlToImage

// Maybe
// data.article[0].content
// data.article[0].
// data.article[0].

/* <div class="news-section">
<img class="JS--image" src="" />
<h2 class="JS--header">Title</h2>
<p class="JS--author">Author</p>
<p class="JS--description">Excerpt</p>
</div> */

//^ Variables
const newsSection = document.querySelector(".news-section");
// const img = document.querySelectorAll(".JS--image");
// const title = document.querySelectorAll(".JS--header");
// const author = document.querySelectorAll(".JS--author");
// const description = document.querySelectorAll(".JS--description");

//^ Making sure variables are selected
console.log(newsSection);
// console.log(img);
// console.log(title);
// console.log(author);
// console.log(description);
let output = "";
//^ Fetching
fetch(newsUrl)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    //^ Working files
    // img.setAttribute("src", data.articles[0].urlToImage);
    // title.textContent = data.articles[0].title;
    // author.textContent = data.articles[0].author;
    // description.textContent = data.articles[0].description;
    //^ Working files for loop and using just querySelector
    //   img.setAttribute("src", element.urlToImage);
    //   title.textContent = element.title;
    //   author.textContent = element.author;
    //   description.textContent = element.description;
    //^ Loop through all 10
    data.articles.forEach(function (element) {
      //   const img = document.querySelectorAll(".JS--image");
      //   const title = document.querySelectorAll(".JS--header");
      //   const author = document.querySelectorAll(".JS--author");
      //   const description = document.querySelectorAll(".JS--description");
      //* Create elements
      const img = document.createElement("img");
      const title = document.createElement("h1");
      const author = document.createElement("p");
      const description = document.createElement("p");
      //* Add data

      img.setAttribute("src", element.urlToImage);
      title.innerHTML = `${element.title}`;
      author.innerHTML = `${element.author}`;
      description.innerHTML = `${element.description}`;

      //* Append to div
      newsSection.append(img, title, author, description);
    });
  });
