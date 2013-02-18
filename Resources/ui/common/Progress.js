function ProgressWindow(title, image, restaurant_id, name, address, phone, offer_id) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
	
	var status;	
	var osname = Ti.App.Device._osname;
		
//Body
var vBody = Titanium.UI.createView({
	top:'10%',
	left:'0%',
	height:'90%',
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

if(osname == 'android'){
	var progressBar = Titanium.UI.createProgressBar({
		width:'53%',
		height:'18%',
		min:0,
		max:1,
		value:0,
		style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
		center:{x:'50%',y:'68%'},
		// message:'Uploading Image',
		// font:{fontSize:12, fontWeight:'bold'},
		color:'blue'
	});
}else{
	var progressBar = Titanium.UI.createProgressBar({
		width:'53%',
		height:'19%',
		min:0,
		max:1,
		value:0,
		style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
		center:{x:'50%',y:'63%'},
		// message:'Uploading Image',
		// font:{fontSize:12, fontWeight:'bold'},
		color:'blue'
	});
}
	self.add(progressBar);
	progressBar.show();
	

// self.addEventListener('focus', function(){
		
		
		// hostURL = "http://10.0.2.2:3000/api/v1/receipts?";
		hostURL = "http://trelevant.herokuapp.com/api/v1/receipts?";
											
				var host = hostURL;
				var urlString = host;
				
					if(Ti.Platform.osname == 'android'){
						Ti.include('db.js');													
					}else{
						Ti.include('ui/common/db.js');
					};
				
				var auth_token = getAuthToken();
				// alert(auth_token);
				
				urlString += "appkey=" + Ti.App.Key._Appkey;
				urlString += "&restaurant=" + restaurant_id;
				urlString += "&offer=" + offer_id;
				urlString += "&auth_token=" + auth_token;	
												
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

        			//now you can use parameter e to switch/case 
       				switch (e.index) {
          				case 0: 
							// Ti.App.User = {
								// _survey_id:jsonObject.survey_id
							// };
							
							var SurveyWindow = require('ui/common/Survey'),
								SurveyWin = new SurveyWindow('Survey', survey_id, receipt_id);
				
								if(Ti.Platform.osname == 'android'){
									
									SurveyWin.open({animated:true});	
									
								}else{
																
									self.tabGroup.activeTab.open(SurveyWin,{animated:true});
											
								};
																							
							
          				break;

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
				
				loader.onerror = function(e)
				{				
					Ti.API.info("Error during registration: "+e.error);  
		     		alert(e.error);
		     	}
				
				loader.setTimeout(20000);
				loader.open('POST', urlString);
				loader.send({image:image});
		
// });


return self;
};

module.exports = ProgressWindow;
