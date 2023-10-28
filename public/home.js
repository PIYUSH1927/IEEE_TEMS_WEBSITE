window.addEventListener('load', (event) => {
  window.scrollTo(0, 0); 
});
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


let sideMenu = document.getElementById("sideMenu");
let hmenu = document.getElementById("menuIcon");
hmenu.onclick = function () {
  sideMenu.classList.toggle("open-menu");
}
let menuElt = document.getElementsByClassName("menu-elt");
for (let x=0;x<menuElt.length;x++){
    menuElt[x].onclick= function () {
    sideMenu.classList.toggle("open-menu");
  }
}

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

// Board Section start
var tabs = $(".tabs");
var selector = $(".tabs").find("a").length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  left: activeItem.position.left + "px",
  width: activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
  e.preventDefault();
  $(".tabs a").removeClass("active");
  $(this).addClass("active")
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
    // document.getElementById(this.dataset.id).className = 'active-year';
    // $(this.dataset.id).addClass("active-year");
  $(".selector").css({
    left: itemPos.left + "px",
    width: activeWidth + "px"
  });
});

let board2022 = document.getElementById('Board-switch-2022');
let board2023 = document.getElementById('Board-switch-2023');
let board2023Content = document.getElementById('Board2023');
let board2022Content = document.getElementById('Board2022');

board2022.addEventListener('click', function(){
    board2023Content.classList.remove('active-year-board');
    board2022Content.classList.add('active-year-board');
})
board2023.addEventListener('click', function(){
    board2022Content.classList.remove('active-year-board');
    board2023Content.classList.add('active-year-board');
})



// Board Section end


//Events Section start
var tabs = $(".tabs");
var selector = $(".tabs").find("a").length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
$(".selector").css({
    left: activeItem.position.left + "px",
    width: activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
    e.preventDefault();
    $(".tabs a").removeClass("active");
    $(this).addClass("active")
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".2023").removeClass("active-year");
    $(".2022").removeClass("active-year");
    // document.getElementById(this.dataset.id).className = 'active-year';
    // $(this.dataset.id).addClass("active-year");
    $(".selector").css({
        left: itemPos.left + "px",
        width: activeWidth + "px"
    });
});

let events2022 = document.getElementById('2022');
let events2023 = document.getElementById('2023');
let events2023Content = document.getElementById('2023events');
let events2022Content = document.getElementById('2022events');
let active2023 = document.getElementById("2023active");
let active2022 = document.getElementById("2022active");

events2022.addEventListener('click', function(){
    events2023Content.classList.remove('active-year');
    events2022Content.classList.add('active-year');
    handelChange(8)
    
})
events2023.addEventListener('click', function(){
    events2022Content.classList.remove('active-year');
    events2023Content.classList.add('active-year');
    handelChange(0)
})

function handelChange(i){
    for(let i=0; i<contentBx.length; i++){
        contentBx[i].className = 'contentBx';
    }
    for (let j = 0; j < descriptionBx.length; j++) {
        descriptionBx[j].className = 'descriptionBx';
    }
    document.getElementById(imgBx[i].dataset.id).className = 'contentBx active';
    // console.log(this.dataset.id + '_description');
    document.getElementById(imgBx[i].dataset.id + '_description').className = 'descriptionBx event-active';

    for(let i=0; i<imgBx.length; i++){
        imgBx[i].className = 'imgBx';
    }
    imgBx[i].className = 'imgBx active';
}

let imgBx = document.querySelectorAll('.imgBx')
let contentBx = document.querySelectorAll('.contentBx')
let descriptionBx = document.querySelectorAll('.descriptionBx');

for(let i=0; i < imgBx.length; i++){
    imgBx[i].addEventListener('mouseover', function(){
        for(let i=0; i<contentBx.length; i++){
            contentBx[i].className = 'contentBx';
        }
        for (let j = 0; j < descriptionBx.length; j++) {
            descriptionBx[j].className = 'descriptionBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';
        // console.log(this.dataset.id + '_description');
        document.getElementById(this.dataset.id + '_description').className = 'descriptionBx event-active';

        for(let i=0; i<imgBx.length; i++){
            imgBx[i].className = 'imgBx';
        }
        this.className = 'imgBx active';
    })
}

//Events Section end