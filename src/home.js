const Wallpaper = require('./images/wallpaper.jpg');
const GrowthWallpaper = require('./images/growth_wallpaper.jpg');
const AOC = require('./images/Application of concepts.png');
const ConDev = require('./images/Concept Development.png');
const RelLife = require('./images/Relation of concepts to real life.png');
//for review carousel
const Neeraj = require('./images/reviews/Neeraj.png');
const Amit = require('./images/reviews/Amit.png');
const Himanshu = require('./images/reviews/Himanshu.png');
const Rahul = require('./images/reviews/Rahul.jpg');
const Sudhanshu = require('./images/reviews/Sudhanshu.png');
//sections
const LatestTechImg = require('./images/Updates_on_Laptop.png');
const Stressed = require('./images/Stressed.png');
//document ready\
const $ = require('./app.js');

$(function () {
	$(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		duration: 200
	});
	$('.parallax').parallax();
	$('.modal').modal();

	var imgAOC = $('#img-aoc');
	imgAOC.attr('src',AOC);

	var imgConDev = $('#img-conDev');
	imgConDev.attr('src',ConDev);

	var imgRelLife = $('#img-relLife');
	imgRelLife.attr('src',RelLife);

	var neeraj = $('#neeraj');
	neeraj.attr('src',Neeraj);

	var rahul = $('#rahul');
	rahul.attr('src',Rahul);

	var amit = $('#amit');
	amit.attr('src',Amit);

	var himanshu = $('#himanshu');
	himanshu.attr('src',Himanshu);

	var sudhanshu = $('#sudhanshu');
	sudhanshu.attr('src',Sudhanshu);

	var latestTech = $('#latest-tech');
	latestTech.attr('src',LatestTechImg);

	var stressed = $('#img-stressed');
	stressed.attr('src',Stressed);

	var topSectionImg = $('#top-section-img');
	topSectionImg.attr('src',Wallpaper);

	var imgGrowth = $('#img-growth');
	imgGrowth.attr('src',GrowthWallpaper);
})