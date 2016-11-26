$(function(){
	var oHeader = $('.top div.right li');
	var oNav = $('nav .right li');
	oHeader.mouseenter(function(){
		var index = $(this).index();
		oHeader.children('span').removeClass('active');
		$(this).children('span').addClass('active');
		//animation: oHeader 1s;
	});
	oHeader.mouseleave(function(){
		oHeader.children('span').removeClass('active');
	});
	
	oNav.mouseenter(function(){
		var index = $(this).index();
		console.log($(this).children('a').children('i').addClass('After'));
		oNav.children('a').children('i').removeClass('After');
		$(this).children('a').children('i').addClass('After');
	});
	oNav.mouseleave(function(){
		oNav.children('a').children('i').removeClass('After').addClass('list');
	});
});
