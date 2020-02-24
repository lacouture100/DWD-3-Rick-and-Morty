const url = 'https://rickandmortyapi.com/api/character/'
var pageNum = 1;

window.addEventListener('DOMContentLoaded', () => {
  loadPage();
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

  //Load the database
  loadImg.onclick = async () => {
    loadDatabase();
  }
  //Load the database
  loadEnter.onclick = async () => {
    loadDatabase();
  }
}

function loadDatabase() {
  //Remove the load page content
  try {
    document.querySelector(".loadPage").remove();
    document.querySelector(".header").remove();
    document.querySelector(".main").remove();
  } catch (error) {
    console.log(error);
  }
  let contentPgs = 0;
  let charCnt = 0;

  let textSize = '100%';
  let labelSize = '100%';

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

  const header = document.createElement("header");
  header.setAttribute("class", "header");
  document.body.appendChild(header);

  const main = document.createElement("div");
  main.setAttribute("class", "main");
  document.body.appendChild(main);

  const catalogue = document.createElement("div");
  catalogue.setAttribute("class", "catalogue");
  main.appendChild(catalogue);

  const loadHome = document.createElement("a");
  loadHome.setAttribute("href", "index.html")
  loadHome.setAttribute("class", "header__imageLink");
  header.appendChild(loadHome);

  const bitLogo = document.createElement("img");
  bitLogo.src = 'assets/8bitlogo.png';
  bitLogo.setAttribute("class", "header__image");
  loadHome.appendChild(bitLogo);

  const loadNext = document.createElement("a");
  loadNext.setAttribute("href", "#")
  loadNext.setAttribute("class", "header__imageLink");
  header.appendChild(loadNext);

  const bitImg = document.createElement("img");
  bitImg.src = 'assets/8bitRickMorty.png';
  bitImg.setAttribute("class", "header__image");
  loadNext.appendChild(bitImg);

  //Load more characters!
  bitImg.onclick = async () => {
    document.querySelector(".header").remove();
    document.querySelector(".main").remove();
    loadDatabase();
    if (pageNum <= contentPgs || pageNum == 0) {
      pageNum++;
    } else {
      pageNum=1;
    }
  }


//Loop through every available page and grab every result
//for (var pageNum = 1; pageNum < contentPgs; pageNum++) {
fetch('https://rickandmortyapi.com/api/character/?page=' + pageNum)
  //Fetch page number pagNum and parse as JSON
  .then(response => response.json())
  .then(result => {
    //let prevPg = result.info.prev;

    //Make a button for moving through content
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

    //Grab every result element (R&M character) from the results array
    result.results.forEach(element => {

      //Make a new <div> container with each character's info
      const charContainer = document.createElement("div");
      charContainer.setAttribute("class", "character--normal");
      catalogue.appendChild(charContainer);

      //Make a new <img> element with each character's image
      const charImg = document.createElement("img");
      charImg.src = element.image;
      charImg.setAttribute("class", "character__image");
      charContainer.appendChild(charImg);

      //Make a new <img> element with each character's text info
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

      focusItem(charContainer);

    })

  })
};

//change character container backgound if selected
function focusItem(charContainer) {
  if (charContainer != null) {
    charContainer.addEventListener('mouseover', function () {
      if (charContainer.classList.contains('character--normal')) {
        charContainer.classList.remove('character--normal')
        charContainer.classList.add('character--focus')

      } else {
        charContainer.classList.remove('character--focus')
        charContainer.classList.add('character--normal')
      }

    })
  } else {
    console.log("No characters!")
  }
}