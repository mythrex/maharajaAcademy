const videos = require('./videos.json');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(function () {
	
	var videoName = $('#video-name');
	var videoDescription = $('#video-description');
	var videoAuthor = $('#video-author');
	var videoURL = $('#video-url');


	var rNum = getRandomInt(videos.length);
	var curVideo = videos[rNum];
	videoName.text(curVideo.name);
	videoDescription.text(curVideo.description);
	videoAuthor.text(curVideo.author);
	videoAuthor.attr('href', curVideo['channel-link']);
	videoURL.attr('src', curVideo['video_url']);
})