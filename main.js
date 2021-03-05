$(document).ready( function() {

    $(".next i").click( function() {
        nextImg();
    })

    $(".prev i").click( function() {
        prevImg();
    })

})

//funzione per andare avanti nelle img
function nextImg() {
    var imgActive = $(".images img.active");
    var circleActive = $(".nav i.active");

    if (imgActive.hasClass("last")) {
        imgActive.removeClass("active");
        $(".images img.first").addClass("active");

        circleActive.removeClass("active");
        $(".nav i.first").addClass("active");
    } else {
        imgActive.removeClass("active");
        imgActive.next("img").addClass("active");

        circleActive.removeClass("active");
        circleActive.next("i").addClass("active");
    }    
}
//funzione per tornare indietro nelle img
function prevImg() {
    var imgActive = $(".images img.active");
    var circleActive = $(".nav i.active");

    if (imgActive.hasClass("first")) {
        imgActive.removeClass("active");
        $(".images img.last").addClass("active");
        
        circleActive.removeClass("active");
        $(".nav i.last").addClass("active")
    } else {
        imgActive.removeClass("active");
        imgActive.prev("img").addClass("active");

        circleActive.removeClass("active");
        circleActive.prev("i").addClass("active");
    }    
}