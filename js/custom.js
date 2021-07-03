// JavaScript Document


// color picker

$(".tool-box .color-brush").click(function(){
	$(".tool-box .color-picker").slideToggle()
	
})

var colorLi = $(".tool-box .color-picker .color-list li");

colorLi
.eq(0).css("backgroundColor","#dc3545").end()
.eq(1).css("backgroundColor","green").end()
.eq(2).css("backgroundColor","yellow").end()
.eq(3).css("backgroundColor","purple")

colorLi.click(function(){
	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
})

// scrool-button

$(window).scroll(function(){
	if($(window).scrollTop() >= 700){
		$(".scroll-button i").show();
	}
	else{
		$(".scroll-button i").hide();
	}
	
})
$(".scroll-button i").click(function(){
	$("html,body").animate({scrollTop:0},600)
})
