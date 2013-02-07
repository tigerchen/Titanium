function GetPasswordWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'back');
		
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
	top:'10%',
	left:'10%',
	font: {fontSize:width / 18, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'Update your password',
	color:'red'	
});
vBody.add(lLog);

var tOld = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_top.png',
	center: {x:'50%', y:'24%'},
	width:'80%',
	height:'10%',
	hintText:'Old Password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tOld);

var tPassword = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_middle.png',
	center: {x:'50%', y:'34%'},
	width:'80%',
	height:'10%',
	hintText:'Password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tPassword);

var tRPassword = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_bottom.png',
	center: {x:'50%', y:'44%'},
	width:'80%',
	height:'10%',
	hintText:'Repeat password',
	passwordMask: true,
	paddingLeft: 10
});	
vBody.add(tRPassword);

var bSend = Titanium.UI.createButton({
	backgroundImage:'/images/send.png',
	center: {x:'50%', y:'60%'},
	width:'80%',
	height:'12%'
});

bSend.addEventListener('click',function(e){
	
	if(tOld.value != '' && tPassword.value != '' && tRPassword.value != ''){
    	
    	var data = [
			{current_password:tOld.value},
			{password:tPassword.value},
			{password_confirmation:tRPassword.value}
		];
	
    	var Http = require('ui/common/HTTPClient'),
			http = new Http('Update', data);
    	
    }else{
    	Titanium.UI.createAlertDialog
		(
			{
				title:'Error',
				message:'Password Field can not be empty',
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
