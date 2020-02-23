const url = 'https://rickandmortyapi.com/api/character/'


window.addEventListener('DOMContentLoaded', () => {
  loadPage();
  //bindButton();


});

function loadPage() {
  let textSize = '100%';

  const loadPage = document.createElement("div");
  loadPage.setAttribute("class", "loadPage");
  document.body.appendChild(loadPage);

  const loadWelcome = document.createElement("p");
  loadWelcome.textContent = `We have detected you come from universe C-137`;
  loadWelcome.setAttribute("class", "loadPage__welcome");
  loadWelcome.style.fontSize = '120%';
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

  let textSize = '100%';
  let labelSize = '120%';

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

  const headerContainer = document.createElement("div");
  headerContainer.setAttribute("class", "headerContainer");
  document.body.appendChild(headerContainer);

  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "mainContainer");
  document.body.appendChild(mainContainer);

  const catalogueContainer = document.createElement("div");
  catalogueContainer.setAttribute("class", "catalogueContainer");
  mainContainer.appendChild(catalogueContainer);


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
        catalogueContainer.appendChild(charContainer);

        //Make a new <img> element with each character's image
        const img = document.createElement("img");
        img.src = element.image;
        img.setAttribute("class", "character__image");
        charContainer.appendChild(img);

        //Make a new <img> element with each character's image
        const charText = document.createElement("div");
        charText.setAttribute("class", "character__Text");
        charContainer.appendChild(charText);

        //Make a new <p> element with each character's name
        const charName = document.createElement("p");
        const nameLabel = document.createElement("p");
        nameLabel.textContent = `Name:`;
        charName.textContent = `${element.name}`;
        nameLabel.setAttribute("class", "character__name");
        nameLabel.style.fontSize = textSize;
        charName.setAttribute("class", "character__name");
        charName.style.fontSize = labelSize;
        charText.appendChild(nameLabel);
        charText.appendChild(charName);

        //Make a new <p> element with each character's status
        const charStatus = document.createElement("p");
        const statusLabel = document.createElement("p");
        statusLabel.textContent = `Status:`;
        charStatus.textContent = `${element.status}`;
        statusLabel.setAttribute("class", "character__status");
        statusLabel.style.fontSize = textSize;
        charStatus.setAttribute("class", "character__status");
        charStatus.style.fontSize = labelSize;
        charText.appendChild(statusLabel);
        charText.appendChild(charStatus);

        //Make a new <p> element with each character's species
        const charSpecies = document.createElement("p");
        const speciesLabel = document.createElement("p");
        speciesLabel.textContent = `Species:`;
        charSpecies.textContent = `${element.species}`;
        speciesLabel.setAttribute("class", "character__species");
        speciesLabel.style.fontSize = textSize;
        charSpecies.setAttribute("class", "character__species");
        charSpecies.style.fontSize = labelSize;
        charText.appendChild(speciesLabel);
        charText.appendChild(charSpecies);

        //Make a new <p> element with each character's origin
        const charOrigin = document.createElement("p");
        const originLabel = document.createElement("p");
        originLabel.textContent = `Origin:`;
        charOrigin.textContent = `${element.origin.name}`;
        originLabel.setAttribute("class", "character__origin");
        originLabel.style.fontSize = textSize;
        charOrigin.setAttribute("class", "character__origin");
        charOrigin.style.fontSize = labelSize;
        charText.appendChild(originLabel);
        charText.appendChild(charOrigin);

        //Make a new <p> element with each character's location
        const charLoc = document.createElement("p");
        const locLabel = document.createElement("p");
        locLabel.textContent = `Location:`;
        charLoc.textContent = `${element.location.name}`;
        locLabel.setAttribute("class", "character__location");
        locLabel.style.fontSize = textSize;
        charLoc.setAttribute("class", "character__location");
        charLoc.style.fontSize = labelSize;
        charText.appendChild(locLabel);
        charText.appendChild(charLoc);

      });
    })

}
