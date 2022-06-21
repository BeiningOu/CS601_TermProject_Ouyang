# CS601_TermProject_Ouyang

The website is hosted at:
https://thunderous-souffle-e5e9d1.netlify.app

## About The Project

The project’s topic is about me. There are total of 6 HTML pages, each page has a JavaScript file, and a shared main.css for all the pages.

Each page has the same menu navigation button, which can fold and unfold.  The hover effect is also added to the menu section. 


## Home page 
The home page includes a header, a menu bar that can fold and unfold, a picture section, and paragraphs about me. It also has a button “Read more...” which hides/show more about me. On the right bottom corner, there is a “back to the top” button, if the audience would like to go back to the top, they may click that, in this way they don’t need to scroll all the way up.  

## Academic background
This page has lists and tables. At the bottom, there is a cat image with a hover effect which is implemented in Vue. When you move the mouse to the image, it will change to the other one. 

## Work experience and project
This page displays my resume. The displaying is implemented using an event listener and “fetch” from JSON files. 

## Playground 
This page is my favorite. I implement bouncing color balls using JavaScript.  The main methods are Math.random which generates the color, size, speed, and location of a ball. We used canvas in HTML to “draw” these beautiful balls. This project also reflects the idea of OOP, if we want a lot of balls, we need to create a ball class first. 
So, the ball class defines a ball’s color, size, move speed, and location. Then we need to update the location of the ball each time interval – I used requestAnimationFrame() to enable the animation part. 

The original idea comes from https://codepen.io/b4rb4tron/pen/wjyXNJ/
However, my implementation is different from that one. 
I also added a button to control the “start” and “stop” of the balls. 

## Beining's cat
This page used media query and flex to enable the responsiveness of the website. 
Vue hovers effect component is added to the picture. 

## Contact 
The contact page uses form post and echoes whatever you input. 
The form validation is done in JavaScript.

## Citation:
Icon: <a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by dmitri13 - Flaticon</a> 
