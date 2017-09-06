

//02 轮播图
window.onload=function(){
var ico=document.getElementById('ico'),
			 pic1=document.getElementById('pic1').getElementsByTagName("li"),
			 list1=document.getElementById('list1').getElementsByTagName('li'),
			 index=0,
			 timer=null;
			
			 timer = setInterval(autoPlay, 3000);
			 ico.onmouseover = function () {
			 clearInterval(timer);
			 }
			
			 ico.onmouseout = function () {
			 timer = setInterval(autoPlay, 3000);
			 }
			
			 for (var i = 0; i < list1.length; i++) {
			 list1[i].onmouseover = function () {
			 clearInterval(timer);
			 index = this.innerText - 1;
			 changePic(index);
			 };
			 };
			 function autoPlay () {
			 if (++index >= pic1.length) index = 0;
			 changePic(index);
			 }
			
			 function changePic (curIndex) {
			 for (var i = 0; i < pic1.length; ++i) {
			 pic1[i].style.display = "none";
			 list1[i].className = "";
			 }
			 pic1[curIndex].style.display = "block";
			 list1[curIndex].className = "on";
			 }
			
			 };
