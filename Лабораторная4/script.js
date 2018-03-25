function add() {

  var nomer = 0;
  var name = document.getElementsByName('name')[0];
  var coast = document.getElementsByName('coast')[0];
  if ((name.value == '') || (coast.value == '')){
    alert('Введены пустые поля');
  }
  else {
    if (document.getElementById('catalog').children.length == 1){
      nomer = 1;
    } else {
      nomer = document.getElementById('catalog').children.length;
    }
    catalog.innerHTML += "<tr id='tovar_" + nomer + "'>" + "<td>" + name.value + "</td>" + "<td class = 'cena'>" + coast.value + "</td>" + "<td>" + "<button onclick = '" + "tobask(" + nomer + ")'>Add</button>" + "</td>" + "</tr>"
    name.value = '';
    coast.value = '';
  }
}

function tobask(nom) {
    var stroka = document.getElementById('tovar_'+nom);
    var polya = stroka.getElementsByTagName('td');
    if (document.getElementById('basket_tovar_' + nom) == null){
      korsina.innerHTML += "<tr id = 'basket_tovar_" + nom + "'>" + "<td>" + polya[0].innerHTML + "</td>" + "<td>" + polya[1].innerHTML + "</td>" + "<td id = 'count_tovars_" + nom + "'>" + 1 + "</td>" + "<td><button onclick = 'del_from_bask(" + nom + ")'>Delete</button></td>" + "</tr>";
    }
    else {
      document.getElementById('count_tovars_' + nom).innerHTML = Number(document.getElementById('count_tovars_' + nom).innerHTML) +  1;
    }
    summa.innerHTML = Number(summa.innerHTML) + Number(polya[1].innerHTML);
}

function del_from_bask(nom) {
  var stroka = document.getElementById('basket_tovar_' + nom);
  if (Number(document.getElementById('count_tovars_' + nom).innerHTML) > 1){
    document.getElementById('count_tovars_' + nom).innerHTML = Number(document.getElementById('count_tovars_' + nom).innerHTML) -  1;
    summa.innerHTML = Number(summa.innerHTML) - Number(    stroka.children[1].innerHTML);
  }
  else {
    stroka.parentNode.innerHTML = '';
    summa.innerHTML = Number(summa.innerHTML) - Number(stroka.children[1].innerHTML);
  }
}
