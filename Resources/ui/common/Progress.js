function ProgressWindow(title, image, restaurant_id, name, address, phone, offer_id) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

		
//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'80%',
	width:'100%',
	backgroundImage:'/images/submit_background.png'
});


var iProgress = Titanium.UI.createButton({
	center:{x:'50%',y:'60%'},
	backgroundImage: '/images/submit_button_progress.png',
	width: '63%',
	height: '12%'
});
vBody.add(iProgress);


var lStreet = Titanium.UI.createLabel({
		left:'5%',
		top:'3%',
		font: {fontSize:width / 16, fontFamily: 'Helvetica'}	,
		text: name,
		color:'white'	
	});
	vBody.add(lStreet);

	var vMap = Titanium.UI.createView({
		center:{x:'26%',y:'88%'},
		backgroundImage:'/images/map_button.png',
		width: '42%',
		height: '18%'
	});
	vBody.add(vMap);

	var vPhone = Titanium.UI.createView({
		center:{x:'74%',y:'88%'},
		backgroundImage:'/images/phone_button.png',
		width: '42%',
		height: '18%'
	});
	vBody.add(vPhone);

	var lAddress = Titanium.UI.createLabel({
		left:'20%',
		top:'5%',
		font: {fontSize:width / 24, fontFamily: 'Helvetica'}	,
		text: 'Address',
		color:'red'	
	});
	vMap.add(lAddress);

	var lAdd = Titanium.UI.createLabel({
		left:'5%',
		top:'35%',
		font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
		text: address,	
		color:'black'
	});
	vMap.add(lAdd);

	var lPhone = Titanium.UI.createLabel({
		left:'20%',
		top:'5%',
		font: {fontSize:width / 24, fontFamily: 'Helvetica'}	,
		text: 'Phone',
		color:'red'	
	});
	vPhone.add(lPhone);

	var lNo = Titanium.UI.createLabel({
		left:'5%',
		top:'35%',
		font: {fontSize:width / 22, fontFamily: 'Helvetica'}	,
		text: phone,	
		color:'black'
	});
	vPhone.add(lNo);
	
self.add(vBody);

var progressBar = Titanium.UI.createProgressBar({
	width:'53%',
	height:'19%',
	min:0,
	max:1,
	value:0,
	style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	center:{x:'50%',y:'57%'},
	// message:'Uploading Image',
	// font:{fontSize:12, fontWeight:'bold'},
	color:'blue'
});
self.add(progressBar);
progressBar.show();
	

self.addEventListener('focus', function(){
		// hostURL = "http://10.0.2.2:3000/api/v1/receipts?";
		hostURL = "http://trelevant.herokuapp.com/api/v1/receipts?";
											
				var host = hostURL;
				var urlString = host;
				
				urlString += "appkey=" + Ti.App.Key._Appkey;
				urlString += "&restaurant=" + restaurant_id;
				urlString += "&offer=" + offer_id;
				urlString += "&auth_token=" + Ti.App.User._auth_token;	
												
				var loader = Ti.Network.createHTTPClient();
					
					
				loader.onload = function(evt)
				{
					
					//create json object using the Json.parse function
					jsonObject = JSON.parse(this.responseText);
					
					var survey_id = jsonObject.survey_id;
					var receipt_id = jsonObject.receipt_id;
					
					var alert = Titanium.UI.createAlertDialog({
    					title: 'Information',
    					message: jsonObject.notice,
    					buttonNames: ['Ok']
					});
 
					alert.addEventListener('click', function(e) {
    					Titanium.API.info('e = ' +  JSON.stringify(e));
 
       				//Clicked cancel, first check is for iphone, second for android
       				// if (e.cancel === e.index || e.cancel === true) {
          				// return;
       				// }
 
        			//now you can use parameter e to switch/case
 
       				switch (e.index) {
          				case 0: 
							// Ti.App.User = {
								// _survey_id:jsonObject.survey_id
							// };
							
							var SurveyWindow = require('ui/common/Survey'),
								SurveyWin = new SurveyWindow('Survey', survey_id, receipt_id);
				
								SurveyWin.open({animated:true});
																
							
          				break;
 
          				//This will never be reached, if you specified cancel for index 1
          				// case 1: Titanium.API.info('Clicked button 1 (NO)');
          				// break;
 
          				default:
          				break;
 
      				}
 
					});
 
					alert.show(); 					
									
				};
				
				loader.onsendstream = function(e)
				{
					progressBar.value = e.progress ;
					// Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
				};
				
				loader.setTimeout(20000);
				loader.open('POST', urlString);
				loader.send({image:image});
		
});


return self;
};

module.exports = ProgressWindow;
