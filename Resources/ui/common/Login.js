function LoginWindow(title, signUpWin) {
	
	// Titanium.Facebook.logout();
	
	// Ti.include('ui/common/globalVariabel.js');
	// Ti.include('globalVariabel.js');
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
	
	var osname = Ti.App.Device._osname,	
		height = Ti.App.Device._height,
		width = Ti.App.Device._width;

	
	if(Ti.Platform.osname == 'android'){
		Ti.include('db.js');
		var status = getLoginStatus();
									
	}else{
		Ti.include('ui/common/db.js');
		var status = getLoginStatus();
	};

//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
	width:'100%',
	backgroundColor:'white'
});

var lLog = Titanium.UI.createLabel({
	top:'6%',
	left:'10%',
	font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'Log in',
	color:'red'	
});
vBody.add(lLog);

var lInfo = Titanium.UI.createLabel({
	top:'12%',
	left:'10%',
	font: {fontSize:width / 24, fontFamily: 'Arial'}	,
	text: 'Welcome back!',
	color:'black'	
});
vBody.add(lInfo);

var container = Titanium.UI.createView({
	center: {x:'50%', y:'30%'},
	width:'80%',
	height:'20%',
	backgroundImage:'/images/formfield_2.png'
});

if(Ti.Platform.osname == 'android'){
		var tEmail = Titanium.UI.createTextField({
			left:0,
			top:0,
			width:'100%',
			height:'50%',
			hintText:'Email',
			paddingLeft: 10,
			opacity: 0.0
		});	
		container.add(tEmail);
		
		var tPassword = Titanium.UI.createTextField({
			left:0,
			bottom:0,
			width:'100%',
			height:'50%',
			hintText:'Password',
			passwordMask: true,
			paddingLeft: 10,
			minimumFontSize: 6,
			opacity: 0.0	
		});	
		container.add(tPassword);
									
}else{
		var tEmail = Titanium.UI.createTextField({
			left:0,
			top:0,
			width:'100%',
			height:'50%',
			hintText:'Email',
			paddingLeft: 10
		});	
		container.add(tEmail);
		
		var tPassword = Titanium.UI.createTextField({
			left:0,
			bottom:0,
			width:'100%',
			height:'50%',
			hintText:'Password',
			passwordMask: true,
			paddingLeft: 10,
			minimumFontSize: 6	
		});	
		container.add(tPassword);
};

vBody.add(container);

var bLoggin = Titanium.UI.createButton({
	backgroundImage:'/images/login.png',
	center: {x:'50%', y:'51%'},
	width:'80%',
	height:'12%'
});


bLoggin.addEventListener('click',function(e){    
    
    if(tEmail.value != '' && tPassword.value != ''){
    
    	// message = "No Google account found; you will need to add on in order to activate notifications";
		// Titanium.UI.createAlertDialog
		// (
			// {
				// title:'Push Notification Setup',
				// message:'message',
				// buttonNames:['OK']
			// }
		// ).show();
    	
    	var data = [
			{email:tEmail.value},
			{password:tPassword.value},
			{signUpWin:signUpWin},
			{loginWin:self}
		];
		
		// var actInd = Ti.UI.createActivityIndicator({
			// width:100,
			// height:100,
			// message: 'loading...',
			// color: 'black',
			// top:'50%',
			// left:'35%',
			// style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
		// });
		// vBody.add(actInd);
		// actInd.show();
		// actInd.show();

    	var Http = require('ui/common/HTTPClient'),
			http = new Http('Login', data);
        	
    	// actInd.hide();
		
		// setTimeout(function(){
		    // actInd.hide();
		// }, 3000);
		    	
		    	
    }else{
    	Titanium.UI.createAlertDialog
		(
			{
				title:'Error',
				message:'UserName and Password Field can not be empty',
				buttonNames:['OK']
			}
	).show();	
	};
});


	
	
	var bConnect = Titanium.UI.createButton({
		backgroundImage:'/images/fb_connect.png',
		center: {x:'50%', y:'66%'},
		width:'80%',
		height:'12%'
	});

		
	bConnect.addEventListener('click',function(e){

		if(status == 'false'){
			
			var counter = 0;
			
			Ti.Facebook.appid = '314418145312548';
			Ti.Facebook.permissions = ['publish_stream', 'read_stream', 'email'];

			// Titanium.Facebook.forceDialogAuth = 'false';
						
			Titanium.Facebook.authorize();
			
			// capture
			Titanium.Facebook.addEventListener('login', function(e){
				 
				 if (e.success) {
		         	
		            Titanium.Facebook.requestWithGraphPath('me', {}, 'GET', function(e) {
		            // Titanium.Facebook.requestWithGraphPath('me', 'GET', function(e) {
		                if (e.success) {
		                   	var data = JSON.parse(e.result);
		                    // Ti.API.info("Name:"+data.name);
		                    // Ti.API.info("email:"+data.email);
		                    // Ti.API.info("facebook Id:"+data.id);   						
							                   
		                    var data = [
											{email:data.email},
											{signUpWin:signUpWin},
											{loginWin:self}
										];
														
							
							if (counter == 0){
								
								var Http = require('ui/common/HTTPClient'),
									http = new Http('Login_Facebook', data);
								
								counter = counter + 1;	
							}
					    	
		                    
		                    
		                } else if (e.error) {
		                    alert(e.error);
		         	    } else {
		                    alert('Unknown response.');
		                }
		            });// request graph
	            		            		            
		         } else if (e.error) {
		        	alert(e.error);
		   		 } else if (e.cancelled) {
		        	// alert("Cancelled");
		       	 }
			
			});	

		}else{
			alert('You have loged in');
		};
					
	});
	
	
var lForgot = Titanium.UI.createLabel({
	center: {x:'50%', y:'85%'},
	font: {fontSize:width / 22, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'Forgot your password?',
	color:'red'
});

lForgot.addEventListener('click', function(e){
	
	var GetPasswordWindow = require('ui/common/GetPassword'),
		GetPasswordWin = new GetPasswordWindow('Retrieve Password');
		
	self.tabGroup.activeTab.open(GetPasswordWin,{animated:true});
	
});


vBody.add(bLoggin);
vBody.add(bConnect);
vBody.add(lForgot);

self.add(vBody);


return self;
};

module.exports = LoginWindow;