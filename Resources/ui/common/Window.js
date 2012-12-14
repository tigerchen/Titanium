function Window(title, button) {

	//window
	 var self = Ti.UI.createWindow({
	 title:title,
	 backgroundColor:'black',
	 navBarHidden:true
	 });
	
	//Header
	var vHeader = Titanium.UI.createView({
		top:'-0.5%',
		left:0,
		height:'10%',
		width:'100%',
		backgroundImage:'/images/topbar.png'
	});
	self.add(vHeader);	
	
	self.addEventListener('focus', function()
	{
		// alert(title);
	});
	
	if(button == 'back'){		
		
		var bBack = Titanium.UI.createButton({
		backgroundImage:'/images/back.png',
		center: {x:'15%', y:'50%'},
		height:'80%',
		width:'20%'	
		});	

			bBack.addEventListener("click", function(e) {  		
    		    		
    		var win = Ti.App.Device._window;
			win.close({animated:true});
			
			});			
						

		vHeader.add(bBack);		
	
	}else if(button == 'cancel'){
		
		var bCancel = Titanium.UI.createButton({
		backgroundImage: '/images/cancel.png',
		center: {x:'15%', y:'50%'},
		height:'80%',
		width:'20%'	
		});

		bCancel.addEventListener("click", function() {
    		var win = Ti.App.Device._window;
			win.close({animated:true});
		});
		
		vHeader.add(bCancel);
	
	};
	
		
		
	return self;
};

module.exports = Window;
