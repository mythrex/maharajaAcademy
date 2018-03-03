const jquery = require('jquery');
const materializeCss = require('./css/materialize.min.css');
const materializeJS = require('./js/materialize.min.js');
const commonStyle = require('./sass/common.sass');
const homeStyle = require('./sass/home.sass');
const galleryStyle = require('./sass/gallery.sass');
//TODO: put it in home.js 
// const homeJs = require('./home.js');
const NavbarBrandLogo = require('./images/Website_Navbar_Logo.png')
const favicon = require('./images/favicon.png')

$(function () {
	$(".button-collapse").sideNav();
	$('#navbar-brand-logo').attr('src',NavbarBrandLogo);
})
module.exports = $;