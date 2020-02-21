// changing everything to arrow functions!
window.addEventListener('DOMContentLoaded', () => {
  bindButton();
});

// global scope functions should still be regular functions
function bindButton() {
  const button = document.getElementById("random-dog");
  const img = document.getElementById("dog-img");
  const url1 = "https://foaas.com/version";
  const url2 = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const url3 = "https://trefle.io/api/plants/116138?token=NGxtMVFYbjdNV2JtTzQzK0xiQ2dTZz09"
  const url = 'https://rickandmortyapi.com/api/character/'
  let contentPgs = 0;



  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(result => {
      //console.log(result);
      return result;
    })
    .then(result => {
      contentPgs = result.info.pages;
      //console.log(contentPgs);  
    })
    .catch(err => {
      return err;
    })


  // to use await, the function must be marked as async
  button.onclick = async () => {


    for (var pageNum = 1; pageNum < contentPgs; pageNum++) {
      for (var i = 0; i < 19; i++) {
      fetch('https://rickandmortyapi.com/api/character/?page=' + pageNum)
        .then(response => response.json())
        .then(result => console.log(result.results[i].name))
      }
      console.log("page: "+ i);
      
        
  
    }
    //console.log(contentPgs);
    



  }
}