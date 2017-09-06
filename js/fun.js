

//轮播图  JS
window.onload=function(){

			 var wrap=document.getElementById('wrap'),
			 pic=document.getElementById('pic').getElementsByTagName("li"),
			 list=document.getElementById('list').getElementsByTagName('li'),
			 index=0,
			 timer=null;
			
			 timer = setInterval(autoPlay, 2000);
			 wrap.onmouseover = function () {
			 clearInterval(timer);
			 }
			
			 wrap.onmouseout = function () {
			 timer = setInterval(autoPlay, 2000);
			 }
			
			 for (var i = 0; i < list.length; i++) {
			 list[i].onmouseover = function () {
			 clearInterval(timer);
			 index = this.innerText - 1;
			 changePic(index);
			 };
			 };
			 function autoPlay () {
			 if (++index >= pic.length) index = 0;
			 changePic(index);
			 }
			
			 function changePic (curIndex) {
			 for (var i = 0; i < pic.length; ++i) {
			 pic[i].style.display = "none";
			 list[i].className = "";
			 }
			 pic[curIndex].style.display = "block";
			 list[curIndex].className = "on";
			 }
			
			 };
			 

