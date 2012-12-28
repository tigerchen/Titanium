function Window(title, button) {

	var osname = Ti.App.Device._osname;

	//window
	 var self = Ti.UI.createWindow({
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

	
	self.addEventListener('android:back', function(e) {
		self.close();	
	});	
	
	
	if(button == 'back'){		
		
		var bBack = Titanium.UI.createButton({
		backgroundImage:'/images/back.png',
		center: {x:'15%', y:'50%'},
		height:'80%',
		width:'20%'	
		});	
			
			
			bBack.addEventListener("click", function(e) { 
    			self.fireEvent('android:back');
			});
	
			// bBack.addEventListener("click", function(e) {  		
//     		    		
    		// var win = Ti.App.Device._window;
			// win.close({animated:true});
// 			
			// });			
						

		vHeader.add(bBack);		
	
	}else if(button == 'cancel'){
		
		var bCancel = Titanium.UI.createButton({
		backgroundImage: '/images/cancel.png',
		center: {x:'15%', y:'50%'},
		height:'80%',
		width:'20%'	
		});
		
		
			bCancel.addEventListener("click", function() {
    			self.fireEvent('android:back');
			});
			
		// bCancel.addEventListener("click", function() {
    		// var win;
//     		
    		// if(title == 'Sign Up'){
    			// win = Ti.App.Device._windowSignUp;   					
    		// }else if(title == 'Login'){
	    		// win = Ti.App.Device._windowLogin;
    		// }else if(title == 'Retrieve Password'){
	    		// win = Ti.App.Device._windowForgot;
    		// }else{
	    		// win = Ti.App.Device._window;    			
    		// };
//     		
    		// win.close({animated:true});
// 
		// });
		
		vHeader.add(bCancel);
	
	};
	
	
	
	
		
	return self;
};

module.exports = Window;
