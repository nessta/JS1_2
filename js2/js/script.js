// Программа введения имен
"use strict"

var Names = [];

for (var i = 0; i < 5; i++) {
    var User = prompt('Введите имя', ' ');
    Names.push(User);
}

var UserName = prompt('Имя пользователя', ' ');

var rightName = false;

for (var i = 0; i < Names.length; i++){
  if (Names[i] == UserName){
    rightName = true;
	alert(UserName + ', Вы успешно вошли');
	break;
}else {
  alert('Ошибка');
}
}
