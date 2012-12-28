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
		offer = 1;
		// offer2 = [];
		
	//create the table view
	var tblRecipes = Titanium.UI.createTableView({
		height: '100%',
		width: '100%',
		center:{x:'50%', y:'50%'}
	});
	vBody.add(tblRecipes);

	//this method will process the remote data
	loader.onload = function() {

		// get the item nodelist from our response json object
		var jsonObject = JSON.parse(this.responseText).restaurants;
		// var OfferObject = JSON.parse(this.responseText).restaurants.available_offers;
		

		for (var i = 0; i < jsonObject.length; i++) {
			
			id[i] = jsonObject[i].id;
			name[i] = jsonObject[i].name;
			address[i] = jsonObject[i].address;
			phone_number[i] = jsonObject[i].phone_number;
			// offer = jsonObject[i].available_offers;
			//offer2[i] = jsonObject[i].tes;
			
			
			//for (var f = 0; f <= offer.length; f++){
			//	alert('offer' + i + ' = ' + offer[f]);
			//};
			
			// alert('offer =' + offer[i]);
			
			// for (var f = 0; f < offer.length; f++) {
				// offer2[f] = offer[f].id;
// 				
				// alert('offer2 = ' + offer2[f]);
			// };
										
			//create a table row
			var row = Titanium.UI.createTableViewRow({
				height: _height / 8,
				color:'white',
				id:id[i],
				name:name[i],
				address:address[i],
				phone_number:phone_number[i],
				offer:offer							
			});

			//title label
			var titleLabel = Titanium.UI.createLabel({
				// text:jsonObject.notice,
				text:name[i],
				font: {fontSize: _height / 28},
				left:'5%',
				top:'10%',
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
			var bEarn = Titanium.UI.createButton({
				backgroundImage:'/images/earn_points.png',
				height: _height / 26,
				width: _width / 4,
				left:'5%',
				top:'55%'
			});
			row.add(bEarn);
			
			tblRecipes.addEventListener('click', function(e)
			{
				var LocationsDetailWindow = require('ui/common/LocationsDetail'),
				locationsDetailWin = new LocationsDetailWindow(L('locations_title'), e.rowData.id, e.rowData.name, e.rowData.address, e.rowData.phone_number, e.rowData.offer);
				
				locationsDetailWin.open({animated:true});
								
			});
			
			//add the table row to our data[] object
			data.push(row);
		}; //end for loop
		
	//set the data property of the tableView to data[] object
	tblRecipes.data = data;
	};
		
	loader.open('GET', urlString);
	loader.setRequestHeader('Content-Type', 'form-data');
	loader.send();
	
	// self.add(vHeader);
	self.add(vTop);
	self.add(vBody);

	
	
	return self;
};

module.exports = LocationsWindow;
