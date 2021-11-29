// //Testing api calls

// everything_api = "https://saurav.tech/NewsAPI/everything/bbc-news.json"
// namecOUNTRY = "Canada"

// api = `https://restcountries.com/v3.1/name/${namecOUNTRY}`;

// // apiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';


// fetch(everything_api).then(response => response.json())
//     .then(data => {
//         console.log(data)
//         console.log(data.articles[1].author);
//         fetch(api).then(response => response.json())
//             .then(data2 => console.log(data2))
//             .catch(err => console.error(err));
//     })
//     .catch(err => console.error(err));


// header is now animated with heading text
gsap.from("#heading", {
    y: -500,
    opacity: 0,
    ease: Elastic.easeOut,
    duration: 1,
});