document.addEventListener("DOMContentLoaded", function() {
    const featuredImage = document.getElementById("featured-image");
    const thumbnails = document.querySelectorAll("#gallery ul li img");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const largeImageSrc = this.src.replace("small", "large");
            featuredImage.src = largeImageSrc;
            featuredImage.alt = this.alt;
            featuredImage.nextElementSibling.textContent = this.alt;
        });
    });
});
