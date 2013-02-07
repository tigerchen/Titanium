function HowItWorksWindow(title) {
	
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

var iHow = Titanium.UI.createImageView({
	center: {x:'50%', y:'45%'},
	height:'70%',
	width:'80%',
	image:'/images/how_to.png'
});
vBody.add(iHow);

var lHelp = Titanium.UI.createLabel({
			center:{x:'33%',y:'88%'},
			font:{fontSize:width / 22, fontFamily: 'Helvetica'},
			text:'Need more help?',
			color:'red'	
});
vBody.add(lHelp);

var lFaq = Titanium.UI.createLabel({
			center:{x:'66%',y:'88%'},
			font:{fontSize:width / 22, fontFamily: 'Arial Rounded MT Bold'},
			text:'See our FAQ.',
			color:'red'	
});
vBody.add(lFaq);

lFaq.addEventListener("click",function(){
	var FaqWindow = require('ui/common/Faq'),
		faqWin = new FaqWindow(L('faq_title'));
		
	self.tabGroup.activeTab.open(faqWin,{animated:true});
});

self.add(vBody);


return self;
};

module.exports = HowItWorksWindow;
