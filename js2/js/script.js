// Программа введения имен
"use strict"

var Names = [];

for (var i = 0; i < 5; i++) {
    var User = prompt('Введите имя', ' ');
    Names.push(User);
}

var UserName = prompt('Имя пользователя', ' ');
var rightUserName = false;

for (var i = 0; i <=Names.length; i++){
  if (Names[i] == UserName){
	rightUserName = true;
	alert(UserName + ', Вы успешно вошли');
	break;
	}
}
if (!rightUserName) {
  alert( 'Неправильное имя!');
}