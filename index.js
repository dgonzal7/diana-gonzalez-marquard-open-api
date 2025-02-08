let Allcatbreeds = []

async function getBreed() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds")
  const data = await response.json()
  console.log("data: ", data);
  
  //all breeds and details are in one Array
  //console.log(Array.isArray(data));

  const breedSection = document.getElementById("breed");

  Allcatbreeds = data;

  //loop through the list and grab each breed)
  for (let i = 0; i < data.length; i++) {
    const eachBreed = Allcatbreeds[i];
    //console.log(eachBreed.name);
    //console.log(data);
    //console.log(eachBreed.id);

    //DOM selectors - get the div, then get the select element, then create the options list
    const catSection = document.getElementById("breed");
    const selectOption = catSection.querySelector("select");
    const catOption = document.createElement("option");

    //add each breed name as an option to the list
    catOption.value = eachBreed.id;
    catOption.innerHTML = `${eachBreed.name}`;
    selectOption.appendChild(catOption);
  }
}

getBreed();

async function getCatDetails(x) {
  //console.log("Selected x breed:", x)
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${x}&api_key=live_U53C7RuoG4NdjpCk3wlbWPkWE8drqRGbUe9QSXrPLlgOA1ZY2ic5RO5tUIMs6Gef`)
  //console.log("response:", response);
  const data = await response.json()
  console.log("All data:", data);
  //console.log("data url:", data[0].url);

  const cat_image = document.querySelector("#cat-image");
  //console.log("Cat image:", cat_image);

  cat_image.classList.remove('hidden');
  cat_image.src = data[0].url;

  document.getElementById("description").textContent = `Description: ${data[0].breeds[0].description}`;
  document.getElementById("temperament").textContent = `Temperament: ${data[0].breeds[0].temperament}`;
  document.getElementById("origin").textContent = `Country of Origin: ${data[0].breeds[0].origin}`;
  
}