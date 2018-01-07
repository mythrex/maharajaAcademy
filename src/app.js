const jquery = require('jquery');
const materializeLoader = require('materialize-loader!./materialize_config/materialize.config.js');
const materializeCss = require('materialize-css');
const materializeConfigSCSS = require('./materialize_config/materialize.config.scss');
const commonStyle = require('./sass/common.sass');
const homeStyle = require('./sass/home.sass');

//TODO: put it in home.js 
// const homeJs = require('./home.js');
const AOC = require('./images/Application of concepts.png');
const ConDev = require('./images/Concept Development.png');
const RelLife = require('./images/Relation of concepts to real life.png');
//for review carousel
const Neeraj = require('./images/reviews/Neeraj.png');
const Amit = require('./images/reviews/Amit.png');
const Himanshu = require('./images/reviews/Himanshu.png');
const Rahul = require('./images/reviews/Rahul.JPG');
const Sudhanshu = require('./images/reviews/Sudhanshu.png');
//document ready\

$(function () {
	$(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		duration: 200
	});

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
})