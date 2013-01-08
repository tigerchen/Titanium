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
				
				var data = []; //empty data array
	
				//create the table view
				var tblReward = Titanium.UI.createTableView({
					height: '90%',
					width: '90%',
					top: '50%',
					left: '5%',
					// rowHeight: height / 16,
					style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
			    	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
					backgroundColor:'transparent',
					borderRadius:5
				});
				self.add(tblReward);
				
			
				loader.onload = function(evt)
				{
					//create json object using the Json.parse function
					jsonObject = JSON.parse(this.responseText);
					
					Ti.App.Reward = {
							_points: jsonObject.balance.points
					};
										
					var lPoint = Titanium.UI.createLabel({
						top:'20%',
						right:'7%',
						font: {fontSize:width / 18, fontFamily: 'Helvetica'}	,
						text: jsonObject.balance.points
					});
					vBody.add(lPoint);
					
					jsonRewards = JSON.parse(this.responseText).rewards;
					var id = [],
						name = [],
						points = [];
					var y = 55;
											
					for (var i = 0; i < jsonRewards.length; i++){
						
						id[i] = jsonRewards[i].id;
						name[i] = jsonRewards[i].name;
						points[i] = jsonRewards[i].points;
						
						
						var row = Titanium.UI.createTableViewRow({
							height: height / 10,
							color:'white',
							id:id[i],
							name:name[i]						
						});
																		
						var vOffer = Titanium.UI.createView({
							center: {x:'50%', y:y + '%'},
							height: '90%',
							width: '100%',
							backgroundImage: '/images/reward_unavailable.png',
							id:id[i]
						});
																
											
						var lOffer = Titanium.UI.createLabel({
							left: 15,
							font: {fontSize:width / 20, fontFamily: 'Helvetica'}	,
							text: name[i] ,
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
																		
						y = y + 10;
						
						row.add(vOffer);
												
						data.push(row);
					};
					
					tblReward.addEventListener('click', function(e)
					{							
						// alert('id = ' + e.rowData.id);
							
						var ClaimWindow = require('ui/common/Claim'),
							ClaimWin = new ClaimWindow('Claim Rewards', e.rowData.id, e.rowData.name);
							
							ClaimWin.open({animated:true});
							
					});
					
					tblReward.data = data;
					
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
		font: {fontSize:width / 18, fontFamily: 'Helvetica'}	,
		text: 'My reward points'	
	});
	vBody.add(lReward);

	
	
	var lActivity = Titanium.UI.createLabel({
		center: {x:'45%', y:'68%'},
		font: {fontSize:width / 18, fontFamily: 'Helvetica'}	,
		text: 'View activity',
		width:'70%'
	});
	vBody.add(lActivity);


	lActivity.addEventListener('click', function(e){
			
		var ActivityWindow = require('ui/common/Activity'),
			activityWin = new ActivityWindow('Activity', Ti.App.Reward._points);
									
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
