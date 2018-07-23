// ADD PHOTOS TO EACH PROFILE PIC ENDS //
	b=1;
	btnHolder=document.getElementById("slide-nav-btns");
	allSlides = document.getElementsByClassName('slide');
	slideCnt= allSlides.length;
	for(var index = 0; index < slideCnt; index++){
		btnHolder.innerHTML+="<li id="+b+++" class='grey-btn slide-btn'></li>";
	};
	document.getElementById("1").style.border="6px solid #00ADEF";


	function increment(){
		c++; 	
		allAnsBlock=[];
		var allAns = document.getElementsByClassName("slide-btn");
	   for (var x = 0; x < allAns.length; x++) {
	     allAnsBlock.push(allAns[x]);
	     allAnsBlock[x].style.border="2px solid #CCC";
	   }
		jQuery('.slide:first-of-type').fadeOut(800).next('.slide').fadeIn(800).end().appendTo('#slideshow'); 
		 highlight();
		 };


jQuery(document).ready(function(jQuery){	
	c=0;
	jQuery('#slideshow .slide:gt(0)').hide();
	startSlider=setInterval(increment, 10000);
});
    t=1
    allBtns=document.getElementsByClassName("slide-btn")


function highlight(){
	t++
	allBtns[t-1].style.border="6px solid #00ADEF";
	if(t==slideCnt){t=0}; 
};

//// Stop and start setInterval


function pauseInt(){
	startSlider=setInterval(function(){increment();}, 6000);
}



//// When clicking on slideshow circle navigation

jQuery(document).ready(function(jQuery){ 
  	$('.slide-btn').click(function(){
	  btnId=$(this).attr('id');
	  clearInterval(startSlider);
	  hideSlides();
	  dehighlightBtns();
	  document.getElementById(btnId).style.border="6px solid #00ADEF";
	  document.getElementById("slide"+btnId).style.display="block";
	});
});

// hides slides
slideDisplayNone=[];
function hideSlides(){
 	var slidesNone= document.getElementsByClassName("slide");	
   for (var x = 0; x < slidesNone.length; x++) {
     slideDisplayNone.push(slidesNone[x]);
     slideDisplayNone[x].style.display = "none";
   }
}

// dehighlights buttons
dehighlight=[];
function dehighlightBtns(){
 	var notActive= document.getElementsByClassName("slide-btn");	
   for (var x = 0; x < notActive.length; x++) {
     dehighlight.push(notActive[x]);
     dehighlight[x].style.border="2px solid #CCC";
   }
}

//// When clicking on slideshow reverse navigation
jQuery(document).ready(function(jQuery){ 
  	$('#reverse').click(function(){
	  t--
	  if(t==0){t=slideCnt}
	  clearInterval(startSlider);
	 // pauseInt();
	  hideSlides();
	  dehighlightBtns()
	  document.getElementById("slide"+t).style.display="block";
	  document.getElementById(t).style.border="6px solid #00ADEF";

	});
});

//// When clicking on slideshow forward navigation
jQuery(document).ready(function(jQuery){ 
  	$('#forward').click(function(){
	  t++
	  if(t>slideCnt){t=1}
	  clearInterval(startSlider);
	  hideSlides();
	  dehighlightBtns()
	  document.getElementById("slide"+t).style.display="block";
	  document.getElementById(t).style.border="6px solid #00ADEF";
	});
});

