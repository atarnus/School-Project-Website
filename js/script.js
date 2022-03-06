/* To do:
Colour picker button hover as doubletap in mobile!
Active thumbnail in gallery
Gallery carousel

Changes since last push:
Navigating: Changed slideIn/Out (fast) into fadeIn/Out (400/0) for smoother feel.
 */

$(document).ready(function(){

    // alert("This page is a school project and still being updated. \nThe contact form will not save or send any data.");
                
    // Page Navigation

    $("#n1").click(function(){
        $("#p1").fadeIn(400);
        $("#p2").fadeOut(0);
        $("#p3").fadeOut(0);
        $("#p4").fadeOut(0);
        $("#p5").fadeOut(0);
        $(".nav").removeClass("active");
        $("#header").fadeOut(0);
        $("body").css("overflow", "hidden");
    });

    $("#n2").click(function(){
        $("#p2").fadeIn(400);
        $("#p1").fadeOut(0);
        $("#p3").fadeOut(0);
        $("#p4").fadeOut(0);
        $("#p5").fadeOut(0);
        $(".nav").removeClass("active");                    
        $("#n2").addClass("active");
        $("#header").fadeIn(400);
        $("body").css("overflow", "visible");
    });

    $("#n3").click(function(){
        $("#p3").fadeIn(400);
        $("#p1").fadeOut(0);
        $("#p2").fadeOut(0);
        $("#p4").fadeOut(0);
        $("#p5").fadeOut(0);
        $(".nav").removeClass("active");                    
        $("#n3").addClass("active");
        $("#header").fadeIn(400);
        $("body").css("overflow", "visible");
    });

    $("#n4").click(function(){
        $("#p4").fadeIn(400);
        $("#p1").fadeOut(0);
        $("#p2").fadeOut(0);
        $("#p3").fadeOut(0);
        $("#p5").fadeOut(0);
        $(".nav").removeClass("active");                    
        $("#n4").addClass("active");
        $("#header").fadeIn(400);
        $("body").css("overflow", "visible");
    });
    
    $("#n5").click(function(){
        $("#p5").fadeIn(400);
        $("#p1").fadeOut(0);
        $("#p2").fadeOut(0);
        $("#p3").fadeOut(0);
        $("#p4").fadeOut(0);
        $(".nav").removeClass("active");                    
        $("#n5").addClass("active");
        $("#header").fadeIn(400);
        $("body").css("overflow", "visible");
    });

    // Colour Picker

    $(".c").click(function(){
        let cclick = $(this).css("background-color");
        $(".col-50-l").css("background-color", cclick);
        $("#left-text").text(this.value);
        if (this.value == "Eclipse") {
            $("#left-text").css("color", "#B1ACC8");
        } else {
            $("#left-text").css("color", cclick);
        }
    });
    
    $(".c").hover(function(){
        let chover = $(this).css("background-color");
        $(".col-50-r").css("background-color", chover);
        $("#right-text").text(this.value);
        if (this.value == "Eclipse") {
            $("#right-text").css("color", "#B1ACC8");
        } else {
            $("#right-text").css("color", chover);
        }
    },
    function(){
        $(".col-50-r").css("background-color", "");    
        $("#right-text").html("&nbsp;");                
    });

    // Gallery Function

    $(".thumb").click(function(){
        let shownimage = $(this).attr("src");
        $("#shown").attr("src", shownimage);
    });

    // Links

    $("#fb-icon").hover(function(){
        $(this).attr("src", "images/facebook_a.svg");
    },
    function(){
        $(this).attr("src", "images/facebook.svg");                  
    });

    $("#ig-icon").hover(function(){
        $(this).attr("src", "images/instagram_a.svg");
    },
    function(){
        $(this).attr("src", "images/instagram.svg");                  
    });

    $("#yt-icon").hover(function(){
        $(this).attr("src", "images/youtube_a.svg");
    },
    function(){
        $(this).attr("src", "images/youtube.svg");                  
    });

/*     $(".c").dblclick(function(){
        let cdblclick = $(this).css("background-color");
        $(".col-left").css("background-color", cdblclick);
    }); */

    // Form Validation

    $("#submit").click(function(){
        if (document.forms["contactform"]["name"].value == "") {
            alert("Kirjoita nimesi.");
            return false;
        } else if (document.forms["contactform"]["subject"].value == "none") {
            alert("Valitse aihe.");
            return false;
        } else if (
            document.forms["contactform"]["subject"].value == "tarjous" &&
            document.forms["contactform"]["email"].value == "" &&
            document.forms["contactform"]["phone"].value == ""
        ) {
            alert("Jätä yhteystietosi, jotta voimme toimittaa tarjouksen.");
            return false;
        } else if (document.forms["contactform"]["message"].value.length < 1) {
            alert("Kirjoita viesti.");
            return false;
        } else {
            alert("Kiitos yhteydenotostasi!");
            return true;
        }
    });

});