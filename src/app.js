const jquery = require('jquery');
const materializeLoader = require('materialize-loader!./materialize_config/materialize.config.js');
const materializeCss = require('materialize-css');
const materializeConfigSCSS = require('./materialize_config/materialize.config.scss');
const commonStyle = require('./sass/common.sass');
const homeStyle = require('./sass/home.sass');
//document ready\

$(function () {
	$(".button-collapse").sideNav();

})