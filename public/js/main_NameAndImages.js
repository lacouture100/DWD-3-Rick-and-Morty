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
    let contentPgs = 5;
    for (var pageNum = 1; pageNum < contentPgs; pageNum++) {
      fetch('https://rickandmortyapi.com/api/character/?page=' + pageNum)

        //Fetch page number pagNum and parse as JSON
          .then(response => response.json())
          .then(result => {
            //Grab every result element (R&M character) from the results array
            //console.log(result)
            result.results.forEach(element => {

              //Make a new <p> element with each character's name
              //console.log(element)
              const p = document.createElement("p");
              p.textContent = element.name;
              p.setAttribute("class", "character__name");
              document.body.appendChild(p);

               //Make a new <img> element with each character's image
              const img = document.createElement("img");
              img.src = element.image;
              img.setAttribute("class", "character__image");
              document.body.appendChild(img); 
            });    
          })
      }
    }
  }
