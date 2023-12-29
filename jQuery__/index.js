console.log("Good Morning")

// document.querySelector("h1").style.borderColor = "teal"
jQuery("h1").css("backgroundColor","teal")
$("h1").css("color","purple")

// document.querySelectorAll("button")
$("button").css("margin","10px");
$("button").css("fontSize","20px")
// $("button").css("color","yellow")
// $("button").css("backgroundColor","green")
// $("button").css("borderRadius","10px")
// $("button").css("borderColor","yellow")

console.log($("h1").css("font-size"))
console.log($("h1").css("backgroundColor"))
console.log($("button").css("borderColor"))
console.log($("h1").css("color"))
// it will give properties value in console...

// style by adding class in .....
// $("h1").addClass("big-title");

// adding one or more classes
$("h1").addClass("big-title margin-50");

$("button").addClass("btn")

// removing class...
// $("h1").removeClass("big-title")

// check for class applied or not...
console.log($("h1").hasClass("margin-50"));



// manipulating text (adding & removing text)
$("h1").text("Good Bye;")
$("button").text("Don't Click Me")

// $(".box").html(`<h1><em> Good Morning </em></h1>`)



// adding attributes...
console.log($("img").attr("src"))
$("img").attr("src","images/img2.png")

$("a").attr("href","https://www.yahoo.com")

// note: class is also an attribute
console.log($("h1").attr("class"))


// Add event listener using jQuery.....
$("h1").click(function(){
    // $("h1").css("color","green")
    $("h1").css("color","rgb(7,146, 201)")
})

// for vanilla javascript addeventlistener for all buttons.....
for(var i =0; i< 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.backgroundColor="black";
    }
    )
}

// for jquery addeventlistener for all buttons.....
$("button").click(function (){
    $("h1").css("backgroundColor","pink")
})

// jQuery keypress addeventlistener for........
$("input").keypress(function(event) {
    console.log(event.key)
})

$(document).keypress(function(event) {
    // $("H2").text(event.key)
    $("h2").text("Entered Key : " + event.key)
})

// Also, ....
$("h1").on("mouseover", function() {
    $("h1").css("boxShadow","20px 10px yellow")
    $("h1").css("color","yellow")
})



// Adding and removing elements with jQuery.......

//      adding elements
$("h1").before(`<button class="add-element" >New Button</button>`)
$("h1").after(`<button class="add-element" >After Button</button>`)
$("h1").prepend(`<button class="add-element" >PREPEND</button>`)
$("h1").append(`<button class="add-element" >append</button>`)

// removing elements
// $("button").remove()
$(".add-element").remove()




// website animation with jQuery ........

// giveing name to created button
  $(".paragraph-button").text("Hide & Seek Button")

  $(".paragraph-button").on("click", function() {
    // $(".paragraph").hide()
    // $(".paragraph").show()      // in console
    //       $(".paragraph").toggle()
    // $(".paragraph").fadeOut()
    // $(".paragraph").fadeIn()
    //     $(".paragraph").fadeToggle()
    // $(".paragraph").slideUp()
    // $(".paragraph").slideDown()
        //   $(".paragraph").slideToggle()
  })  


//   for using custom css that you animate.......

$(".paragraph-button").on("click", function() {
    // note: using animate method , use or stick to numeric values css
    // $(".paragraph").animate({opacity: 0.5})
    // $(".paragraph").animate({margin: "10%"}) 
    // $(".paragraph").animate({margin: 20}) 

    // adding more than one animation.....chaining
    $(".paragraph").slideUp().slideDown().animate({opacity:0.5})

})