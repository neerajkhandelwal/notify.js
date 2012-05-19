//Javascript file
/* Notify is a jQuery plugin to display notification. For example, if there is a update on the website and you want the user to know it. You can notify her by calling notify function of the plugin. It will display the notification at the your desired position.*/

$.fn.notify = function(){
	$(this).css({'display':'none','background-color':'#222','font-face':'Halvetica', 'font-size':'18x','font-weight':'bolder','color':'#DDD','position':'absolute','width':'auto','right':'30px','top':'50px','font-align':'center','padding':'15px','z-index':'1000','opacity':'.7','-moz-border-radius':'10px','-webkit-border-radius':'10px','text-shadow':'0px 1px 0px 1px'});
	if(typeof(arguments[1]) != "undefined"){
		$(this).css(arguments[1]);
	};
	if(typeof(arguments[0]) == "string" ){
		$(this).text(arguments[0]).fadeIn(1000).delay(4000).fadeOut(1000);
	}
	else{
		console.error("Error: Data not string or is empty!");
	}
};
