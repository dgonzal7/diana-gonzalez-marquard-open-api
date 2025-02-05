const catImg = document.getElementById('cat_image');

async function getCat() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10?has_breeds=1&api_key=live_U53C7RuoG4NdjpCk3wlbWPkWE8drqRGbUe9QSXrPLlgOA1ZY2ic5RO5tUIMs6Gef')
  const data = await response.json(); 
  return data[0];
}

async function handleClick() {
  const img = await getCat();
  catImg.src = img.url;
}

//I don't know how to pull in breed or another data point from the link above
// async function getBreed() {
//   const response = await fetch ()
//   const data = await response.json();
//   return console.log(data);
// }

//






// const baseURL = "https://api.thecatapi.com/v1/breeds"
// const api_key = live_U53C7RuoG4NdjpCk3wlbWPkWE8drqRGbUe9QSXrPLlgOA1ZY2ic5RO5tUIMs6Gef

// let storedBreeds = [];

// // a function to select a random breed

// function getRandomInt(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// // a function to show images and information of the breeds
// function showCatImageAndInformation(index) {

// // This will display the image of the cat
//   document.getElementById("cat_image").src = storedBreeds[index].image.url;

// // This will get the breed name
//   document.getElementById("breed_name").innerHTML = storedBreeds[index].name;

// // This will get the wiki link
//   document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url;

//   document.getElementById("wiki_link").innerHTML =
//     storedBreeds[index].wikipedia_url;  

// // This will get the characteristics of the cat
//   document.getElementById("breed_json").textContent =
//     storedBreeds[index].temperament;
// }


// // a function to retrieve data from the API
// fetch(url, {
//   headers: {
//     "x-api-key": api_key,
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // Storing the retrieved data from the API in our variable
//     storedBreeds = data;


//     // Using the random function to select a specific breed. Then extracting information from that breed
//     showCatImageAndInformation(getRandomInt(0, storedBreeds.length - 1));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
