let slideIndex = 0;

const featureSlides = () => {

    const features = document.getElementsByClassName('slides');
    const dots = document.getElementsByClassName('dot');
    
    for (let i = 0; i < features.length; i++) {
        features[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > features.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    features[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(featureSlides, 3000);
};

featureSlides();