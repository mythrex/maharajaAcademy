const charts = require('./js/charts-loader.js');
const resultData = require('./scholarship_result.json');

$(function () {
	inits();
})

document.currentId = 0;

function inits() {
	$('.modal').modal();
	$('select').material_select();
}

function refreshDOM(){
	appendElements();
}

function appendElement(){

}