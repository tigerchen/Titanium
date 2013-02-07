function PhotoTipsWindow(title, id, name, address, phone, offer_id) {
	
//	var wSelf = require('ui/common/Window');
//	var self = new wSelf(title, 'back');
	
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
	
//window
var self = Ti.UI.createWindow({
title:title,
backgroundColor:'black',
navBarHidden:true
});

//Header
var vHeader = Titanium.UI.createView({
	top:0,
	left:0,
	height:'10%',
	width:'100%',
	backgroundImage:'/images/topbar.png'
});

var lInfo = Titanium.UI.createLabel({
	center:{x:'40%', y:'50%'},
	text:'Please line up your receipt!',
	color:'white',
	font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}
});

var bBack = Titanium.UI.createButton({
	backgroundImage:'/images/back.png',
	center: {x:'15%', y:'50%'},
	height:'70%',
	width:'20%'	
});

bBack.addEventListener('click', function(){
	self.close();
	
	var TakePhotoWindow = require('ui/common/TakePhoto'),
		TakePhotoWin = new TakePhotoWindow('Take Photo', id, name, address, phone, offer_id);
});

vHeader.add(bBack);


//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
	width:'100%',
	backgroundColor:'white'
});

var lTips = Titanium.UI.createLabel({
	center: {x:'45%', y:'10%'},
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: '-> Place Receipt on flat surface \n-> Use adequate lighting \n-> Make sure text is not blurry',
	color:'black'
});
vBody.add(lTips);

var iTips = Titanium.UI.createImageView({
	image:'/images/example.png',
	height: '50%',
	width: '80%',
	center: {x:'50%', y:'47%'}
});
vBody.add(iTips);

var lHelp = Titanium.UI.createLabel({
	center: {x:'36%', y:'78%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Need more help?',
	color:'red'
});
vBody.add(lHelp);

var lFaq = Titanium.UI.createLabel({
	center: {x:'68%', y:'78%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'See our FAQ.',
	color:'red'
});
vBody.add(lFaq);

self.add(vHeader);
self.add(vBody);

return self;
};

module.exports = PhotoTipsWindow;
