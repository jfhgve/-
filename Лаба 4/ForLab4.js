function add(n,c)
{
	var colv=1, j=0;
    var table=document.getElementById("tb");
    if (table.rows[table.rows.length-1].cells[0].innerHTML=="Сумма"){
        table.deleteRow(table.rows.length-1);
	}
	for (var i=0; i<(table.rows.length); i++){
		if (table.rows[i].cells[2].innerHTML===n){
			j=-1;
			table.rows[i].cells[1].innerHTML=Number(table.rows[i].cells[1].innerHTML)+1;
		}
	}
	if(j!=-1){
		table.innerHTML+="<tr><td>"+Number(table.rows.length)+"</td><td>"+colv+"</td><td>"+n+"</td><td onmouseover='mouseOver(this)' onmouseout='mouseOut(this)'>"+c+"</td></tr>";
	}
}
function add2(n,c)
{	var table=document.getElementById("maintb"), j=0;
	for (var i=0; i<(table.rows.length); i++){
		if (table.rows[i].cells[1].innerHTML===n){
			alert("Такой товар уже существует")		
			j=-1;
		}
	}
    if((c<=0)||(n=='')){
        alert("Введите корректные данные");
	}
    else if (j!=-1){    
        table.innerHTML+="<tr onmouseover='mouseOver(this)' onmouseout='mouseOut(this)'' onclick='tbadd(this)'><td>"+Number(table.rows.length)+"</td><td>"+n+"</td><td onmouseover='mouseOver(this)' onmouseout='mouseOut(this)'>"+c+"</td></tr>";
    }
}
function butadd()
{
    add2(document.getElementById("not").value, document.getElementById("cost").value);
    document.getElementById("not").value='';
    document.getElementById("cost").value='';
}
function tbadd(el)
{
    var n=el.cells[1].innerHTML;
    var c=el.cells[2].innerHTML;
    add(n,c);
}
function sum()
{
    var table=document.getElementById("tb");
    if (table.rows[table.rows.length-1].cells[1].innerHTML=="Сумма")
        table.deleteRow(table.rows.length-1);
    var sum=0;
    for(var i=1;i<table.rows.length;i++)
        sum+=(Number(table.rows[i].cells[3].innerHTML)*Number(table.rows[i].cells[1].innerHTML));
    table.innerHTML+="<tr id='all'><td>Сумма</td><td onmouseover='mouseOver(this)' onmouseout='mouseOut(this)'>"+sum+"</td>";
}
function mouseOver(el){
    el.style.background="yellow";
}
function mouseOut(el){
    el.style.background="";
}
