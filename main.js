var loader = document.getElementById("pre-loader");

// Show loader immediately, don't wait for full page load
document.addEventListener("DOMContentLoaded", function() {
    // Keep loader visible longer for masked domains
    setTimeout(function(){
        if (loader) {
            loader.style.display = "none";
        }
    }, 2000); // Increased from 1500ms
});


