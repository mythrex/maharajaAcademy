//images
const AocByShivam = require('./images/gallery/New Way to Teach.jpg');
const Practical = require('./images/gallery/Practical.png');
const Motivation = require('./images/gallery/Motivation.jpg');

$(function () {
	$(".button-collapse").sideNav();
	$('#carousel-gallery.carousel-slider').carousel({
		fullWidth: true,
		indicators: true,
	});

	$('#aoc-by-shivam').attr('src',AocByShivam);

	$('#practicals').attr('src',Practical);

	$('#motivation').attr('src',Motivation);
});