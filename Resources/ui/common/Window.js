function Window(title, button) {

	var osname = Ti.App.Device._osname;

	//window
	 var self = Titanium.UI.createWindow({
	 title:title,
	 backgroundColor:'black',
	 navBarHidden:true,
	 exitOnClose:false
	 // modal:true
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
	
	if(button == 'back'){		
		
		self.addEventListener('android:back', function(e) {
			self.close();	
		});	
	
		
		var bBack = Titanium.UI.createButton({
		backgroundImage:'/images/back.png',
		center: {x:'15%', y:'50%'},
		height:'80%',
		width:'20%'	
		});	
			
			
			bBack.addEventListener("click", function(e) { 
    			self.fireEvent('android:back');
			});						

		vHeader.add(bBack);		
	
	}else if(button == 'cancel'){
		
		self.addEventListener('android:back', function(e) {
			self.close();	
		});	
	
		
		var bCancel = Titanium.UI.createButton({
		backgroundImage: '/images/cancel.png',
		center: {x:'15%', y:'50%'},
		height:'80%',
		width:'20%'	
		});
		
		
			bCancel.addEventListener("click", function() {
    			self.fireEvent('android:back');
			});			
		
		vHeader.add(bCancel);
	
	};

	// self.updateLayout({});
					
	return self;
};

module.exports = Window;
