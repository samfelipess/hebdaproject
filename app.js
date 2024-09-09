let innerCursor = document.querySelector('.inner-c');
let outerCursor = document.querySelector('.outer-cursor');
let bubbleCursor= document.querySelector( '.bubble-in')

var ld=1
var fs = 0

document.addEventListener('mousemove', cursor);

    function cursor(e) {
        
        
        //console.log(x,y);

        innerCursor.style.top = e.pageY + 'px';
        innerCursor.style.left = e.pageX + 'px';
        outerCursor.style.top = e.pageY + 'px';
        outerCursor.style.left = e.pageX + 'px';
        
        
        
        }

        let links = Array.from(document.querySelectorAll("a"));

        console.log(links);

        links.forEach((link) => {
            link.addEventListener("mouseover", () =>{
                innerCursor.classList.add("grow");
            });
            link.addEventListener("mouseleave", () =>{
                innerCursor.classList.remove("grow");
            });
            
            
        }) ;

        let menu = Array.from(document.querySelectorAll("button"));

        

        menu.forEach((link) => {
            link.addEventListener("mouseover", () =>{
                innerCursor.classList.add("grow");
            });
            link.addEventListener("mouseleave", () =>{
                innerCursor.classList.remove("grow");
            });
            
            
        }) ;

      function lightdark()
      {
        var ld = 0;
        for (var i = 0; i < 49; i++) {
          setTimeout(function() {
            if (ld == 0) {
              ld = 1;
              document.getElementById("wrapperid").className = "wrapper";
              document.getElementById("paco").className = "header-shit";
              document.getElementById("invertbox").className = "boxes";
            } else {
              ld = 0;
              document.getElementById("wrapperid").className = "wrapper2";
              document.getElementById("paco").className = "header-shit2";
              document.getElementById("invertbox").className = "boxes2";
            }
          }, i * 200);
        }

    
    const button = document.getElementById('movingButton');

    // Function to generate random position
    function generateRandomPosition() {
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      return { x: randomX, y: randomY };
    }

    // Function to move the button to a random position
    function moveButton() {
      const randomPosition = generateRandomPosition();
      button.style.left = `${randomPosition.x}px`;
      button.style.top = `${randomPosition.y}px`;
    }

    // Call moveButton initially
    moveButton();

    // Add event listener to move the button on click
    button.addEventListener('click', moveButton);
      }
        
        



    
       