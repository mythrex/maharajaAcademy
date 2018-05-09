const ejs = require('./js/ejs');
const charts = require('./js/charts-loader.js');
const resultData = require('./scholarship_result.json');


var passing_criteria = 55; 
$(function () {
	$resultTemplate = $('#result-template').html();
	$resultContainer = $('#result-container');


	inits();
	refreshDOM();
})

document.currentIndex = 0;

function inits() {
	$('.modal').modal();
	$('select').material_select();
}

function refreshDOM(){
	appendElements(document.currentIndex);
}

function appendElements(curIndex){
	if(curIndex != null || curIndex != undefined){
		var currentUser = resultData[curIndex];
		currentUser["passingCriteria"] = passing_criteria;
		var compiled = ejs.render($resultTemplate, currentUser);
		$resultContainer.empty().append(compiled)
	}
}