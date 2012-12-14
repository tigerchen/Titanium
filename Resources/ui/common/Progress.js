function ProgressWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

//Body
var vBody = Titanium.UI.createView({
	top:'12%',
	left:'0%',
	height:'88%',
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
	center: {x:'30%', y:'6%'},
	font: {fontSize:width / 12, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Green Street',
	color:'white'	
});
vBody.add(lStreet);

var iMap = Titanium.UI.createImageView({
	center:{x:'26%',y:'88%'},
	image:'/images/map_button.png',
	width: '42%',
	height: '18%'
});
vBody.add(iMap);

var iPhone = Titanium.UI.createImageView({
	center:{x:'74%',y:'88%'},
	image:'/images/phone_button.png',
	width: '42%',
	height: '18%'
});
vBody.add(iPhone);

var lAddress = Titanium.UI.createLabel({
	center: {x:'21%', y:'83%'},
	font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Address',
	color:'red'	
});
vBody.add(lAddress);

var lAdd = Titanium.UI.createLabel({
	center: {x:'24%', y:'90%'},
	font: {fontSize:width / 28, fontFamily: 'Helvetica'}	,
	text: '145 Greene Street \nNew York, NY 10012',	
	color:'black'
});
vBody.add(lAdd);

var lPhone = Titanium.UI.createLabel({
	center: {x:'66%', y:'83%'},
	font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
	text: 'Phone',
	color:'red'	
});
vBody.add(lPhone);

var lNo = Titanium.UI.createLabel({
	center: {x:'71%', y:'88%'},
	font: {fontSize:width / 28, fontFamily: 'Helvetica'}	,
	text: '(212) 533-1094',	
	color:'black'
});
vBody.add(lNo);

// //declare the http client object
// // var xhr = Titanium.Network.createHTTPClient();
// 
// var data = []; //empty data array
// 
// //create the table view
// var tblRecipes = Titanium.UI.createTableView({
	// height: '100%',
	// width: '100%',
	// center:{x:'50%', y:'50%'}
// });
// vBody.add(tblRecipes);
// 
// //this method will process the remote data
// // xhr.onload = function() {
// 
	// //get the item nodelist from our response json object
	// // var jsonObject = JSON.parse(this.responseText);
// 	
	// //loop each item in the xml
	// // for (var i = 0; i < jsonObject.length; i++) {
	// for (var i = 0; i < 5; i++) {
// 	
		// //create a table row
		// var row = Titanium.UI.createTableViewRow({
			// height:height / 6
		// });
// 
		// //title label
		// var titleLabel = Titanium.UI.createLabel({
			// // text:jsonObject.notice,
			// text:'test' + [i],
			// font: {fontSize: height / 18, fontWeight: 'bold'},
			// center:{x:'15%',y:'25%'},
			// color:'black',
			// textAlign:'left'
		// });
		// row.add(titleLabel);
// 		
		// //add our little icon to the left of the row
		// var iconImage = Titanium.UI.createImageView({
			// image: 'assets/arrow.png',
			// height:height / 24,
			// width:width/20,
			// center:{x:'95%',y:'0%'}
		// });
		// row.add(iconImage);
// 		
		// //add our little icon to the left of the row
		// var bEarn = Titanium.UI.createButton({
			// backgroundImage:'assets/earn_points.png',
			// height:height / 22,
			// width:width/3.5,
			// center:{x:'18%',y:'65%'}
		// });
		// row.add(bEarn);
// 
		// //add the table row to our data[] object
		// data.push(row);
// } //end for loop
// 	
// //set the data property of the tableView to data[] object
// tblRecipes.data = data;
// // };
// 
// //open up the recipes xml feed
// // xhr.open('GET', 'http://www.test.com');
// 
// //finally, execute the call to the remote feed
// // xhr.send();

self.add(vBody);


return self;
};

module.exports = ProgressWindow;
