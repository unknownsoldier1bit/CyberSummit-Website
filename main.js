var loader= getElementById("pre-loader");

window.addEventListener("load",function() {
	setTimeout(function(){
		loader.style.display = "none";
	}, 1500);
});
