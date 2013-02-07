function MyRewardsWindow(title) {
			
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
	
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
	
	var actInd = Ti.UI.createActivityIndicator({
				width:100,
				height:100,
				message: 'loading...',
				color: 'black',
				top:'50%',
				left:'55%',
				style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
	});
	
		
	// var auth_token = 'uJqXgVM7g5ZfFpait3pj';		
	
	var counter = 0;
	// var count = 0;
		
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
	
				self.addEventListener('focus', function(e) {
																		
						actInd.show();
						
												
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
								font: {fontSize:width / 18, fontFamily: 'Arial Rounded MT Bold'}	,
								text: jsonObject.balance.points,
								color:'gray'
							});
							vBody.add(lPoint);
							
							jsonRewards = JSON.parse(this.responseText).rewards;
							var id = [],
								name = [],
								points = [],
								POSCode = [];
							var y = 55;
													
							for (var i = 0; i < jsonRewards.length; i++){
								
								id[i] = jsonRewards[i].id;
								name[i] = jsonRewards[i].name;
								points[i] = jsonRewards[i].points;
								POSCode[i] = jsonRewards[i].POSCode;
								
								
								var row = Titanium.UI.createTableViewRow({
									height: height / 9,
									color:'white',
									id:id[i],
									name:name[i],
									POSCode:POSCode[i]						
								});
																				
								var vOffer = Titanium.UI.createView({
									center: {x:'50%', y:y + '%'},
									height: '100%',
									width: '100%',
									backgroundImage: '/images/reward_unavailable.png',
									id:id[i]									
								});
																		
													
								var lOffer = Titanium.UI.createLabel({
									left: 15,
									font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
									text: name[i] ,
									color: 'white'
								});
								vOffer.add(lOffer);
							
								var iOffer = Titanium.UI.createLabel({
									right: 10,
									font: {fontSize:width / 20, fontFamily: 'Arial Rounded MT Bold'}	,
									text: points[i],
									color: 'white',
									backgroundImage: '/images/cost_sm.png',
									width: '15%',
									height: '65%',
									textAlign: 'center'
								});
								vOffer.add(iOffer);
												
								// var lCount = Titanium.UI.createLabel({
									// right: 50,
									// font: {fontSize:width / 20, fontFamily: 'Helvetica'}	,
									// text: count ,
									// color: 'white'
								// });
								// vOffer.add(lCount);
																
								y = y + 10;
								
								// alert('length = ' + data.length);
														
								row.add(vOffer);
																				
								data.push(row);
								
		
							};
							
							actInd.hide();
							
							tblReward.data = data;
												
							counter = 1;
							// count = count + 1;
						};	
							
															
							
							
						
						loader.open('GET', urlString);
						loader.setRequestHeader('Content-Type', 'form-data');
						loader.send();	
			
			});
			
			
						tblReward.addEventListener('click', function(e)
							{							
								// alert('id = ' + e.rowData.id);
																								
									var geolocation = require('ui/common/geolocation');
									var geo = new geolocation();
														
										// hostURL = "http://10.0.2.2:3000/api/v1/rewards/locate";
										hostURL = "http://trelevant.herokuapp.com/api/v1/rewards/locate";
																					
										var host = hostURL;
										var urlString = host;
														
										// urlString += "id=" + survey_id;
										urlString += "?appkey=" + Ti.App.Key._Appkey;
										urlString += "&auth_token=" + Ti.App.User._auth_token;
										// urlString += "&auth_token=" + auth_token;	
										urlString += "&lat=" + Ti.App.Location._latitude;
										urlString += "&lng=" + Ti.App.Location._longitude;
																			
										var loader = Ti.Network.createHTTPClient();
										loader.setTimeout(20000);
														
																																						
														loader.onload = function(evt)
														{
															
															// alert('id3 = ' + e.rowData.id);
																										
															//create json object using the Json.parse function
															jsonObject = JSON.parse(this.responseText).restaurants[0].id;
															jsonAddress = JSON.parse(this.responseText).restaurants[0].address;
															
															// Ti.App.Restaurant = {
																// _restaurant_id:jsonObject
															// };
															
															// alert(jsonObject);
															
															var ClaimWindow = require('ui/common/Claim'),
															ClaimWin = new ClaimWindow('Claim Rewards', e.rowData.id, e.rowData.name, jsonObject, e.rowData.POSCode, jsonAddress);
										
															self.tabGroup.activeTab.open(ClaimWin,{animated:true});
															
															if(counter == 1){
								
																// alert(data.length);
																self.remove(tblReward);
																// tblReward.data = [];
																counter = 0;
																// row.remove(vOffer);	
																
																// lPoint.text = "";
															}
															
														}
															
														
														loader.open('GET', urlString);
														loader.setRequestHeader('Content-Type', 'form-data');
														loader.send();
																			
							});
			
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
				center: {x:'35%', y:'30%'},
				font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
				text: 'My reward points',
				color:'gray'	
			});
			vBody.add(lReward);
		
			
			
			var lActivity = Titanium.UI.createLabel({
				center: {x:'44%', y:'68%'},
				font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
				text: 'View activity',
				width:'70%',
				color:'gray'
			});
			vBody.add(lActivity);
		
		
			lActivity.addEventListener('click', function(e){
				
				if(counter == 1){
						
							// alert(data.length);
							self.remove(tblReward);
							// tblReward.data = [];
							counter = 0;
							// row.remove(vOffer);	
				}
					
				var ActivityWindow = require('ui/common/Activity'),
					activityWin = new ActivityWindow('Activity', Ti.App.Reward._points);
											
				self.tabGroup.activeTab.open(activityWin,{animated:true});
			
			});
			
			var lOffers = Titanium.UI.createLabel({
				center: {x:'50%', y:'43%'},
				font: {fontSize:width / 12, fontFamily: 'Arial Rounded MT Bold'}	,
				text: 'Rewards-in store',
				color: 'white'
			});
			self.add(lOffers);
				
			self.add(vBody);	
		
	
	self.addEventListener('blur', function(e) {
			
			if(counter == 1){
							
				self.remove(tblReward);
				counter = 0;
				
			}
	});
	
	
	
	return self;
};

module.exports = MyRewardsWindow;
