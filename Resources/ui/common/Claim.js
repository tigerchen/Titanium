function ClaimWindow(title, reward_id, reward_name) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	
//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'88%',
	width:'100%',
	backgroundColor:'white'
});

var iClaim = Titanium.UI.createImageView({
	width:'95%',
	height:'95%',
	image:'/images/claim_bg.png',
	center:{x:'50%',y:'50%'}
});
vBody.add(iClaim);

var lReward = Titanium.UI.createLabel({
	center: {x:'50%', y:'35%'},
	font: {fontSize:width / 16, fontFamily: 'Helvetica'}	,
	text: reward_name,
	color:'red'	
});
vBody.add(lReward);

var bMark = Titanium.UI.createButton({
	backgroundImage:'/images/mark_as_used.png',
	center: {x:'50%', y:'56%'},
	height:'21%',
	width:'54%'
});
vBody.add(bMark);

// var lStaff = Titanium.UI.createLabel({
	// center: {x:'50%', y:'60%'},
	// font: {fontSize:width / 34, fontFamily: 'Helvetica'}	,
	// text: 'Staff: Use code COFFEE',
	// textAlign: 'center',
	// color:'white'
// });
// vBody.add(lStaff);

var lReward = Titanium.UI.createLabel({
	center: {x:'50%', y:'77%'},
	font: {fontSize:width / 34, fontFamily: 'Helvetica'}	,
	text: 'TO CLAIM, PLEASE PRESENT\nTHIS TO YOUR SERVER\nAT TIME OF PURCHASE',
	textAlign: 'center',
	color:'black'
});
vBody.add(lReward);


self.add(vBody);


return self;
};

module.exports = ClaimWindow;
