function SignupWindow(title, button) {
	
	var wSelf = require('ui/common/Window'),
	self = new wSelf(title, button);
			
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
	var osname = Ti.App.Device._osname;

	// alert('osname = ' + osname);
	
	// Ti.App.Device = {
			// _window:self
	// };
	
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

var lSign = Titanium.UI.createLabel({
	top:'6%',
	left:'10%',
	font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'Sign up',
	color:'red'	
});
vBody.add(lSign);

var lInfo = Titanium.UI.createLabel({
	top:'12%',
	left:'10%',
	font: {fontSize:width / 24, fontFamily: 'Arial'}	,
	text: 'to keep track of your rewards',
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


var bSignup = Titanium.UI.createButton({
	backgroundImage:'/images/signup.png',
	center: {x:'50%', y:'51%'},
	width:'80%',
	height:'12%'	
});

var lAlready = Titanium.UI.createLabel({
	center: {x:'43%', y:'80%'},
	font: {fontSize:width / 22, fontFamily: 'Arial'}	,
	text: 'Already a member? Please',
	color:'red'
});

var lLogin = Titanium.UI.createLabel({
	center: {x:'78%', y:'80%'},
	font: {fontSize:width / 22, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'log in.',
	color:'red'
});

lLogin.addEventListener('click', function(e){
	
	var LoginWindow = require('ui/common/Login'),
		loginWin = new LoginWindow(L('login_title'), self);
			
	if(osname == 'android'){
		loginWin.open({animated:true});	
	}else{

		self.tabGroup.activeTab.open(loginWin,{animated:true});
				
	};		
	
	
	// Ti.App.Device = {
		// _windowLogin:win
	// };
	
});

var lTerm = Titanium.UI.createLabel({
	center: {x:'50%', y:'90%'},
	font: {fontSize:width / 22, fontFamily: 'Arial'}	,
	text: 'Terms of Use',
	color:'red'
});


bSignup.addEventListener('click',function(e){    
    
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
    
    	var aConfirm = Titanium.UI.createAlertDialog({
    					message: 'Please confirm your email :\n       ' + tEmail.value,
    					
    					buttonNames: ['Confirm','Cancel']
			});
		
		aConfirm.addEventListener('click', function(e) {
	
								switch (e.index) {
		          				case 0:															
									
									var data = [
										{email:tEmail.value},
										{password:tPassword.value},
										{signUpWin:self}
									];
								
							    	var Http = require('ui/common/HTTPClient'),
										http = new Http('Signup', data);									
																						
		          				break;
		 
		          				default:
		          				break;
		 
		      					}
 
		});
 
		aConfirm.show();	
    	    	
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


	
	// Ti.Facebook.appid = '[209214782545635]';
	
	if(osname != 'android'){
		Titanium.Facebook.forceDialogAuth = 'false';
	}
	
	var bCon = Titanium.UI.createButton({
		backgroundImage:'/images/fb_connect.png',
		center: {x:'50%', y:'66%'},
		width:'80%',
		height:'12%'
	});
	
	bCon.addEventListener('click',function(e){
		
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
		                   	var dataParsing = JSON.parse(e.result);
		                    // Ti.API.info("Name:"+data.name);
		                    // Ti.API.info("email:"+data.email);
		                    // Ti.API.info("facebook Id:"+data.id);   						
							                   
		                    var data = [
											{email:dataParsing.email},
											{signUpWin:self},
											{loginWin:null}
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
	

vBody.add(bSignup);
vBody.add(bCon);
vBody.add(lAlready);
vBody.add(lLogin);
vBody.add(lTerm);

self.add(vBody);


return self;
};

module.exports = SignupWindow;
