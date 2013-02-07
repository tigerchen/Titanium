function WallWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	//Body
	var vBody = Titanium.UI.createView({
		top:'10%',
		left:'0%',
		height:'90%',
		width:'100%',
		backgroundColor:'white'
	});
	self.add(vBody);

	var webview = Titanium.UI.createWebView({
		url: 'https://www.facebook.com/AromaUS',
		center: {x:'50%', y:'50%'},
		width:'100%',
		height:'100%'
		});	
	vBody.add(webview);

//	var bBack = Titanium.UI.createButton({
//		backgroundImage:'/images/back.png',
//		center: {x:'15%', y:'4.5%'},
//		height:'8%',
//		width:'20%'	
//	});
//	
//	bBack.addEventListener("click", function(e) {  		
//		webview.goBack();		
//	});	
//	self.add(bBack);
	
	return self;
};

module.exports = WallWindow;
