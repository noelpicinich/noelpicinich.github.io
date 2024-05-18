$(document).ready(function() {

	var images = ["images/gallery/slide1.jpg", "images/gallery/slide2.jpg", "images/gallery/slide3.jpg", "images/gallery/slide4.jpg", "images/gallery/slide5.jpg", "images/gallery/slide6.jpg"];
	var current = 0;
	var next;

	$("#left").click( function() {
		next = (current - 1) % (images.length - 1);
		if (next < 0) {
			next = images.length - 1;
		}
		console.log(next);
		$("#current_img").attr("src", images[next]);
		current = next;
	});

	$("#right").click( function() {
		next = (current + 1) % images.length;
		$("#current_img").attr("src", images[next]);
		current = next;
	});

});
