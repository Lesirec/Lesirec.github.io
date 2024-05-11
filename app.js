let tg = window.Telegram.WebApp;

// Получаем данные о размере экрана пользователя
let screenWidth = window.innerWidth;

// Обновляем стили в зависимости от размера экрана
if (screenWidth < 768) {
  // Пример изменения стилей для мобильных устройств
  document.querySelector('.inner').style.gridTemplateColumns = '1fr';
} else {
  // Вернуть обычные стили для планшетов и десктопов
  document.querySelector('.inner').style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr)';
}


tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnID = document.getElementById("btnID");

btn1.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
});

btn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 2!");
    item = "2";
    tg.MainButton.show();
  }
});

btn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 3!");
    item = "3";
    tg.MainButton.show();
  }
});

btn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 4!");
    item = "4";
    tg.MainButton.show();
  }
});

btn5.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 5!");
    item = "5";
    tg.MainButton.show();
  }
});

btn6.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 6!");
    item = "6";
    tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);



// Получаем ID пользователя из URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Отображаем ID пользователя на странице
const usercard = document.getElementById('usercard');
usercard.innerHTML = ID Telegram пользователя: ${userId};

