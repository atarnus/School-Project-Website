document.getElementById("top").innerHTML =
"<img src='images/banner2.png' width='902px' height='195px'>";
	
document.getElementById("navpanel").innerHTML = 
"<ul id='menu'>" +
"<li><a href='index.html'>Esittely</a></li>" +
"<li><a href='tyokokemus.html'>Työkokemus</a></li>" +
"<li><a href='vapaaehtoistyo.html'>Vapaaehtoistyö</a></li>" +
"<li><a href='koulutus.html'>Koulutus</a></li>" +
"<li><a href='yhteystiedot.html'>Yhteystiedot</a></li>" +
"<li><a href='en/index.html'>English</a></li>" +
"</ul>";


// $("#c01").click(function(){

    $(document).ready(function(){

$("#c01").click(function(){
    // let color = $(this).css("background-color").value;
    $("#leftwall").css("background-color", "green");
});

$("#c02").hover(function(){
    $(this).css("background-color", "green");
},
function(){
    $(this).css("background-color", "");                    
}
);
});