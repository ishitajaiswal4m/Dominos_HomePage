var links = document.getElementsByClassName("navbar_links");
for(var i=0;i<links.length;i++){

	links[i].addEventListener("mouseover",function(){
		this.style.color="#100b6e";
	});
	links[i].addEventListener("mouseout",function(){
		this.style.color="#4a5e91";
	});
	
}
var btn=document.querySelector(".nav_btn");
 btn.addEventListener("mouseover",function(){
 	this.style.color="#e6461a";
 	this.style.background="white";
 });
 btn.addEventListener("mouseout",function(){
 	this.style.color="white";
 	this.style.background="#e6461a";
 });
 
var btng=document.querySelector(".btn_top");
 btng.addEventListener("mouseover",function(){
 	this.style.color="white";
 });
 var bt=document.getElementsByClassName("bt");
 for(var i=0;i<bt.length;i++){

	bt[i].addEventListener("mouseover",function(){
		this.style.color="blue";
	});
	bt[i].addEventListener("mouseout",function(){
		this.style.color="white";
	});
/*$(document).on("scroll",function(){
	if($(document).scrollTop()>100){
		$("header").addClass("shrink");
	}
	else {
		$("header").removeClass("shrink");
	}
});
*/