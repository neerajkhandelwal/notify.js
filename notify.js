//Javascript file
/* Notify is a jQuery plugin to display notification. For example, if there is a update on the website and you want the user to know it. You can notify her by calling notify function of the plugin. It will display the notification at the your desired position.*/

$.fn.notify = function(){
	$(this).removeClass().addClass('notification display');
	var css = {     
			'display': 'none',
			'background-color': '#222',
			'font-face': 'Halvetica', 
			'font-size': '18x',
			'font-weight': 'bolder',
			'color': '#FFF',
			'position': 'absolute',
			'width': 'auto',
			'right': '30px',
			'top': '50px',
			'font-align': 'center',
			'padding': '15px',
			'z-index': '1000',
			'opacity': '.8',
			'border-radius': '5px',
			'-moz-border-radius': '5px',
			'-webkit-border-radius': '5px',
			'text-shadow': '0px 1px 0px 1px'
	 	  }

	$(this).css(css);

	if(typeof(arguments[1]) != "undefined"){
		$(this).css(arguments[1]);
	};
	if(typeof(arguments[0]) == "string" ){
		$(this).text(arguments[0]).fadeIn(1000).delay(4000).fadeOut(1000);
	}
	else{
		/* It actually is not an error condition but requires your attention in case you fail to provide data. */
		console.error("Error: Data not string or is empty!");
	}
};

