const ejs = require('./js/ejs');
const resultData = require('./scholarship_result.json');


var passing_criteria = 50;
$(function () {
	$resultTemplate = $('#result-template').html();
	$resultContainer = $('#result-container');
	$optionsTemplate = $('#options-template').html();
	$modal = $('.modal');

	var compiledOptions = ejs.render($optionsTemplate, {resultData: resultData});
	$studentSelect = $('#student-select');
	$studentSelect.append(compiledOptions);
	inits();
	$('#btn-select-current-user').click(selectCurrentUser);
	refreshDOM();
})

document.currentIndex = null;

function inits() {
	$modal.modal();
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
		$resultContainer.empty().append(compiled);
		makeChart(currentUser);
	}else{
		$resultContainer.empty().append('<p class="flow-text text-muted">Please click on search button to view your result.</p>');
	}
	
}

function selectCurrentUser(e) {
	document.currentIndex = +$studentSelect.val();
	refreshDOM();
	$modal.modal('close');
}

function makeChart(curUserObj) {
	google.charts.load('current', {'packages':['corechart']});

	// Set a callback to run when the Google Visualization API is loaded.
	google.charts.setOnLoadCallback(drawChart);

	// Callback that creates and populates a data table,
	// instantiates the pie chart, passes in the data and
	// draws it.
	function drawChart() {

	  // Create the data table.
	  var data = new google.visualization.DataTable();
	  data.addColumn('string', 'Marking');
	  data.addColumn('number', 'Slices');
	  data.addRows([
	    ['Marks Gained', curUserObj["marks_gained"]],
	    ['Negative Marking', curUserObj["marks_lost"]],
	    ['Marks Unattempted', curUserObj["marks_unattempted"]],
	  ]);

	  // Set chart options
	  var options = {'title':'Your Result',
	                 'width':"100%",
	                 'height':"300"};

	  // Instantiate and draw our chart, passing in some options.
	  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	  chart.draw(data, options);
	}

}