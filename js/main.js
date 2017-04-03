
//グラフアニメーション（index.htmlのみ）
$('.skill dl').each(function() {
	var sample = $(this).find('span').data('num');
	$(this).find('span').animate({
		width: sample + '%'
	},1500)
});
