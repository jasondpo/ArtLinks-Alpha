$(function(){
	$(".chat").click(function(){
		profileBkg=$(this).next().css('background-image');
		profileNme=$(this).parent().find('h31').html();
		$('.convoBtn').css({'background-image':profileBkg, 'box-shadow':'0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)'});
		$('h102').show().text(profileNme).css({'color':'','width':''});
		$('h103').hide();
		$('.convoBox-searchMember').hide();
		$('.fa-times').css('color','#666');
		$('.convoBox-container-close').css('background-color','');
		$('.convoBox-profileName-holder').css('background-color','');
		$('.convoBox-container').show();
	});
	
	$(".convoBtn").click(function(){
		$(this).css({'background-image':'url(assets/images/chat-convoBtn.png)', 'box-shadow':''});
		$('.convoBox-container').show();
		$('.convoBox-searchMember').show();	
		$('.fa-times').css('color','white');
		$('h103').show();
		$('h102').hide();
		$('.convoBtn-overlay').hide();
		$('.convoBox-profileName-holder').css('background-color','#00ADEF');
		$(".convoBtn").css({'background-color':'#00ADEF','box-shadow':'0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)'});	
	});
	
})


// close convo
	$('.convoBox-container-close').click(function(){
		$('.convoBox-container').hide();
		$('.convoBtn').css({'background-image':'url(assets/images/chat-convoBtn.png)', 'box-shadow':'','background-color':'' });
		$('h102').text('');
		$('.convoBox-searchMember').hide();
	})

/// convoBtn Navigation

window.onload=function(){
	$('.selectMember').css({'background-color':'#008dc4','color':'white'})
}

$('.selectMember').click(function(){
	$('.notifications').css({'background-color':'','color':''})
	$('.selectMember').css({'background-color':'#008dc4','color':'white'})
	$('.convoBox-searchMember').show();		
})


$('.notifications').click(function(){
	$('.selectMember').css({'background-color':'','color':''})
	$('.notifications').css({'background-color':'#008dc4','color':'white'})
	$('.convoBox-searchMember').hide();
})

////
$(".convoBtn").mouseover(function(){
	if($('.convoBox-container').is(':visible') && $('h103').is(':hidden')){
		$('.convoBtn-overlay').fadeIn('fast');
	}
})


$(".convoBtn-overlay").mouseout(function(){
	$('.convoBtn-overlay').fadeOut('fast');
})
	
	