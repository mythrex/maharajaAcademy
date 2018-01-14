const videos = require('./videos.json');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(function () {
	var quote = $('#quote');
	var quoteAuthor = $('#quote-author');
	var videoName = $('#video-name');
	var videoDescription = $('#video-description');
	var videoAuthor = $('#video-author');
	var videoURL = $('#video-url');

	$.get('http://quotes.rest/qod.json?category=inspire  ', function(data) {
		var quoteText = data.contents.quotes.quote;
		var authorText = data.contents.quotes.author;

		quote.text(quoteText);
		quoteAuthor.text(authorText);
	});

	var rNum = getRandomInt(videos.length);
	var curVideo = videos[rNum];
	videoName.text(curVideo.name);
	videoDescription.text(curVideo.description);
	videoAuthor.text(curVideo.author);
	videoAuthor.attr('href', curVideo['channel-link']);
	videoURL.attr('src', curVideo['video_url']);
})