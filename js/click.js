var btn = document.querySelector('.button');

btn.onclick = function(){
console.log(btn);
	btn.disabled = true;
	setTimeout(function(){
		btn.disabled = false;
	},
	2000);
}