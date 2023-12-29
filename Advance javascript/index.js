

// document.querySelectorAll("button")[1].addEventListener("click", function (){
//     alert("We got clicked .")
// })
// document.querySelectorAll("button")[2].addEventListener("click", function (){
//     alert("We got clicked .")
// })
// document.querySelectorAll("button")[3].addEventListener("click", function (){
//     alert("We got clicked .")
// })
// document.querySelectorAll("button")[4].addEventListener("click", function (){
//     alert("We got clicked .")
// })
// document.querySelectorAll("button")[5].addEventListener("click", function (){
//     alert("We got clicked .")
// })
// document.querySelectorAll("button")[6].addEventListener("click", function (){
//     alert("We got clicked .")
// })
// document.querySelectorAll("button")[0].addEventListener("click", function (){
//     alert("We got clicked .")
// })

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrumButtons; i++){
//     console.log(i)
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     var audio = new Audio('sound/sound5.wav')
//     audio.play()
//     })
// }
// button.addEventListener("click", handleClick)
 

// let button = document.getElementsByClassName("drum")
// button.addEventListener("click", handleClick)
// function handleClick() {
//     alert("I got clicked.")
// }


function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    // return operator(num1, num2)
    
var audio = new Audio('sound/sound1.wav')
audio.play()
}


function BMICalculator(weight, height){
// return "BMI of man is " + weight / (height * height) + " kg/m2";
return Math.round( weight / Math.pow(height, 2)) + " kg/m2." 
}


//    Audio for drum play
                                          /*
var audio = new Audio('sound/sound1.wav')
// audio.play()
var numberOfDrumButtons = document.querySelectorAll(".drum").length
for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // console.log(this)
        var textOnDrum = this.innerText
        console.log(textOnDrum)
        this.style.color = "white"   // change color on click
        if(textOnDrum === 'w'){
        // document.getElementsByClassName("drum")[0].style.color="yellow"
        audio = new Audio('sound/sound2.wav')
        audio.play()
        }
        else{
            audio = new Audio('sound/sound1.wav')
            audio.play()
        }
    })
}                                            */
// ***************************************************
// BellBoy1
var bellBoy1Name = "Timmy";
var bellBoy1Age = 19;
var bellBoy1HasWorkPermit = true;
var bellBoy1Languages = [
    "French",
    "Hindi",
    "English"
]
var bellBoy2Name = "Timmy";
var bellBoy2Age = 19;
var bellBoy2HasWorkPermit = true;
var bellBoy2Languages = [
    "French",
    "Hindi",
    "English"
]
// alert("hello, my name is " + bellBoy1Name)
// so , we have to create objects
//    objects
// creating objects ......
var houseKeeper1 = {
    name : "jane",
    age : 26 ,
    yearsOfExperience: 8,
    cleaning: ["bathroom","lobby","bedroom"]

}
// so we are creating objects by constructors.......
function HouseKeeper (name, age, yearsOfExperience, language, cleaning){
    this.name = name;
    this.age = age ;
    this.yearsOfExperience = yearsOfExperience ;
    this.language = language;
    this.cleaning = cleaning;
    this.work = function (){
        alert("Cleaning in progress....")
    }
}
var houseKeeper2 = new HouseKeeper("Abhay",45,10,["greek", "hindi"], ["love", "care"])
var housekeeper3 = new HouseKeeper("Alok",19, 5, ["hindi","english"],["caring","saving"])



// 
                           /*

 numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        // console.log(buttonInnerHtml)
        // console.log(this)
        switch (buttonInnerHtml) {
            case "w":
                var audio1 = new Audio("sound/sound1.wav");
                audio1.play()
                break;
            case "a":
                var audio2 = new Audio('sound/sound2.wav');
                audio2.play()
                break;
            case "s":
                var audio3 = new Audio('sound/sound3.wav');
                audio3.play()
                break;
            case "":
                var audio4 = new Audio('sound/sound4.wav');
                audio4.play()
                break;
            case "j":
                var audio5 = new Audio('sound/sound5.wav');
                audio5.play()
                break;
            case "k":
                var audio6 = new Audio('sound/sound6.wav');
                audio6.play()
                break;
            case "l":
                var audio7 = new Audio('sound/sound7.wav');
                audio7.play()
                
            default:
                console.log(buttonInnerHtml);
                break;
        }
    })
 }                             
                                     */
// /////////////////////////////////////////////////////////////////////////////////////////////
//    detecting button press   

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        // console.log(buttonInnerHtml)
        makeSound(buttonInnerHtml)

        buttonAnimation(buttonInnerHtml);
    })
}

    // detecting keyboard press
document.addEventListener("keypress", function(event){
    // console.log(event);
    // console.log(event.key)
    makeSound(event.key);

    buttonAnimation(event.key)
})

function makeSound(key){

    switch (key) {

        case "w":
            var audio1 = new Audio("sound/sound1.wav");
            audio1.play()
            break;
        case "a":
            var audio2 = new Audio('sound/sound2.wav');
            audio2.play()
            break;
        case "s":
            var audio3 = new Audio('sound/sound3.wav');
            audio3.play()
            break;
        case "d":
            var audio4 = new Audio('sound/sound4.wav');
            audio4.play()
            break;
        case "j":
            var audio5 = new Audio('sound/sound5.wav');
            audio5.play()
            break;
        case "k":
            var audio6 = new Audio('sound/sound6.wav');
            audio6.play()
            break;
        case "l":
            var audio7 = new Audio('sound/sound7.wav');
            audio7.play()
            break;

        default:
            console.log(buttonInnerHtml);
            
    } 
}

// // ADDING ANIMATION IN SCRIPT
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    // console.log(activeButton)
    
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 200);

    
}
