//////////////////////// Scroll Featured Projects ////////////////

r=0
slideCount=1

jQuery(document).ready(function($){ 
	slideTotal=$(".sample-project-container-wrapper").length;
	tmax=$(".sample-project-container-wrapper").length*795;
		

 	$(".sample-project-scroll-right").click(function(){
	 	r+=795
	 	slideCount++
	 	if(slideCount>slideTotal){slideCount=1} 	 	
	 	if(r>=tmax){r=0}
    		$(".sample-project-wrapper").animate({scrollLeft:r},200);
    		$(".slideCount").html(slideCount+"/"+slideTotal);    		  	
    });

 	$(".sample-project-scroll-left").click(function(){
	 	r-=795
	 	slideCount--
	 	if(slideCount==0){slideCount=slideTotal} 
	 	if(r<=-795){r=tmax-795}   
    		$(".sample-project-wrapper").animate({scrollLeft:r},200);
    		$(".slideCount").html(slideCount+"/"+slideTotal);
    });    
    
	$(".slideCount").html(slideCount+"/"+slideTotal); // Need this for the initial count
});	

	$(".sample-project-wrapper").scrollLeft(0); // Scrolls back to on page refresh
	
	
////////////////////////// Add ellipsis at end of description //////////


window.onload=function(){
	if($(".projects-container").is(":visible")){
		checkPorjectVisibity();
	}
}

window.onresize=function(){
	winWidth=window.innerWidth;
	if(winWidth>=1101){
		checkPorjectVisibity();
	}	
}

function checkPorjectVisibity(){
	var textContainerHeight= $('.multilineEllipseContainer').height(); // Hight of div	
	    $('.multilineEllipseText').each(function () { // attached to the p tag
      	var $ellipsisText = $(this);	       
      	while ($ellipsisText.outerHeight(true) > textContainerHeight) {
	        $ellipsisText.text(function(index, text) {
	          return text.replace(/\W*\s(\S)*$/, '...');
	        });
		}	     
    });
}
