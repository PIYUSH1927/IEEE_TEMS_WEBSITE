let sideMenu = document.getElementById("sideMenu");
let hmenu = document.getElementById("menuIcon");
hmenu.onclick = function () {
  sideMenu.classList.toggle("open-menu");
}
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
var words = document.getElementsByClassName('hword');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);


// Home Section end


// Cursor effects
const circle = document.getElementById('circle');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
});

const elementsToEnlarge = document.querySelectorAll('.hover-enlarge');

elementsToEnlarge.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    circle.classList.add('enlarge');
  });

  element.addEventListener('mouseleave', () => {
    circle.classList.remove('enlarge');
  });
});