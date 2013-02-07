function ClaimWindow(title, reward_id, reward_name, id, POSCode, jsonAddress) {
	
var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
		

	// alert(id + ' ' + reward_id + ' ' + fineprint);
	
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
	center: {x:'50%', y:'34%'},
	font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
	text: reward_name,
	color:'red'	
});
vBody.add(lReward);

var lAddress = Titanium.UI.createLabel({
	center: {x:'50%', y:'40%'},
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: jsonAddress,
	color:'black'	
});
vBody.add(lAddress);

var bMark = Titanium.UI.createButton({
	backgroundImage:'/images/mark_as_used.png',
	center: {x:'50%', y:'56%'},
	height:'21%',
	width:'54%'
	// touchEnabled:false
});
vBody.add(bMark);

bMark.addEventListener('click', function(e){
	var alert = Titanium.UI.createAlertDialog({
 						// title: 'Information',
    					message: 'Use this reward?',
    					buttonNames: ['Cancel','Confirm']
					});
//  
					alert.addEventListener('click', function(e) {
    					Titanium.API.info('e = ' +  JSON.stringify(e));
 
       				//Clicked cancel, first check is for iphone, second for android
       				// if (e.cancel === e.index || e.cancel === true) {
          				// return;
       				// }
 
        			//now you can use parameter e to switch/case
 
       				switch (e.index) {
          				case 0: 
							
							// Titanium.API.info('Clicked button 1 (cancel)');
												
          				break;
 
          				case 1: 
          						var data = [
												{reward:reward_id},
												{location:id}
											];
										
									    	var Http = require('ui/common/HTTPClient'),
												http = new Http('Claim', data);
								
								
								bMark.backgroundImage = '/images/reward_used.png';
								bMark.touchEnabled = false;
          				break;
 
          				default:
          				break;
 
      				}
 
					});
//  
					alert.show(); 				
});


var lStaff = Titanium.UI.createLabel({
	left:'23%',
	top:'50%',
	font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
	text: 'Staff: Use code ' + POSCode,
	height:'18%',
	width:'54%',
	textAlign: 'center',
	color:'white'
});
vBody.add(lStaff);

var lReward = Titanium.UI.createLabel({
	center: {x:'50%', y:'77%'},
	font: {fontSize:width / 32, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'TO CLAIM, PLEASE PRESENT\nTHIS TO YOUR SERVER\nAT TIME OF PURCHASE',
	textAlign: 'center',
	color:'black'
});
vBody.add(lReward);


self.add(vBody);


return self;
};

module.exports = ClaimWindow;
