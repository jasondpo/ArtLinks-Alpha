window.onscroll=function (){
var ytField=$(".video-tester").html();	
i = pageYOffset;
	if(ytField!=''){
		$(".main-nav-container").css("position", "fixed");
	}
	if(i>196 && ytField==''){
		$(".main-nav-container").css({"position": "fixed", "top": "160px"});
	}
	if(i<196 && ytField==''){
		$(".main-nav-container").css({"position": "absolute", "top": "358px"});
	}
	
////////////////////////// Float video to left on scroll //////////////////////////
	
	if(i>300 && ytField!=''){
		$(".video-Slide-wrapper, .video-bar-container").hide();
// 		$(".main-container-position").css("margin-top", "0px");
		$(".video-tester").css({"left": "10px", "top": "50px","margin-left": "0"});
		$(".video-float-closeBtn").show();		
	}
	if(i<360 && ytField!=''){
		$(".video-Slide-wrapper, .video-bar-container").show();
// 		$(".main-container-position").css("margin-top", "0px");
		$(".video-tester").css({"left": "", "top": "", "margin-left": ""});
		$(".video-float-closeBtn").hide();
	}			
	
}

window.onload=function(){
	deselectNavBtns();
}
function deselectNavBtns(){
	$("h30").css("color","");
	$(".navBtns li").css("background-color","");
	$('.icon-class').css("background-position","");	
}
	
	
$(".icon-class").click(function(){
	deselectNavBtns();		
	$(this).css("background-color","#00ADEF");
	$(this).find("h30").css("color","#FFF");
	$(this).css("background-position","10px top");
})
	
