//Javascript file
//Author : Neeraj Khandelwal
//License : MIT License
/* Notify is a jQuery plugin to display notification. For example, if there is a update on the website and you want the user to know it. You can notify her by calling notify function of the plugin. It will display the notification at the your desired position.*/


$.fn.notify = function(){
	
	var fadein = 500;  	// Time taken by notification to appear.
	var delay = 4000;	// Time for display of notification.
	var fadeout = 1000;	// Time for notification to vanish or fadeout.

	// Default CSS for the notification box.
	var css = {     
			'display': 'none',
			'background-color': '#222',
			'font-face': 'Helvetica, Arial, "Sans Serif"', 
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

	// Sets the default CSS.
	$(this).css(css);

	// Animating arguments goes here.
	if(arguments[2]){
		if(typeof(arguments[2]) == "object"){
			if(arguments[2]['delay']){		// If delay is specified.
				if( typeof(arguments[2]['delay']) == "number"){
					delay = parseInt(arguments[2]['delay']);
				}
				else{
					console.error("Error: Delay has to be number.");
				}
			}
			if(arguments[2]['fadein']){		// If fadein is specified.
				if(typeof(arguments[2]['fadein']) == "number"){
					fadein = parseInt(arguments[2]['fadein']);
				}
				else{
					console.error("Error: Fadein has to be number.");
				}
			}
			if(arguments[2]['fadeout']){		// If fadeout is specified.
				if(typeof(arguments[2]['fadeout']) == "number"){
					fadeout = parseInt(arguments[2]['fadeout']);
				}		
				else{
					console.error("Error: Fadeout has to be number.");
				}
			}
		}
		else{
			console.error("Error: Illegal argument! Arguments should be array.");
		}
	}

	// Rewrites the default CSS with user specified CSS.
	if(typeof(arguments[1]) == "object"){
		$(this).css(arguments[1]);
	}

	// Animation.
	if(typeof(arguments[0]) == "string" ){
		$(this).text(arguments[0]).fadeIn(fadein).delay(delay).fadeOut(fadeout);
	}
	else{
		// It actually is not an error condition but requires your attention in case you fail to provide data.
		console.error("Error: Data not string or is empty!");
	}
};

