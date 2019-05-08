$(function(){
	//套餐点击展开收缩方法
	$(".service-products-item").click(function(){
		var $_this=$(this);
		$_this.toggleClass("open-item");
	})
	//新闻选择方法
	//初始化新闻
	newsTabSelect(1);
	var $_newsTabList=$(".news-tab-item");
	$_newsTabList.click(function(){
		var $_this=$(this);
		$_newsTabList.removeClass("active");
		$_this.addClass("active");
		newsTabSelect($_this.data("tab-id"));
	})
})
function newsTabSelect(id) {
	$(".news-issure-container").hide();
	$(".news-issure-container-"+id).show();
}
