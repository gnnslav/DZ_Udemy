var menu = document.querySelector('.menu');
var li = document.createElement('li');

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

var body = document.querySelector('body');
body.style.backgroundImage = 'url(img/apple_true.jpg)';

var column = document.querySelectorAll('.column');
var title = document.getElementById('title');
var newTitle = document.createElement('div');
newTitle.classList.add('title');
newTitle.textContent = 'Мы продаем только подлинную технику Apple';
column[1].replaceChild(newTitle, title);


var adv = document.querySelector('div .adv');
column[1].removeChild(adv);

var answerBox = document.querySelector('#prompt');
answerBox.textContent = prompt('Ваше отношение к технике Apple?');


