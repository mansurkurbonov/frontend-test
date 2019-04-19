var initialIndex = 1;

deviceOrientationSlider();
slides(initialIndex);

function slide(val) {
    slides(initialIndex += val);
}

function checkSlide(val) {
    slides(initialIndex = val);
}

function slides(val) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var indicators = document.getElementsByClassName("indicator");
    
    if (val > slides.length) { 
        initialIndex = 1
    }

    if (val < 1) {
        initialIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }

    slides[initialIndex-1].style.display = "block";  
    indicators[initialIndex-1].className += " active";
}

function deviceOrientationSlider() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', deviceOrientationHandler, true);
    } else {
        console.log("DeviceOriention not supported")
    }
}

function deviceOrientationHandler(event) {
    var alpha = event.alpha
    if (alpha >= 10 && alpha <= 70) {
        slide(1)
    } else if (alpha >= 290 && alert <= 350) {
        slide(-1)
    }
}

// (function(scope) {
//     setTimeout(function() {
//         slide(-1)                
//     }, 2000);
// }(this));