function FaqWindow(title) {
	
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
	backgroundColor:'black'
});

var iTitle = Titanium.UI.createLabel({
	center: {x:'50%', y:'7%'},
	height:'15%',
	width:'100%',
	backgroundColor:'white',
	font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'},
	text:'   Frequently asked questions',
	color:'red',
	textAlign:'left'		
});
vBody.add(iTitle);

var vAsk = Titanium.UI.createView({
	center: {x:'50%', y:'57%'},
	backgroundColor:'white',
	width:'90%',
	height:'73%'
});

vBody.add(vAsk);


functionQuestion = function(y,text) {

      	var Question = Titanium.UI.createLabel({
			center:{x:'20%',y:y},
			font:{fontWeight:'bold',fontSize:width / 22},
			text:text,
			color:'red'	
		});
		vAsk.add(Question);
		
};

functionAnswer = function(y,text) {

      	var Answer = Titanium.UI.createLabel({
			center:{x:'17%',y:y},
			font:{fontWeight:'bold',fontSize:width / 22},
			text:text,
			color:'black'
		});
		vAsk.add(Answer);
		
};

functionQuestion('10%','Question 1?');
functionAnswer('16%','Answer 1');
functionQuestion('30%','Question 2?');
functionAnswer('36%','Answer 2');
functionQuestion('50%','Question 3?');
functionAnswer('56%','Answer 3');
functionQuestion('70%','Question 4?');
functionAnswer('76%','Answer 4');

self.add(vBody);


return self;
};

module.exports = FaqWindow;
