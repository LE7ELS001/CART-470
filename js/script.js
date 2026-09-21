const galleryImages = document.querySelectorAll(".image-gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.querySelector(".close");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

    });

});


closeButton.addEventListener("click", function () {

    lightbox.style.display = "none";

});


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});