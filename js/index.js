
//获取文件内容并初始化
var myEditor;
$(function(){

	var markdown_text = 'Hello';

	var y = getQueryString('y') || undefined;
	getContent(y, function(){
		init();
	});

	var topbtn = document.getElementById("btn");
    var timer = null;
	//获取屏幕的高度
    var pagelookheight = document.documentElement.clientHeight;

	//window.onscroll = function(){}

	topbtn.onclick = function () {
		timer = setInterval(function () {
			var backtop = document.body.scrollTop;
			//速度操作 减速
			var speedtop = backtop/5;  
			document.body.scrollTop = backtop -speedtop;  //高度不断减少
			if(backtop ==0){  //滑动到顶端
				clearInterval(timer);  //清除计时器
			}
		}, 30);
	}
});

//初始化markdown预览 滚动监听测试未通过 todo
function init(){
	var testView = editormd.markdownToHTML("markdown-view", {
		markdown : markdown_text, // Also, you can dynamic set Markdown text
		htmlDecode : true,  // Enable / disable HTML tag encode.
		// htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
		tocm : true,
		tocContainer : "",
		tocDropdown   : false,
        tocTitle      : "目录",
		onpreviewscroll : function(event) {
			console.log(event);
			//滚动超出高度，显示按钮，否则隐藏
			var backtop = document.body.scrollTop;
			//滚动超过一频 应该显示
			if(backtop >= pagelookheight){
				topbtn.style.display = "block";
			}else{
				topbtn.style.display = "none"; //不显示
			}
		},
	});
}

/**
 * 获取md文件内容内容
 * @param 年份 2019 2020
 * callback 回调
 */
function getContent(y, callback){
	y = y || 2020;
	$.get('./get_file.php', {y:y}, function(res){
		if(res.status == 1){
			if(res.content.length > 0){
				markdown_text = res.content;
				if(typeof callback !='undefined'){
					callback();
				}
			}
		}else{
			console.log(res);
		}
	});
}

/**
 * 根据变量名获取匹配值
 * @param name
 * @returns {string|undefined}
 */
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return undefined;
}