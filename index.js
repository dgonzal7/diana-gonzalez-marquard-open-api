let Allcatbreeds = []

async function getBreed() {
  try {  
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    // if response fails
    if (!response.ok){
      throw new Error(response.status);
    }
    // if successful do the below
    const data = await response.json()
    console.log("data: ", data);
  
    //all breeds and details are in one Array
    //console.log(Array.isArray(data));

    const breedSection = document.getElementById("breed");

    Allcatbreeds = data;

    //loop through the arry and grab each breed)
    for (let i = 0; i < data.length; i++) {
      const eachBreed = Allcatbreeds[i];

      //DOM selectors - get the div, then get the select element, then create the options list
      const catSection = document.getElementById("breed-selectdiv");
      const selectOption = catSection.querySelector("select");
      const catOption = document.createElement("option");

      //add each breed name as an option to the list
      catOption.value = eachBreed.id;
      catOption.innerHTML = `${eachBreed.name}`;
      selectOption.appendChild(catOption);
    } 
  } catch (error) {
  console.error(error);
  }
}

getBreed();

async function getCatDetails(x) {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${x}&api_key=live_U53C7RuoG4NdjpCk3wlbWPkWE8drqRGbUe9QSXrPLlgOA1ZY2ic5RO5tUIMs6Gef`)
  //if response fails
  if (!response.ok) {
    throw new Error(response.status);
  }
    //if fetch is successful do the below 
    const data = await response.json();

    const cat_image = document.querySelector("#cat-image");
    const descriptionElement = document.getElementById("description"); 
    const temperamentElement = document.getElementById("temperament"); 
    const originElement = document.getElementById("origin");
    const wiki_link = document.getElementById("wiki-link");

    cat_image.classList.remove('hidden');
    cat_image.src = data[0].url;

    //bring in description, temperament, and country of origin and add text content
    descriptionElement.textContent = `Description: ${data[0].breeds[0].description}`;
    temperamentElement.textContent = `Temperament: ${data[0].breeds[0].temperament}`;
    originElement.textContent = `Country of Origin: ${data[0].breeds[0].origin}`;
    
    wiki_link.classList.remove('hidden');
    wiki_link.href = data[0].breeds[0].wikipedia_url;


  } catch (error) {
    console.error(error);
  }
}


