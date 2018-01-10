
//images
const Shivam = require('./images/profile_pic/shivamKaushik.jpeg');
const Goswami = require('./images/profile_pic/goswami.jpeg');
const Santraj = require('./images/profile_pic/santaraj.png');
const Pankaj = require('./images/profile_pic/pankajThakur.jpeg');

$(function () {
	$(".button-collapse").sideNav();
	
	var imgShivam = $('#img-shivam');
	imgShivam.attr('src',Shivam);

	var imgGoswami = $('#img-goswami');
	imgGoswami.attr('src',Goswami);

	var imgSantraj = $('#img-santraj');
	imgSantraj.attr('src',Santraj);

	var imgPankaj = $('#img-pankaj');
	imgPankaj.attr('src',Pankaj);
})