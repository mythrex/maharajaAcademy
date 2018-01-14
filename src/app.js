const jquery = require('jquery');
const materializeCss = require('materialize-css');
const materializeLoader = require('materialize-loader!./materialize_config/materialize.config.js');
const materializeConfigSCSS = require('./materialize_config/materialize.config.scss');
const commonStyle = require('./sass/common.sass');
const homeStyle = require('./sass/home.sass');
const galleryStyle = require('./sass/gallery.sass');
//TODO: put it in home.js 
// const homeJs = require('./home.js');
const NavbarBrandLogo = require('./images/Website_Navbar_Logo.png')

$(function () {
	$('#navbar-brand-logo').attr('src',NavbarBrandLogo);
})