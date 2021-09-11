/* alert("Hello"); */

var numberOfDrums = document.querySelectorAll(".drum").length;

/*
for(var i =0; i < numberOfDrums; i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert("i got clicked");
        });
    }
*/

for(var i =0; i < numberOfDrums; i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
            
            makeSound(this.innerHTML);
            this.style.color = "red";
            buttonAnimation(this.innerHTML);
        });
    }

document.addEventListener("keydown", function(event){
       /* alert("Ayyan"); */
    
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    
       switch(key){
                case "w":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                case "a":
                    var kickbass = new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
                    break;
                case "s":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                case "d":
                    var tom1 = new Audio("sounds/news.mp3");
                    tom1.play();
                    break;
               case "j":
                    var tom2 = new Audio("sounds/likeras.mp3");
                    tom2.play();
                    break;
               case "k":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
               case "l":
                    var tom4 = new Audio("sounds/eminem.mp3");
                    tom4.play();
                    break;
                    
                default:
               console.log(key);
            }
}


function buttonAnimation(currentkey)
{
    var activeButton = document.querySelector("." + currentkey)  //now we have found the button by this line
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 900);
    
}