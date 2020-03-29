$("document").ready(function() {

    $("#nameNutton").on("click", function(){
        $("#carouselCaptions").hide();
        $("#contactForm").hide();
        $("#aboutMeContent").hide();
        $("#homePageContent").show();
    })

    $("#portfolioButton").on("click", function(){
        console.log("button has been clicked")
        $("#homePageContent").hide();
        $("#contactForm").hide();
        $("#aboutMeContent").hide();
        $("#carouselCaptions").show();
    })

    $("#contactButton").on("click", function(){
        $("#homePageContent").hide();
        $("#carouselCaptions").hide();
        $("#aboutMeContent").hide();
        $("#contactForm").show();
    })

    $("#aboutButton").on("click", function(){
        $("#homePageContent").hide();
        $("#carouselCaptions").hide();
        $("#contactForm").hide();
        $("#aboutMeContent").show();
    })

























})