# Dynamic Web Development 
## Assignment 3
***
## About
***
This repository contains my third assignment for the Dynamic Web Development Class at ITP. The assignment contains a website that displays facts about the Rick and Morty animated series using the  [Rick and Morty API](https://rickandmortyapi.com/). This project consists of a website made with CSS, HTML, and JS using the fetch API/ GET method to access data from an online API and display it interactively on a webpage. 

![Rick and Morty](assets/rickAndMortyMain.jpeg)

## Setup
***

 - To open the webpage you can download the files included in the repository and open the **index.html** file with your preferred web browser.

### Prerequisites

 -  An internet browser.
 -  An internet connection.



### Installation

For this particular project, there are no specific installation requirements.

### Develop

To develop this document, you can follow the steps provided below:
1. Create a fork of this project on Github.
2. Ping the author of this repo via Github Issues to see if they are looking for contributions with the specific feature you're looking to add.
3. Open the file in VS Code and make updates .
4. Add and commit those changes in your forked Github repo.
5. Make a pull request specifying what additions and changes were made.
6. Have a nice chat and open communication with me about those changes. 
7. Celebrate the contribution! 

## Built with
***
* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)


## Author
***
* [Alvaro Lacouture](https://alvarolacouture.com) 

## Acknowledgements
***
* [Joey Lee](https://jk-lee.com) -- adjunct professor -- [NYU ITP](https://itp.nyu.edu)
* [Cassie Tarakajian](https://cassietarakajian.com/) -- adjunct professor -- [NYU ITP](https://itp.nyu.edu)
* [The Good Project Readme Project](https://github.com/itp-dwd/2020-spring/blob/master/templates/readme-template.md)


***
# Notes & Process

My process began with deciding which API to use, and I believe I went through 8 different APIs before deciding to use the Rick & Morty API. The series is fantastic and I love it, and if you haven't checked it out I encourage you to do so. In any case, after settling on the API I retrieved the data I needed and setup the base for the content thtat would be displayed in the webpage.



## Process & Documentation

I started by making a simple blank webpage with two elements, a title and a button. I reasoned I should probably think about the design after I saw through the data. In any case, it's always better to look through the API's documentation firsthand! Luckily, the [Rick and Morty API documentation](https://rickandmortyapi.com/documentation) is well documented. So I made the title to display some information about what I was working with and the button so I could control my request with one event and have a way to observe what was going on when I sent it. 

![First layer of data given by the API '/characters' endpoint](assets/processUI_1.PNG)

Next was setting up the request. I used 
a promise using fetch() to get a request from `https://rickandmortyapi.com/api/character/?page=1`. After reading through the documentation I figured probably there would be a good place to test my request. I first tried opening the page with my browser so I would know what to expect. You can see it yourself [here](https://rickandmortyapi.com/api/character/?page=1) or check out the image below to get an idea. 

![First layer of data given by the API '/characters' endpoint](assets/process_0.PNG)

With an idea of what to expect, I console logged my JS request to see what data was being thrown back at me every time I clicked the button... And SUCCESS! You can see the result I had below using the Google Chrome Devtools.


![First layer of data given by the API '/characters' endpoint](assets/process_1.PNG)

With steady access to the JSON I could play with the data in any way I wanted. Beautiful. Now that I was in the characters' endpoint, why not grab each character individually? After looking closer into the JSON I knew I had 25 juicy pages of information with 493 different characters. On the JSON side, the 'results' array contained every character, as you can see detailed better below. Each character has their ID number, name, status, species, type, and images. Deciding what to start with was easy, the name has more significance for me so I wanted to grab those first.

![Looking closer into the array of characters in the JSON](assets/process_2.PNG)
![Grabbing each character individually](assets/process_3.PNG)

It didn'y make much sense to display twenty different pages of info, so why not see all of the names right away? Whay not make every name a paragraph right away?


    //Button to retrieve every character
    button.onclick = async () => {
    //Loop through every available page and grab every result
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
            });    
          })
      }
    }

![Displaying every character as a new <p> element](assets/processUI_2.PNG)

Now that I had the names the next logical step would be to grab the images, of course.

![Displaying every character as a new <p> element](assets/charsImg.gif)


***



## Challenges & Struggles
  


## Questions



## References

