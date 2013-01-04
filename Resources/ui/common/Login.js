function LoginWindow(title) {
	
	Ti.include('ui/common/globalVariabel.js');
	// Ti.include('globalVariabel.js');
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
	
	var osname = Ti.App.Device._osname,	
		height = Ti.App.Device._height,
		width = Ti.App.Device._width;


//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
	width:'100%',
	backgroundColor:'white'
});

var lLog = Titanium.UI.createLabel({
	center: {x:'17%', y:'10%'},
	font: {fontSize:width / 16, fontFamily: 'Helvetica'}	,
	text: 'Log in',
	color:'red'	
});
vBody.add(lLog);

var lInfo = Titanium.UI.createLabel({
	center: {x:'22%', y:'16%'},
	font: {fontSize:width / 24, fontFamily: 'Helvetica'}	,
	text: 'Welcome back!',
	color:'black'	
});
vBody.add(lInfo);

var tEmail = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_top.png',
	center: {x:'50%', y:'25%'},
	width:'85%',
	height:'10%',
	hintText:'Email',
	paddingLeft: 10
});	
vBody.add(tEmail);

var tPassword = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_bottom.png',
	center: {x:'50%', y:'35%'},
	width:'85%',
	height:'10%',
	hintText:'Password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tPassword);

var bLoggin = Titanium.UI.createButton({
	backgroundImage:'/images/login.png',
	center: {x:'50%', y:'49%'},
	width:'85%',
	height:'11%'
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
			{password:tPassword.value}
		];
		
		var actInd = Ti.UI.createActivityIndicator({
			width:100,
			height:100,
			message: 'loading...',
			color: 'black',
			top:'50%',
			left:'35%',
			style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
		});
		vBody.add(actInd);
		actInd.show();
		
    	var Http = require('ui/common/HTTPClient'),
			http = new Http('Login', data);
    	
    	actInd.hide();
    	
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
	center: {x:'50%', y:'64%'},
	width:'85%',
	height:'11%'
});

var lForgot = Titanium.UI.createLabel({
	center: {x:'50%', y:'75%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Forgot your password?',
	color:'red'
});

lForgot.addEventListener('click', function(e){
	
	var GetPasswordWindow = require('ui/common/GetPassword'),
		GetPasswordWin = new GetPasswordWindow('Retrieve Password');
		
	GetPasswordWin.open({animated:true});
	
	Ti.App.Device = {
		_windowForgot:GetPasswordWin
	};
	
});


vBody.add(bLoggin);
vBody.add(bConnect);
vBody.add(lForgot);

self.add(vBody);


return self;
};

module.exports = LoginWindow;