function SignupWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	Ti.App.Device = {
			_window:self
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
	center: {x:'19%', y:'10%'},
	font: {fontSize:width / 16, fontFamily: 'Helvetica'}	,
	text: 'Sign up',
	color:'red'	
});
vBody.add(lSign);

var lInfo = Titanium.UI.createLabel({
	center: {x:'35%', y:'15%'},
	font: {fontSize:width / 24, fontFamily: 'Helvetica'}	,
	text: 'to keep track of your rewards',
	color:'black'	
});
vBody.add(lInfo);

var tEmail = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_top.png',
	center: {x:'50%', y:'26%'},
	width:'85%',
	height:'10%',
	hintText:'Email',
	paddingLeft: 10
});	
vBody.add(tEmail);

var tPassword = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_bottom.png',
	center: {x:'50%', y:'36%'},
	width:'85%',
	height:'10%',
	hintText:'Password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tPassword);

var bSignup = Titanium.UI.createButton({
	backgroundImage:'/images/signup.png',
	center: {x:'50%', y:'51%'},
	width:'85%',
	height:'11%'
});

var bConnect = Titanium.UI.createButton({
	backgroundImage:'/images/fb_connect.png',
	center: {x:'50%', y:'66%'},
	width:'85%',
	height:'11%'
});

var lAlready = Titanium.UI.createLabel({
	center: {x:'40%', y:'80%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Already a member? Please',
	color:'red'
});

var lLogin = Titanium.UI.createLabel({
	center: {x:'75%', y:'80%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica', fontWeight: 'underline'}	,
	text: 'log in.',
	color:'red'
});

var lTerm = Titanium.UI.createLabel({
	center: {x:'50%', y:'90%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica', fontWeight: 'underline'}	,
	text: 'Terms of Use',
	color:'red'
});


bSignup.addEventListener('click',function(e){    
    
	var hostURL = "http://10.0.2.2:3000/api/v1/user/signup?";
	
	// var hostURL = "http://trelevant.herokuapp.com/api/v1/user/signup?";
	
	var gcm = require('com.pushjaw.googlecloudmessaging');
	Ti.API.info('module gcm is => ' + gcm);
	
	Ti.API.info('Registering...');
	
	gcm.registerC2dm
	( 
		{
			success:function(e)
			{
				Ti.API.info('JS registration success event: ' + e.registrationId);
								
				var appName = Ti.App.name;
				var appVersion = Ti.App.version;
								
				var regId = e.registrationId;
			 								
				var host = hostURL;
				var urlString = host;
	
				var latitude = '-6.923956';
				var longitude = '107.55317';
				var register_type = '1';
				var Appkey = 'wp51dSKy4USzP5TQ';
				var osname = Ti.Platform.osname;
				var device_id = Titanium.Platform.id;			
				
				urlString += "appkey=" + Appkey;
				urlString += "&first_name=" + 'Kurt';
				urlString += "&last_name=" + 'Cobain';
				urlString += "&username=" + 'kurt';
				urlString += "&email=" + tEmail.value;
				urlString += "&register_type=" + register_type;
				urlString += "&password=" + tPassword.value;
				urlString += "&register_device_type=" + osname;
				urlString += "&deviceid=" + device_id;
				urlString += "&latitude=" + latitude;	
				urlString += "&longitude=" + longitude;
				urlString += "&device_token=" + regId;
												
	
								
				var loader = Ti.Network.createHTTPClient();
					
				loader.onload = function(evt)
				{
					
					//create json object using the Json.parse function
					var jsonObject = JSON.parse(this.responseText);
					alert(jsonObject.notice);
				}
				
				// loader.open('POST', urlString, false);
				loader.open('POST', urlString);
				loader.setRequestHeader('Content-Type', 'form-data');
				loader.send();
				
				// alert(urlString);
			},
			error:function(e)
			{
				Ti.API.error("Error during registration : " + e.error);
				alert("Error during registration : " + e.error);
				
				var message;
				if(e.error == "ACCOUNT_MISSING")
				{
					message = "No Google account found; you will need to add on in order to activate notifications";
				}

				Titanium.UI.createAlertDialog
				(
					{
						title:'Push Notification Setup',
						message:message,
						buttonNames:['OK']
					}
				).show();
			},
			callback:function(e) // called when a push notification is received
			{
				Ti.API.info('JS message event: ' + JSON.stringify(e.data));
				
			}
		 }
	);	
});

vBody.add(bSignup);
vBody.add(bConnect);
vBody.add(lAlready);
vBody.add(lLogin);
vBody.add(lTerm);

self.add(vBody);


return self;
};

module.exports = SignupWindow;
