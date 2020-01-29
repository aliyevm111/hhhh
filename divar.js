// alert('a');
setInterval(name1,1000)
var a=6;
var b=0;
var c=0;
function name1(x) {
	// alert('rotate'+'('+'90'+')');
	document.getElementsByClassName('second')[0].style.transform = 
	'rotate'+'('+a+'deg'+')';
	a+=6;
	document.getElementsByClassName('minute')[0].style.transform = 
	'rotate'+'('+a/60+'deg'+')';
	document.getElementsByClassName('hour')[0].style.transform =
	 'rotate'+'('+a/720+'deg'+')';
	 // alert(a)
}
function name2(x) {
	// alert(document.getElementsByTagName('input')[0].value*30-6)
	
	// alert(a)
	
	 if (document.getElementsByTagName('input')[0].value>23 || 
	 	document.getElementsByTagName('input')[1].value>59) {
	 	alert('it is not true')
	 }
	 else{
	 	a=(document.getElementsByTagName('input')[0].value*60*360)+
	(document.getElementsByTagName('input')[1].value*360);
	 	document.getElementsByClassName('hour')[0].style.transform =
	 'rotate'+'('+a/720+'deg'+')';
	 document.getElementsByClassName('minute')[0].style.transform =
	 'rotate'+'('+a/60+'deg'+')';
	 }
}