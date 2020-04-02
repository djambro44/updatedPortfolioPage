$("document").ready(function() {

    $("#nameButton").on("click", function(){
        // $("#myBar").move();
        $("#carouselExampleCaptions").hide();
        $("#contactForm").hide();
        $("#aboutMeContent").hide();
        $("#homePageContent").show();
    })

    $("#portfolioButton").on("click", function(){
        console.log("button has been clicked")
        $("#homePageContent").hide();
        $("#contactForm").hide();
        $("#aboutMeContent").hide();
        $("#carouselExampleCaptions").show();
    })

    $("#contactButton").on("click", function(){
        $("#homePageContent").hide();
        $("#carouselExampleCaptions").hide();
        $("#aboutMeContent").hide();
        $("#contactForm").show();
    })

    $("#aboutButton").on("click", function(){
        $("#homePageContent").hide();
        $("#carouselExampleCaptions").hide();
        $("#contactForm").hide();
        $("#aboutMeContent").show();
    })

//         var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }
    

























})