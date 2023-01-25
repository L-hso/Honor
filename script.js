cont = 1
function insert(num){
	document.getElementById('result').innerHTML += num
}
function clean(){
	document.getElementById('result').innerHTML = ''
}
function apaga(){
	document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.substring(0, document.getElementById('result').innerHTML.length -1)
}
function calcular(){
	if (document.getElementById('result').innerHTML){
(	document.getElementById('result').innerHTML = parseFloat(eval(document.getElementById('result').innerHTML)).toFixed(2)).toString()	
	} else {
		document.getElementById('result').innerHTML = "..."
	}
}