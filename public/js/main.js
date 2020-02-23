// changing everything to arrow functions!
window.addEventListener('DOMContentLoaded', () => {
  bindButton();
});

// global scope functions should still be regular functions
function bindButton() {
  const button = document.getElementById("random-dog");
  const img = document.getElementById("dog-img");
  const url = 'https://rickandmortyapi.com/api/character/'

  const url1 = "https://foaas.com/version";
  const url2 = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const url3 = "https://trefle.io/api/plants/116138?token=NGxtMVFYbjdNV2JtTzQzK0xiQ2dTZz09"
  let contentPgs = 0;
  let charCnt = 0;
  let userIP = "";


  //Preload the available characters
  //Parse the response stream as a JSON
  //Make a new <div> container with all of the characters

  const catContainer = document.createElement("div");
  catContainer.setAttribute("class", "mainContainer");
  document.body.appendChild(catContainer);


  fetch(url)
    .then(response => {
      return response.json()
    })
    //See how many characters are available across how many pages
    .then(result => {
      contentPgs = result.info.pages;
      charCnt = result.info.count;
      console.log(`There are ${charCnt} characters available in ${contentPgs} pages.`)
    })
    .catch(err => {
      return err;
    })

  // to use await, the function must be marked as async
  button.onclick = async () => {

    //Loop through every available page and grab every result
    let contentPgs = 2;
    for (var pageNum = 1; pageNum < contentPgs; pageNum++) {
      fetch('https://rickandmortyapi.com/api/character/?page=' + pageNum)

        //Fetch page number pagNum and parse as JSON
        .then(response => response.json())
        .then(result => {
          //Grab every result element (R&M character) from the results array
          //console.log(result)
          result.results.forEach(element => {

            //Make a new <div> container with each character's info
            const charContainer = document.createElement("div");
            charContainer.setAttribute("class", "characterCard");
            catContainer.appendChild(charContainer);

            //Make a new <img> element with each character's image
            const img = document.createElement("img");
            img.src = element.image;
            img.setAttribute("class", "character__image");
            charContainer.appendChild(img);

            //Make a new <p> element with each character's name
            const charName = document.createElement("p");
            charName.textContent = `Name: ${element.name}`;
            charName.setAttribute("class", "character__name");
            charContainer.appendChild(charName);

            //Make a new <p> element with each character's status
            const charStatus = document.createElement("p");
            charStatus.textContent = `Status: ${element.status}`;
            charStatus.setAttribute("class", "character__status");
            charContainer.appendChild(charStatus);

            //Make a new <p> element with each character's species
            const charSpecies = document.createElement("p");
            charSpecies.textContent = `Species: ${element.species}`;
            charSpecies.setAttribute("class", "character__species");
            charContainer.appendChild(charSpecies);

            //Make a new <p> element with each character's origin
            const charOrigin = document.createElement("p");
            charOrigin.textContent = `Origin: ${element.origin.name}`;
            charOrigin.setAttribute("class", "character__origin");
            charContainer.appendChild(charOrigin);

            //Make a new <p> element with each character's location
            const charLoc = document.createElement("p");
            charLoc.textContent = `Location: ${element.location.name}`;
            charLoc.setAttribute("class", "character__location");
            charContainer.appendChild(charLoc);

          });
        })
    }
  }
}