//Blog Section start

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
});
$("#prevButton").click(function () {
var activeCard = $(".option.active");
var prevCard = activeCard.prev(".option");

if (prevCard.length === 0) {
    prevCard = $(".option:last");
}

activeCard.removeClass("active");
prevCard.addClass("active");
});

$("#nextButton").click(function () {
var activeCard = $(".option.active");
var nextCard = activeCard.next(".option");

if (nextCard.length === 0) {
    nextCard = $(".option:first");
}

activeCard.removeClass("active");
nextCard.addClass("active");
});

//Blog Section end