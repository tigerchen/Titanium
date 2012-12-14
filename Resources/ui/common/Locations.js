function LocationsWindow(title) {
			
	// var height_ios = Ti.Platform.displayCaps.platformHeight  - (Ti.Platform.displayCaps.platformHeight * 14.5 / 100);
	// alert('Height IOS = ' + height_ios);
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	var _height = Ti.App.Device._height;
	var _width = Ti.App.Device._width;

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


	//declare the http client object
	// var xhr = Titanium.Network.createHTTPClient();

	var data = []; //empty data array

	//create the table view
	var tblRecipes = Titanium.UI.createTableView({
		height: '100%',
		width: '100%',
		center:{x:'50%', y:'50%'}
	});
	vBody.add(tblRecipes);

	//this method will process the remote data
	// xhr.onload = function() {

		//get the item nodelist from our response json object
		// var jsonObject = JSON.parse(this.responseText);
		
		//loop each item in the xml
		// for (var i = 0; i < jsonObject.length; i++) {
		for (var i = 0; i < 5; i++) {
		
			//create a table row
			var row = Titanium.UI.createTableViewRow({
				height: _height / 8
			});

			//title label
			var titleLabel = Titanium.UI.createLabel({
				// text:jsonObject.notice,
				text:'test' + [i],
				font: {fontSize: _height / 24},
				center:{x:'15%',y:'25%'},
				color:'black',
				textAlign:'left'
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
				center:{x:'18%',y:'65%'}
			});
			row.add(bEarn);

			//add the table row to our data[] object
			data.push(row);
	} //end for loop
		
	//set the data property of the tableView to data[] object
	tblRecipes.data = data;
	// };

	//open up the recipes xml feed
	// xhr.open('GET', 'http://www.test.com');

	//finally, execute the call to the remote feed
	// xhr.send();
	
	// self.add(vHeader);
	self.add(vTop);
	self.add(vBody);
	
	return self;
};

module.exports = LocationsWindow;
