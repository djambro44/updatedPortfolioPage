$("document").ready(function() {

    $("#nameButton").on("click", function(){
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

























})