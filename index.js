function generateImages(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status == "error") {
        throw Error(responseJson.message);
      }
      $('.output').html(`<img src="${responseJson.message}" class="output-img">`);
    })
    .catch(error => $('.output').html(`<p>${error}</p>`));
  $('.output').removeClass('hidden');
}

function handleInput() {
  $('form').submit(function(event) {
    event.preventDefault();
    generateImages($('input').val().toLowerCase());
  });
}

$(handleInput());