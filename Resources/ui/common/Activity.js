function ActivityWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title,'back');
		
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


//Reward Top
var vReward = Titanium.UI.createView({
	center: {x:'50%', y:'7%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/activity_top.png'
});
vBody.add(vReward);

var lReward = Titanium.UI.createLabel({
	left:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'My reward points'
});
vReward.add(lReward);

var lPoint = Titanium.UI.createLabel({
	right:'5%',
	top:'25%',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	height:'60%',
	width:'10%',
	text:'75'	
});
vReward.add(lPoint);


//Reward Middle
var vPoints = Titanium.UI.createView({
	center: {x:'50%', y:'17%'},
	height:'10%',
	width:'90%',
	backgroundImage:'/images/activity_mid.png'
});
vBody.add(vPoints);

//var lPoints = Titanium.UI.createLabel({
//	left:'5%',
//	top:'25%',
//	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
//	text: '01-15-12'
//});
//vPoints.add(lPoints);
//
//var lInfo = Titanium.UI.createLabel({
//	right:'5%',
//	top:'25%',
//	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
//	height:'60%',
//	width:'10%',
//	text:'14'	
//});
//vPoints.add(lInfo);


//Reward Bottom
//var vBPoints = Titanium.UI.createView({
//	center: {x:'50%', y:'27%'},
//	height:'10%',
//	width:'90%',
//	backgroundImage:'/images/activity_bottom.png'
//});
//vBody.add(vBPoints);
//
//var lBPoints = Titanium.UI.createLabel({
//	left:'5%',
//	top:'25%',
//	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
//	text: '01-26-12'
//});
//vBPoints.add(lBPoints);
//
//var lBInfo = Titanium.UI.createLabel({
//	right:'5%',
//	top:'25%',
//	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
//	height:'60%',
//	width:'10%',
//	text:'21'	
//});
//vBPoints.add(lBInfo);



self.addEventListener('focus',function(e){
	
	var hostURL = "http://10.0.2.2:3000/api/v1/user/activity?";
	// var hostURL = "http://trelevant.herokuapp.com/api/v1/user/activity?";
			
	var host = hostURL;
	var urlString = host;
									
	urlString += "appkey=" + Ti.App.Key._Appkey;
	urlString += "&auth_token=" + Ti.App.User._auth_token;	
								
	var loader = Ti.Network.createHTTPClient();
//	loader.setTimeout(60000);
				
	loader.onload = function(evt)
	{
		//alert(evt);
					
		//create json object using the Json.parse function
		var jsonObject = JSON.parse(this.responseText);
		
		for(var i = 0; i < jsonObject.length; i++){
		
			// alert(jsonObject.notice);
			alert(jsonObject.receipts);
		
		};
	};
				
	loader.open('GET', urlString);
	loader.setRequestHeader('Content-Type', 'form-data');
	loader.send();
	
});

self.add(vBody);


return self;
};

module.exports = ActivityWindow;
