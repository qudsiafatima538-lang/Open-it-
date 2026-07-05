/* ====================================
   HAPPY BIRTHDAY BABYYYYYYYY ❤️
   Made with love by Chhotu 😙
==================================== */

const loader = document.getElementById("loader");
const heartButton = document.getElementById("heartButton");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const hero = document.getElementById("hero");
const typingText = document.getElementById("typingText");
const envelope = document.querySelector(".envelope");
const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");
const heartsContainer = document.getElementById("heartsContainer");

/* --------------------------
Heart Intro
-------------------------- */

heartButton.addEventListener("click",()=>{

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},1200);

music.play().catch(()=>{});

createHearts();

typeWriter();

});

/* --------------------------
Music Button
-------------------------- */

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🎵";

}else{

music.pause();

musicBtn.innerHTML="🔇";

}

});

/* --------------------------
Envelope
-------------------------- */

envelope.addEventListener("click",()=>{

envelope.classList.toggle("open");

});

/* --------------------------
Gift Button
-------------------------- */

giftButton.addEventListener("click",()=>{

giftMessage.style.display="block";

confetti({

particleCount:300,

spread:180,

origin:{y:.6}

});

});

/* --------------------------
Typewriter
-------------------------- */

const message=

`Every moment with you has made my world brighter.

Today isn't just your birthday...

It's the day my favorite person came into this world.

Happy Birthday Babyyyyyyyy ❤️

Forever Yours,

Chhotu 😙`;

typingText.innerHTML="";

let i=0;

function typeWriter(){

if(i<message.length){

typingText.innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

/* --------------------------
Floating Hearts
-------------------------- */

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

(Math.random()*25+15)+"px";

heart.style.animationDuration=

(Math.random()*6+6)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

},300);

            }
