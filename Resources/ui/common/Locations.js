function LocationsWindow(title) {
			
	// var height_ios = Ti.Platform.displayCaps.platformHeight  - (Ti.Platform.displayCaps.platformHeight * 14.5 / 100);
	// alert('Height IOS = ' + height_ios);
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	var _height = Ti.App.Device._height;
	var _width = Ti.App.Device._width;
	// var status = Ti.App.User._loginStatus;
		
	var vTop = Titanium.UI.createView({
		top:'10%',
		left:0,
		height:'10%',
		width:'100%',
		backgroundImage:'/images/earn_rewards_bar.png'
	});

	//Body
	var vBody = Titanium.UI.createView({
		top:'20%',
		left:'0%',
		height:'90%',
		width:'100%',
		backgroundColor:'white'
	});

	
	self.addEventListener('focus', function(e){
						
		// alert('Latitude = ' + Ti.App.Location._latitude);
	
		// var hostURL = "http://10.0.2.2:3000/api/v1/offers/nearby?";
		var hostURL = "http://trelevant.herokuapp.com/api/v1/offers/nearby?";
	
		var host = hostURL;
		var urlString = host;
				
		urlString += "appkey=" + Ti.App.Key._Appkey;
		urlString += "&lat=" + Ti.App.Location._latitude;
		urlString += "&lng=" + Ti.App.Location._longitude;
		urlString += "&distance=" + 0;
	
		//declare the http client object
		var loader = Ti.Network.createHTTPClient();
	
		var data = []; //empty data array
		var restaurant = [],
			id = [],
			name = [],
			address = [],
			phone_number = [],
			offer = [];
			// offer2 = [];
		
		//create the table view
		var tblRecipes = Titanium.UI.createTableView({
			height: '100%',
			width: '95%',
			center:{x:'50%', y:'50%'},
			style:Titanium.UI.iPhone.TableViewStyle.GROUPEDPLAIN,
    		separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
			backgroundColor:'transparent',
			hasChild:true
		});
		vBody.add(tblRecipes);

		//this method will process the remote data
		loader.onload = function() {
									
			// get the item nodelist from our response json object
			var jsonObject = JSON.parse(this.responseText).restaurants;
			// var OfferObject = JSON.parse(this.responseText).available_offers;

			for (var i = 0; i < jsonObject.length; i++) {
			
				id[i] = jsonObject[i].id;
				name[i] = jsonObject[i].name;
				address[i] = jsonObject[i].address;
				phone_number[i] = jsonObject[i].phone_number;
				
				if(jsonObject[i].available_offers[0] != null){
								
						offer[i] = jsonObject[i].available_offers[0].id;
					    // offer[i] = jsonObject[i].available_offers[i].id;
						//offer2[i] = jsonObject[i].tes;
										
						 // alert('offer_id = ' + offer[i]);
												
						//create a table row
						var row = Titanium.UI.createTableViewRow({
							height: _height / 6,
							color:'white',
							id:id[i],
							name:name[i],
							address:address[i],
							phone_number:phone_number[i],
							offer:offer[i]							
						});
		
						//title label
						var titleLabel = Titanium.UI.createLabel({
							// text:jsonObject.notice,
							text:name[i],
							font: {fontSize: _height / 28, fontFamily: 'Arial Rounded MT Bold'},
							left:'5%',
							top:'22%',
							color:'black',
							textAlign:'left',
							textid:id[i]				
						});
						row.add(titleLabel);
					
						//add our little icon to the left of the row
						var iconImage = Titanium.UI.createImageView({
							image: '/images/arrow.png',
							height: _height / 28,
							width: _width/22,
							center:{x:'95%',y:'50%'}
						});
						row.add(iconImage);
					
						//add our little icon to the left of the row
						var iEarn = Titanium.UI.createImageView({
							image:'/images/earn_points.png',
							height: _height / 21,
							width: _width / 3,
							left:'4%',
							
							top:'55%'
						});
						row.add(iEarn);
						
						var lLine = Titanium.UI.createLabel({
							left:0,
							bottom:0,
							width:'100%',
							height:0,
							backgroundImage:'/images/line.png'
						});
						row.add(lLine);
								
						//add the table row to our data[] object
						data.push(row);
				
				
						// }; //end for loop
					
						tblRecipes.addEventListener('click', function(e)
						{
							var LocationsDetailWindow = require('ui/common/LocationsDetail'),
							locationsDetailWin = new LocationsDetailWindow(L('locations_title'), e.rowData.id, e.rowData.name, e.rowData.address, e.rowData.phone_number, e.rowData.offer);
							
							self.containingTab.open(locationsDetailWin,{animated:true});
											
						});
					
					//set the data property of the tableView to data[] object
					tblRecipes.data = data;
					
					};
				};
			};
		
		loader.open('GET', urlString);
		loader.setRequestHeader('Content-Type', 'form-data');
		loader.send();
	
	
	});
		
	// self.add(vHeader);
	self.add(vTop);
	self.add(vBody);
	
	// var actInd = Ti.UI.createActivityIndicator({
			// width:100,
			// height:100,
			// message: 'loading...',
			// color: 'black',
			// top:'50%',
			// left:'35%',
			// style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
	// });
	// self.add(actInd);
	// actInd.show();

	
	
	return self;
};

module.exports = LocationsWindow;
