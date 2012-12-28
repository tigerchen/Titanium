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
	center: {x:'26%', y:'21%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Enter promo code',
	color:'red'	
});
vBody.add(lPromo);

var lInfo = Titanium.UI.createLabel({
	center: {x:'35%', y:'27%'},
	font: {fontSize:width / 28, fontFamily: 'Helvetica'},
	text: "Case sensitive, no spaces please!",
	color:'black'	
});
vBody.add(lInfo);

var tPromo = Titanium.UI.createTextField({
	backgroundImage:'/images/formfield_1.png',
	center: {x:'50%', y:'35%'},
	width:'85%',
	height:'10%',
	hintText:'Promo code',
	paddingLeft: 10
});	
vBody.add(tPromo);

var bSend = Titanium.UI.createButton({
	backgroundImage:'/images/send.png',
	center: {x:'50%', y:'48%'},
	width:'85%',
	height:'11%'
});


var lInfo2 = Titanium.UI.createLabel({
	center: {x:'37%', y:'62%'},
	font: {fontSize:width / 20, fontFamily: 'Helvetica'},
	text: "Promo code not working?",
	color:'black'	
});
vBody.add(lInfo2);

var lContact = Titanium.UI.createLabel({
	center: {x:'80%', y:'62%'},
	font: {fontSize:width / 20, fontFamily: 'Helvetica'},
	text: "Contact us",
	color:'red'	
});
vBody.add(lContact);

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
