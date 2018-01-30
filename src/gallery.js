//images
const AocByShivam = require('./images/gallery/New Way to Teach.jpg');
const Practical = require('./images/gallery/Practical.png');
const Motivation = require('./images/gallery/Motivation.jpg');
const AocSemiconductors = require('./images/Aoc Semicondutors.png');
const AocSemiconductors1 = require('./images/Aoc Semicondutors 1.png');
const AocSemiconductors2 = require('./images/Aoc Semicondutors 2.jpeg');
$(function () {
	$(".button-collapse").sideNav();
	$('#carousel-gallery.carousel-slider').carousel({
		fullWidth: true,
		indicators: true,
	});

	$('#aoc-by-shivam').attr('src',AocByShivam);

	$('#practicals').attr('src',Practical);

	$('#motivation').attr('src',Motivation);
	
	$('#aoc-semiconductors').attr('src',AocSemiconductors);

	$('#aoc-semiconductors-1').attr('src',AocSemiconductors1);

	$('#aoc-semiconductors-2').attr('src',AocSemiconductors2);
});