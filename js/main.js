$(document).ready(function() {

    $("#toggler-btn").click(function() {
        console.log("show");
        $(".main-nav").slideToggle();
    });
})