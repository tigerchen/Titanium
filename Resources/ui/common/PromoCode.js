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

var lPromo = Titanium.UI.createLabel({
	top:'17%',
	left:'10%',
	font: {fontSize:width / 18, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'Enter promo code',
	color:'red'	
});
vBody.add(lPromo);

var lInfo = Titanium.UI.createLabel({
	top:'23%',
	left:'10%',
	font: {fontSize:width / 28, fontFamily: 'Arial Rounded MT Bold'},
	text: "Case sensitive, no spaces please!",
	color:'black'	
});
vBody.add(lInfo);

var tPromo = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_1.png',
	center: {x:'50%', y:'35%'},
	width:'80%',
	height:'10%',
	hintText:'Promo code',
	paddingLeft: 10
});	
vBody.add(tPromo);

var bSend = Titanium.UI.createButton({
	backgroundImage:'/images/send.png',
	center: {x:'50%', y:'50%'},
	width:'80%',
	height:'12%'
});


var lInfo2 = Titanium.UI.createLabel({
	center: {x:'37%', y:'62%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'},
	text: "Promo code not working?",
	color:'black'	
});
vBody.add(lInfo2);

var lContact = Titanium.UI.createLabel({
	center: {x:'78%', y:'62%'},
	font: {fontSize:width / 20, fontFamily: 'Arial Rounded MT Bold'},
	text: "Contact us",
	color:'red'	
});
vBody.add(lContact);

lContact.addEventListener("click",function(){
	win = Ti.include('ui/common/ContactUs.js');
});

bSend.addEventListener('click',function(e){
		var data = [
			{promocode:tPromo.value}
		];
		
	    var Http = require('ui/common/HTTPClient'),
			http = new Http('Promo', data);
	
});

vBody.add(bSend);
self.add(vBody);

return self;
};

module.exports = GetPasswordWindow;
