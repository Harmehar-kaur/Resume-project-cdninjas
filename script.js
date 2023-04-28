var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

// For smooth scroll
for (var i = 0; i< navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        interval=setInterval(scrollVertically,50 , targetSection);
    });
}

function scrollVertically(){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}

var progressBars = document.querySelectorAll('skills-progress > div');
var skillsContainer = document.getElementById('skills-container');

// for skillbar auto Fill 
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function checkScroll(){
    var coordinates= skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    }else if (coordinates.top > window.innerHeight) {
        animationDone=false;
        intialiseBars();
    }
}

function intialiseBars(){
    for (let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

function fillBars(){
 for(let bar of progressBars){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = '0';
    let interval = setInterval(function(){
        if (currentWidth > targetWidth){
         clearInterval(interval);
         return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    },5);
 }
}

