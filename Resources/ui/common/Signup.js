function SignupWindow(title) {
	
	var wSelf = require('ui/common/Window'),
	self = new wSelf(title, 'cancel');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	// Ti.App.Device = {
			// _window:self
	// };
	
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
	paddingLeft: 10,
	minimumFontSize: 6	
});	
vBody.add(tPassword);

var bSignup = Titanium.UI.createButton({
	backgroundImage:'/images/signup.png',
	center: {x:'50%', y:'51%'},
	width:'85%',
	height:'11%'
});

Ti.Facebook.appid = '[209214782545635]';
Ti.Facebook.permissions = ['publish_stream', 'read_stream'];

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

lLogin.addEventListener('click', function(e){
	
	var LoginWindow = require('ui/common/Login'),
		loginWin = new LoginWindow(L('login_title'));
		// win = loginWin;
		
	loginWin.open({animated:true});
	
	// Ti.App.Device = {
		// _windowLogin:win
	// };
	
});

var lTerm = Titanium.UI.createLabel({
	center: {x:'50%', y:'90%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica', fontWeight: 'underline'}	,
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
    
    
    	var data = [
			{email:tEmail.value},
			{password:tPassword.value}
		];
	
    	var Http = require('ui/common/HTTPClient'),
			http = new Http('Signup', data);
    	
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


bConnect.addEventListener('click',function(e){
	Titanium.Facebook.authorize();
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
