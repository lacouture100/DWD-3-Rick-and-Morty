const url = 'https://rickandmortyapi.com/api/character/'


window.addEventListener('DOMContentLoaded', () => {
  loadPage();
  //bindButton();


});

function loadPage() {
  let textSize = '150%';

  const loadPage = document.createElement("div");
  loadPage.setAttribute("class", "loadPage");
  document.body.appendChild(loadPage);
  
  const bitLogo = document.createElement("img");
  bitLogo.src = 'assets/8bitlogo.png';
  bitLogo.setAttribute("class", "loadPage__imagelogo");
  loadPage.appendChild(bitLogo);

  const loadWelcome = document.createElement("p");
  loadWelcome.textContent = `We have detected you come from universe C-137`;
  loadWelcome.setAttribute("class", "loadPage__welcome");
  loadWelcome.style.fontSize = textSize;
  loadPage.appendChild(loadWelcome);

  const loadEnterLink = document.createElement("a");
  loadEnterLink.setAttribute("href", "#")
  loadEnterLink.setAttribute("class", "loadPage__enter");
  loadPage.appendChild(loadEnterLink);

  const loadImg = document.createElement("img");
  loadImg.src = 'assets/portalLowRes_2.png';
  loadImg.setAttribute("class", "loadPage__image");
  loadEnterLink.appendChild(loadImg);

  const loadEnter = document.createElement("p");
  loadEnter.textContent = `Enter Database`;
  loadEnter.setAttribute("class", "loadPage__enter");
  loadEnter.style.fontSize = textSize;

  loadEnterLink.appendChild(loadEnter);

  loadImg.onclick = async () => {
    loadDatabase();
  }
  loadEnter.onclick = async () => {
    loadDatabase();
  }
}

function loadDatabase() {
  document.querySelector(".loadPage").remove();


  // global scope functions should still be regular functions

  const button = document.getElementById("random-dog");
  const img = document.getElementById("dog-img");

  let contentPgs = 0;
  let charCnt = 0;
  let pageNum = 0;

  let textSize = '80%';
  let labelSize = '100%';

  //Preload the available characters
  //Parse the response stream as a JSON
  //Make a new <div> container with all of the characters




  /*   var charContainerSelector = document.querySelector(".characterCard--normal");
      if (charContainerSelector != null) {
        console.log("Container detected!");
        charContainerSelector.addEventListener('mouseover', function () {
          console.log("focus!");
          if (charContainerSelector.contains('characterCard--normal')) {
            charContainerSelector.remove('characterCard--normal')
            charContainerSelector.add('characterCard--focus')
  
          } else {
            charContainerSelector.remove('characterCard--focus')
            charContainerSelector.add('characterCard--normal')
  
          }
        });
      } */

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

  pageNum++;

  const header = document.createElement("div");
  header.setAttribute("class", "header");
  document.body.appendChild(header);

  const main = document.createElement("div");
  main.setAttribute("class", "main");
  document.body.appendChild(main);

  const catalogue = document.createElement("div");
  catalogue.setAttribute("class", "catalogue");
  main.appendChild(catalogue);

  const bitLogo = document.createElement("img");
  bitLogo.src = 'assets/8bitlogo.png';
  bitLogo.setAttribute("class", "header__image");
  header.appendChild(bitLogo);

  const bitImg = document.createElement("img");
  bitImg.src = 'assets/8bitRickMorty.png';
  bitImg.setAttribute("class", "header__image");
  header.appendChild(bitImg);



  //Loop through every available page and grab every result

  //for (var pageNum = 1; pageNum < contentPgs; pageNum++) {
  fetch('https://rickandmortyapi.com/api/character/?page=' + pageNum)

    //Fetch page number pagNum and parse as JSON
    .then(response => response.json())
    .then(result => {
      //Grab every result element (R&M character) from the results array
      //console.log(result)
      let prevPg = result.info.prev;
      /* console.log(prevPg)
          if (prevPg != "") {      
            console.log(`There no previous pages.`)
          } else {
            console.log("There are no more pages!")
            const prevButton = document.createElement("button");
            prevButton.setAttribute("name", "Previous Page");
  
            prevButton.setAttribute("class", "prevButton");
            document.body.appendChild(prevButton);
  
          } */
      result.results.forEach(element => {

        //Make a new <div> container with each character's info
        const charContainer = document.createElement("div");
        charContainer.setAttribute("class", "character--normal");
        catalogue.appendChild(charContainer);

        //Make a new <img> element with each character's image
        const img = document.createElement("img");
        img.src = element.image;
        img.setAttribute("class", "character__image");
        charContainer.appendChild(img);

        //Make a new <img> element with each character's image
        const charText = document.createElement("div");
        charText.setAttribute("class", "character__text");
        charContainer.appendChild(charText);

        //Make a new <p> element with each character's name
        const charName = document.createElement("p");
        const nameLabel = document.createElement("p");
        const nameDiv = document.createElement("div");
        nameDiv.setAttribute("class", "character__field");
        nameLabel.textContent = `Name:`;
        charName.textContent = `${element.name}`;
        nameLabel.setAttribute("class", "character__label");
        nameLabel.style.fontSize = textSize;
        charName.setAttribute("class", "character__value");
        charName.style.fontSize = labelSize;
        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(charName);
        charText.appendChild(nameDiv);

        //Make a new <p> element with each character's status
        const charStatus = document.createElement("p");
        const statusLabel = document.createElement("p");
        const statusDiv = document.createElement("div");
        statusDiv.setAttribute("class", "character__field");
        statusLabel.textContent = `Status:`;
        charStatus.textContent = `${element.status}`;
        statusLabel.setAttribute("class", "character__label");
        statusLabel.style.fontSize = textSize;
        charStatus.setAttribute("class", "character__value");
        charStatus.style.fontSize = labelSize;
        statusDiv.appendChild(statusLabel);
        statusDiv.appendChild(charStatus);
        charText.appendChild(statusDiv);

        //Make a new <p> element with each character's species
        const charSpecies = document.createElement("p");
        const speciesLabel = document.createElement("p");
        const speciesDiv = document.createElement("div");
        speciesDiv.setAttribute("class", "character__field");
        speciesLabel.textContent = `Species:`;
        charSpecies.textContent = `${element.species}`;
        speciesLabel.setAttribute("class", "character__label");
        speciesLabel.style.fontSize = textSize;
        charSpecies.setAttribute("class", "character__value");
        charSpecies.style.fontSize = labelSize;
        speciesDiv.appendChild(speciesLabel);
        speciesDiv.appendChild(charSpecies);
        charText.appendChild(speciesDiv);

        //Make a new <p> element with each character's origin
        const charOrigin = document.createElement("p");
        const originLabel = document.createElement("p");
        const originDiv = document.createElement("div");
        originDiv.setAttribute("class", "character__field");
        originLabel.textContent = `Origin:`;
        charOrigin.textContent = `${element.origin.name}`;
        originLabel.setAttribute("class", "character__label");
        originLabel.style.fontSize = textSize;
        charOrigin.setAttribute("class", "character__value");
        charOrigin.style.fontSize = labelSize;
        originDiv.appendChild(originLabel);
        originDiv.appendChild(charOrigin);
        charText.appendChild(originDiv);

        //Make a new <p> element with each character's location
        const charLoc = document.createElement("p");
        const locLabel = document.createElement("p");
        const locationDiv = document.createElement("div");
        locationDiv.setAttribute("class", "character__field");
        locLabel.textContent = `Location:`;
        charLoc.textContent = `${element.location.name}`;
        locLabel.setAttribute("class", "character__label");
        locLabel.style.fontSize = textSize;
        charLoc.setAttribute("class", "character__value");
        charLoc.style.fontSize = labelSize;
        locationDiv.appendChild(locLabel);
        locationDiv.appendChild(charLoc);
        charText.appendChild(locationDiv);
      });
    })

}
