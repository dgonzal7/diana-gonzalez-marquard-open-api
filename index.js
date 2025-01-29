const image = document.querySelector('img');
fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_U53C7RuoG4NdjpCk3wlbWPkWE8drqRGbUe9QSXrPLlgOA1ZY2ic5RO5tUIMs6Gef', {
  method: 'GET'
}).then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); 

  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
