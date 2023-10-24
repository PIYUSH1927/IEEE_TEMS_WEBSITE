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


// Home Section
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

const card = document.querySelector(".card"),
      letters = card.querySelector(".card-letters");

const handleOnMove = e => {
  const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letters.style.setProperty("--x", `${x}px`);
  letters.style.setProperty("--y", `${y}px`);

  letters.innerText = randomString(50000);    
}

card.onmousemove = e => handleOnMove(e);

card.ontouchmov

// Home Section end