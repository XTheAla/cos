document.addEventListener("DOMContentLoaded", function () {
  var elem = document.querySelector('.quotes-wrapper');
  var flkty = new Flickity(elem, {
    cellAlign: 'center',
    contain: true
  });
  var galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(function (item) {
    item.addEventListener('click', showRecipe);
  });
  function showRecipe(event) {
    var recipeContainer = document.getElementById('recipe-container');
    var clickedItem = event.currentTarget;
    var recipeName = clickedItem.getAttribute('data-recipe');

    var recipes = {
      'arbuzowy-shake': 'Składniki:<br> - 1 arbuz<br> - 1 banan<br> - 200 ml mleka<br> - łyżka miodu<br> -kostki lodu',
      'koktajl-wapno': 'Składniki:<br> - 2 limony (sok)<br> - 1 wapno (sok)<br> - 60 ml rumu białego<br>30 ml syropu cukrowego<br> - kostki lodu', 
      'lemoniada': 'Składniki:<br> - 4-5 świeżych cytryn<br> - 1 szklanka cukru<br> - 6 szklanek wody<br> - kostki lodu',
      'mix': 'Składniki:<br> - 1 szklanka soku pomarańczowego<br> - 1/2 szklanki soku jabłkowego<br> - 1/4 szklanki soku malinowego<br> - 1/4 szklanki soku z białego winogrona<br> - kostki lodu',
      'niebieska-margarita': 'Składniki:<br> - 50 ml tequili<br> - 25 ml likieru triple sec<br> - 25 ml syropu z bzu (lub inny syrop o smaku niebieskim malibu)<br> - 25 ml soku z limonki<br> - kostki lodu',
      'różowy płyn': 'Składniki:<br> - 200 ml soku z malin (lub inny sok czerwony)<br> - 200 ml soku z truskawek (lub inny sok różowy)<br> - 200 ml soku z białego winogrona (lub inny jasny sok)<br> - 2 łyżki syropu malinowego<br> - kostki lodu',
      'sok pomarańczowy': 'Składniki:<br> - 4-5 świeżych pomarańczy',
      'truskawki': 'Składniki:<br> - 2 szklanki świeżych truskawek<br> - 1-2 łyżki cukru<br> - 1 łyżka soku z cytryny<br> - 2 szklanki wody<br> - kostki lodu',
    };
    
    recipeContainer.innerHTML = '<h3>Przepis na ' + recipeName + '</h3><p>' + recipes[recipeName] + '</p>';
  }
  (function () {
    'use strict';

    var linksSelector = '.navigation a';

    var onLinkClick = function (event) {
      event.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    var links = document.querySelectorAll(linksSelector);

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', onLinkClick);
    }
  })();
});
document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', showResults);
});

function showResults() {
  var quizForm = document.getElementById('quizForm');
  var resultsContainer = document.getElementById('results');

  var score = 0;

  var questions = [
      { question: 'question1', correctAnswer: 'b' },
      { question: 'question2', correctAnswer: 'c' },
      { question: 'question3', correctAnswer: 'a' }
  ];

  questions.forEach(function (q) {
      var selectedOption = quizForm.querySelector('input[name="' + q.question + '"]:checked');
      if (selectedOption) {
          if (selectedOption.value === q.correctAnswer) {
              score++;
          }
      }
  });

  var percentage = (score / questions.length) * 100;

  resultsContainer.innerHTML = '<p>Twój wynik: ' + score + ' z ' + questions.length + ' (' + percentage + '%)</p>';
}