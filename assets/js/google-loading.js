function id(el) {
	return document.getElementById(el);
}

function hide(el) {
	id(el).style.display = 'none';
}

window.onload = function() {
	time();
}

function time() {
	setTimeout(function(){ finaly(); }, 2000);
}
	
function finaly(){
	id('body').style.display = 'block';
	hide('loading');
}
