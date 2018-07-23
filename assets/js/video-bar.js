////////////////////  Play random video on startup START ////////////////////////



// 	This selects a vidBlock at random and displays the overlay
	var vidBlock=[];	
	$(".video-bar-block").each(function(){ vidBlock.push($(this));});	
	vidNum=Math.floor((Math.random() * vidBlock.length) );
	vidBlock[vidNum].find('.video-bar-block-overlay').css('display','block');
	
// This inserts a countdown inside the vidBlock overlay	
	Nu=6;
	vidTimer=setInterval(function(){
		Nu--;
		$(vidBlock[vidNum]).find('.video-bar-block-overlay').html('Play in... '+Nu);
		if(Nu==-1){
			clearInterval(vidTimer);
			$(vidBlock[vidNum]).find('.video-bar-block-overlay').text('');
			vidBlock[vidNum].find('.video-bar-block-overlay').css('display','none');
			playVid();
			}
	}, 1000);
	
	function playVid(){
		vidBlock[vidNum].click();
	}
// Stop countdown if window is scrolled	
$(window).scroll(function(){
    stopCntDwn();
});

function stopCntDwn(){
	clearInterval(vidTimer);
	$(vidBlock[vidNum]).find('.video-bar-block-overlay').html('');
	vidBlock[vidNum].find('.video-bar-block-overlay').css('display','none');
}

////// Stop and resume ////

$('.video-bar-block-overlay').mouseenter(function(){
	clearInterval(vidTimer);
	$(this).html('Stop?')
})

$('.video-bar-block-overlay').mouseout(function(){
	// Resumes countdown on mouseout
	if($(".video-bar-block-overlay").is(':visible')){	
		vidTimer=setInterval(function(){
			Nu--;
			$(vidBlock[vidNum]).find('.video-bar-block-overlay').html('Play in... '+Nu);
			if(Nu==-1){
				clearInterval(vidTimer);
				$(vidBlock[vidNum]).find('.video-bar-block-overlay').text('');
				vidBlock[vidNum].find('.video-bar-block-overlay').css('display','none');
				playVid();
				}
		}, 1000);
	}		
})
	
////////////////////  Play random video on startup ENDS ////////////////////////


$(".video-bar-block").click(function(){
	if($(this).find(".video-bar-block-overlay").html()=="Stop?"){
		stopCntDwn();
	}else{
		stopCntDwn();	
		currentIndex = $(this).prevAll().length;	
		$(".video-Slide-wrapper, .video-bar-container-closeBtn, .btn-class, .video-tester").fadeIn("fast");
		$(".video-bar-container").css({"position": "fixed","box-shadow": "0px 0px 5px 3px rgba(40,40,40,0)"});	
		$(".main-container-position").css("padding-top", "298px");
		var vidid=$(this).attr('data-vidId');
		$(".video-tester").html('<iframe width="350" height="220" src="https://www.youtube.com/embed/'+vidid+'?rel=0&amp;autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>');
		var vidHeader=$(this).attr('data-header');
		$(".video-text-header").html(vidHeader);
		var vidName=$(this).attr('data-profileName');
		$(".video-text-attribution-name").html(vidName);
		var vidBody=$(this).attr('data-body');
		$(".video-text-body").html(vidBody);
		var vidProfile=$(this).attr('data-profilePic');
		$(".attribution-profile-pic").attr('style','background-image:url('+vidProfile+')');
	}	
})

$(".video-bar-container-closeBtn").click(function(){
	$(".video-Slide-wrapper, .video-bar-container-closeBtn, .btn-class, .video-tester").fadeOut("fast");
	$(".video-bar-container").css({"position": "relative","box-shadow": "0px 0px 1px 7px rgba(40,40,40,0)"});	
	$(".main-container-position").css("padding-top", "36px");
	$(".video-tester").html('');
	var navPos=$(window).scrollTop();
	if(navPos>=144){
		$(".main-nav-container").css({"position": "fixed", "top": "110px"});
	}	
})

$(window).resize(function(){
    winWidth=$(window).width()
    if(winWidth<=920){
		$(".video-Slide-wrapper, .video-bar-container-closeBtn, .video-tester").fadeOut("fast");
		$(".video-bar-container").css("position", "relative");
		$(".main-container-position").css("padding-top", "50px");
		$(".video-tester").html('');	
    }
});

// Advance forward and backwards STARTS
$(".btn-class").click(function(event){
	 event.stopPropagation();
})

theVid=[];
theHeader=[];
theName=[];
theBody=[];
theProfile=[];

var featuredVid=$('.video-bar-block').each(function(){
	    theVid.push($(this).attr('data-vidId'));
	    theHeader.push($(this).attr('data-header'));
	    theName.push($(this).attr('data-profileName'));
	    theBody.push($(this).attr('data-body'));
	    theProfile.push($(this).attr('data-profilePic'));
	});
	
	
$(".forward-btn").click(function(){
	currentIndex++
	if(currentIndex>theVid.length-1){currentIndex=0}
	$(".video-tester").html('<iframe width="350" height="220" src="https://www.youtube.com/embed/'+theVid[currentIndex]+'?rel=0&amp;autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>');
	$(".video-text-header").html(theHeader[currentIndex]);
	$(".video-text-attribution-name").html(theName[currentIndex]);
	$(".video-text-body").html(theBody[currentIndex]);
	$(".attribution-profile-pic").attr('style','background-image:url('+theProfile[currentIndex]+')');	
});	

$(".rev-btn").click(function(){
	currentIndex--
	if(currentIndex<0){currentIndex=theVid.length-1}
	$(".video-tester").html('<iframe width="350" height="220" src="https://www.youtube.com/embed/'+theVid[currentIndex]+'?rel=0&amp;autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>');
	$(".video-text-header").html(theHeader[currentIndex]);
	$(".video-text-attribution").html(theName[currentIndex]);
	$(".video-text-body").html(theBody[currentIndex]);
	$(".attribution-profile-pic").attr('style','background-image:url('+theProfile[currentIndex]+')');		
});	

// Advance forward and backwards ENDS


// Close floating video
$(".video-float-closeBtn").click(function(){
	$(".video-tester").html('').css({"left": "", "top": "","margin-left": ""});	;
	$(".video-Slide-wrapper, .video-bar-container-closeBtn, .btn-class, .video-tester, .video-float-closeBtn").fadeOut("fast");
	$(".video-bar-container").show().css({"position": "relative","box-shadow": "0px 0px 1px 7px rgba(40,40,40,0)"});	
 	$(".main-container-position").css("padding-top", "36px");
	$(".main-nav-container").css({"position": "fixed", "top": "110px"}); 				
})


















