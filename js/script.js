var navLink = document.getElementById("navLinks");

function showMenu(){
    navLink.style.left= "0px";
}

function hideMenu(){
    navLink.style.left= "-300px";
}

window.sr = new ScrollReveal();

sr.reveal('.header-reveal', {
scale: 1.6,
origin: 'top',
duration: 3000,
delay: 1000,
reset: true,
mobile: false

});
sr.reveal(".text-container", {
    origin: "left",
    duration: 4000,
    distance: "25rem",
    delay: 500,
    reset: true,
    mobile: false
     
});
/*about  page*/
sr.reveal('.about-head', {
   origin: 'top',
    scale: 1.6,
    distance: "25rem",
    duration: 2000,
    reset: true,
    mobile: false
    });
/*review page*/ 
sr.reveal('.review-header', {
  origin: 'top',
  scale: 1.9,
  distance: "25rem",
  duration: 2000,
  reset: true,
  mobile: false
  
});
sr.reveal('.reviewInfo', {
  origin: 'left',
  scale: 1.9,
  distance: "25rem",
  duration: 2000,
  delay: 500,
  reset: true,
  mobile: false
  
});
sr.reveal(".footer-text", {
  origin: 'left',
  duration: 3000,
  distance: "25rem",
  delay: 1000,
  reset: true,
  mobile: false
  
});
/*Animate-left*/ 
sr.reveal(".animate-left",{
  origin: 'left',
  duration: 3000,
  distance: "25rem",
  delay: 1000,
  reset: true,
  mobile: false
});
/*Animate-right */
sr.reveal(".animate-right",{
  origin: 'right',
  duration: 3000,
  distance: "25rem",
  delay: 500,
  reset: true,
  mobile: false
});
/*animate top */
sr.reveal(".animate-top", {
  origin: 'top',
  duration: 3000,
  scale: 1.2,
  distance: "30px",
  delay: 1000,
  reset: true,
  mobile: false
});
/*Animate  bottom*/
sr.reveal(".animate-bottom", {
  origin: 'bottom',
  duration: 3000,
  distance: "30px",
  scale: 1.2,
  delay: 500,
  reset: true,
  mobile: false
 
});
/*animation without scale*/
sr.reveal(".animate-bottom1", {
  origin: 'bottom',
  duration: 3000,
  distance: "30px",
  delay: 500,
  reset: true,
  mobile: false
  
});
/*animate top */
sr.reveal(".animate-top1", {
  origin: 'top',
  duration: 3000,
  distance: "30px",
  delay: 1000,
  reset: true,
  mobile: false
});