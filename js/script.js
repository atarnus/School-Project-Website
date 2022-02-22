$(document).ready(function(){
                
    // Page Navigation

    $("#n1").click(function(){
        $("#p1").slideDown("fast");
        $("#p2").slideUp("fast");
        $("#p3").slideUp("fast");
        $("#p4").slideUp("fast");
        $("#p5").slideUp("fast");
        $(".nav").removeClass("active");
        $("#header").slideUp("fast");
        $("body").css("overflow", "hidden");  

    });
    $("#n2").click(function(){
        $("#p2").slideDown("fast");
        $("#p1").slideUp("fast");
        $("#p3").slideUp("fast");
        $("#p4").slideUp("fast");
        $("#p5").slideUp("fast");
        $(".nav").removeClass("active");                    
        $("#n2").addClass("active");
        $("#header").slideDown("fast");
        $("body").css("overflow", "visible");
    });
    $("#n3").click(function(){
        $("#p3").slideDown("fast");
        $("#p1").slideUp("fast");
        $("#p2").slideUp("fast");
        $("#p4").slideUp("fast");
        $("#p5").slideUp("fast");
        $(".nav").removeClass("active");                    
        $("#n3").addClass("active");
        $("#header").slideDown("fast");
        $("body").css("overflow", "visible");
    });
    $("#n4").click(function(){
        $("#p4").slideDown("fast");
        $("#p1").slideUp("fast");
        $("#p2").slideUp("fast");
        $("#p3").slideUp("fast");
        $("#p5").slideUp("fast");
        $(".nav").removeClass("active");                    
        $("#n4").addClass("active");
        $("#header").slideDown("fast");
        $("body").css("overflow", "visible");
    });
    $("#n5").click(function(){
        $("#p5").slideDown("fast");
        $("#p1").slideUp("fast");
        $("#p2").slideUp("fast");
        $("#p3").slideUp("fast");
        $("#p4").slideUp("fast");
        $(".nav").removeClass("active");                    
        $("#n5").addClass("active");
        $("#header").slideDown("fast");
        $("body").css("overflow", "visible");
    });

    // Colour Picker

    $(".c").click(function(){
        let cclick = $(this).css("background-color");
        $(".col-50-l").css("background-color", cclick);
        $("#left-text").text(this.value);
        $("#left-text").css("color", cclick);
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

    $(".thumb").click(function(){
        let shownimage = $(this).attr("src");
        $("#shown").attr("src", shownimage);
    });

/*     $(".c").dblclick(function(){
        let cdblclick = $(this).css("background-color");
        $(".col-left").css("background-color", cdblclick);
    }); */
});