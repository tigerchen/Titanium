function GetPasswordWindow(title) {
	
	Ti.include('ui/common/globalVariabel.js');
	Ti.include('globalVariabel.js');
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	

//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
	width:'100%',
	backgroundColor:'white'
});

var lLog = Titanium.UI.createLabel({
	center: {x:'45%', y:'21%'},
	font: {fontSize:width / 12, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Retrieve password',
	color:'red'	
});
vBody.add(lLog);

var lInfo = Titanium.UI.createLabel({
	center: {x:'50%', y:'27%'},
	font: {fontSize:width / 26, fontFamily: 'Helvetica'},
	text: "Enter your email and we'll send you the password.",
	color:'black'	
});
vBody.add(lInfo);

var tEmail = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_1.png',
	center: {x:'50%', y:'38%'},
	width:'85%',
	height:'10%',
	hintText:'Email'
});	
vBody.add(tEmail);

var bSend = Titanium.UI.createButton({
	backgroundImage:'/images/send.png',
	center: {x:'50%', y:'53%'},
	width:'85%',
	height:'11%'
});

bSend.addEventListener('click',function(e){
	
	if(tEmail.value != ''){   
    	
    	var data = [
			{email:tEmail.value}
		];
	
    	var Http = require('ui/common/HTTPClient'),
			http = new Http('Forgot', data);
    	
    }else{
    	Titanium.UI.createAlertDialog
		(
			{
				title:'Error',
				message:'Email Field can not be empty',
				buttonNames:['OK']
			}
	).show();	
	};
	
});

vBody.add(bSend);
self.add(vBody);

return self;
};

module.exports = GetPasswordWindow;
