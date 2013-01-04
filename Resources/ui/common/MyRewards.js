function MyRewardsWindow(title) {
		
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
	
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	var status = Ti.App.User._loginStatus;
	// var auth_token = 'uJqXgVM7g5ZfFpait3pj';		

	self.addEventListener('focus', function(e) {
	if(status == 'false'){
		var SignupWindow = require('ui/common/Signup'),
			SignupWin = new SignupWindow(L('sign_up_title'));
			
		// Titanium.UI.currentWindow.open(SignupWin,{animated:true});
		// self.containingTab.open(SignupWin,{animated:true});
		SignupWin.open({animated:true});
		
	}else{	
	
				// hostURL = "http://10.0.2.2:3000/api/v1/rewards";
				hostURL = "http://trelevant.herokuapp.com/api/v1/rewards";
											
				var host = hostURL;
				var urlString = host;
				
				// urlString += "id=" + survey_id;
				urlString += "?appkey=" + Ti.App.Key._Appkey;
				urlString += "&auth_token=" + Ti.App.User._auth_token;
				// urlString += "&auth_token=" + auth_token;	
												
				var loader = Ti.Network.createHTTPClient();
					
					
				loader.onload = function(evt)
				{
					//create json object using the Json.parse function
					jsonObject = JSON.parse(this.responseText);
					// alert(jsonObject.notice);
					// alert(jsonObject.points);
					
					var lPoint = Titanium.UI.createLabel({
						center: {x:'90%', y:'30%'},
						font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
						text: jsonObject.balance.points
					});
					vBody.add(lPoint);
					
					jsonRewards = JSON.parse(this.responseText).rewards;
					var name = [],
						points = [];
										
					for (var i = 0; i < jsonRewards.length; i++){
						
						name[i] = jsonRewards[i].name;
						points[i] = jsonRewards[i].points;
							
						var vOffer = Titanium.UI.createView({
							center: {x:'50%', y:'55%'},
							height: '10%',
							width: '90%',
							backgroundImage: '/images/reward_unavailable.png'
						});
						self.add(vOffer);
					
						var lOffer = Titanium.UI.createLabel({
							left: 15,
							font: {fontSize:width / 20, fontFamily: 'Helvetica'}	,
							text: name[i],
							color: 'white'
						});
						vOffer.add(lOffer);
					
						var iOffer = Titanium.UI.createLabel({
							right: 10,
							font: {fontSize:width / 24, fontFamily: 'Helvetica'}	,
							text: points[i],
							color: 'white',
							backgroundImage: '/images/cost_sm.png',
							width: '15%',
							height: '60%',
							textAlign: 'center'
						});
						vOffer.add(iOffer);
						
					};
					
				};
				
				loader.open('GET', urlString);
				loader.setRequestHeader('Content-Type', 'form-data');
				loader.send();	
	

	//Body
	var vBody = Titanium.UI.createView({
	    top: '10%',
		left: '0%',
		height: '25%',
		width: '100%',
		 backgroundColor: 'white'
	});

	var iRewards = Titanium.UI.createImageView({
		width: '90%',
		height: '80%',
		image: '/images/rewards_counter.png',
		center: {x:'50%',y:'50%'}
	});
	 vBody.add(iRewards);

	var lReward = Titanium.UI.createLabel({
		center: {x:'32%', y:'30%'},
		font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: 'My reward points'	
	});
	vBody.add(lReward);

	
	
	var lActivity = Titanium.UI.createLabel({
		center: {x:'45%', y:'68%'},
		font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: 'View activity',
		width:'70%'
	});
	vBody.add(lActivity);

	lActivity.addEventListener('click', function(e){
	
	var ActivityWindow = require('ui/common/Activity'),
		activityWin = new ActivityWindow('Activity');
				
	activityWin.open({animated:true});
	
	});
	



	var lOffers = Titanium.UI.createLabel({
		center: {x:'50%', y:'43%'},
		font: {fontSize:width / 18, fontFamily: 'Helvetica'}	,
		text: 'Rewards-in store',
		color: 'white'
	});
	self.add(lOffers);
		
	self.add(vBody);	
	
	};
	});
	
	return self;
};

module.exports = MyRewardsWindow;
