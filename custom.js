var xhr = new XMLHttpRequest(); // create XmlHttpRequest object
var button

xhr.onload = function () {
	if (xhr.status === 200) { // if server is okay
		responseObject = JSON.parse(xhr.responseText)

		// Build up string with new content
		var newContent = ' '
		for (var i = 0; i < responseObject.artists.length; i++) {
			newContent += '<div>'
			newContent += '<img src="' + responseObject.artists[i].work + '" '
			newContent += 'alt="' + responseObject.artists[i].title + '">'
			newContent += '<p><strong>' + responseObject.artists[i].title + '</strong><br>'
			newContent += responseObject.artists[i].name + '<br><em>'
			newContent += responseObject.artists[i].medium + '</span></p>'
			newContent += '</div>'
		}

		document.querySelector('#content').innerHTML = newContent
	}
}


xhr.open('GET', 'data-2.json')
	xhr.send()

button = document.querySelector('.show')

button.addEventListener('click', function () {
	xhr.open('GET', 'data.json')
	xhr.send()
})
