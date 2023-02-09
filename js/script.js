document.getElementById('submit').addEventListener('click', function() {
    var cardRating = document.querySelector('.card-rating');
    var cardResult = document.querySelector('.card-result')
    var scoreElements = document.getElementsByName('score');
    var score = '';
    for (var i = 0; i < scoreElements.length; i++) {
      if (scoreElements[i].checked) {
        score = scoreElements[i].value;
        break;
      }
    }
    document.getElementById('selected-score').innerHTML = 'You selected ' + score + ' out of 5';
    cardRating.classList.toggle('hidden');
    cardResult.classList.toggle('visible')
  });