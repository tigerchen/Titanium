function ActivityWindow(title, points) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title,'back');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	var actInd = Ti.UI.createActivityIndicator({
	 		width:100,
			height:100,
			message: 'loading...',
			color: 'black',
			top:'30%',
			left:'55%',
			style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
	});

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
	center: {x:'50%', y:'9%'},
	height:'12%',
	width:'90%',
	backgroundImage:'/images/activity_top.png'
});
vBody.add(vReward);
								
var lReward = Titanium.UI.createLabel({
	left:'5%',
	top:'25%',
	font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
	text: 'My reward points',
	color:'gray'
});
vReward.add(lReward);
				
var lPoint = Titanium.UI.createLabel({
	right:'2%',
	top:'25%',
	font: {fontSize:width / 16, fontFamily: 'Arial Rounded MT Bold'}	,
	// height:'60%',
	// width:'10%',
	text:points,
	color:'gray'
});
vReward.add(lPoint);

self.addEventListener('focus',function(e){
	
	actInd.show();
	
	// var hostURL = "http://10.0.2.2:3000/api/v1/user/activity?";
	var hostURL = "http://trelevant.herokuapp.com/api/v1/user/activity?";
			
	var host = hostURL;
	var urlString = host;
									
	urlString += "appkey=" + Ti.App.Key._Appkey;
	urlString += "&auth_token=" + Ti.App.User._auth_token;	
								
	var loader = Ti.Network.createHTTPClient();
//	loader.setTimeout(60000);
	
	var data = []; //empty data array
			
		//create the table view
		var tblRecipes = Titanium.UI.createTableView({
			height: '80%',
			width: '90%',
			top: '14.5%',
			left: '5%',
			// rowHeight: height / 16,
			style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
	    	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
			backgroundColor:'transparent',
			borderRadius:5
		});
		vBody.add(tblRecipes);		
		
				
	loader.onload = function(evt)
	{
		//alert(evt);
					
		//create json object using the Json.parse function
		var jsonObject = JSON.parse(this.responseText).receipts;
		
		for(var i = 0; i < jsonObject.length; i++){
		
			// alert('receipt = ' + jsonObject[i].last_transaction.receipt_date);
			// alert(jsonObject[i].last_transaction.receipt_date);
			
			//create a table row
		var row = Titanium.UI.createTableViewRow({
				height: height / 12,
				color:'white'
										
			});
		
					
		//Reward Middle
		var vPoints = Titanium.UI.createView({
			height:'100%',
			width:'100%',
			backgroundImage:'/images/activity_mid.png'
		});
				
		var lReceipt = Titanium.UI.createLabel({
			left:'5%',
			top:'25%',
			font: {fontSize:width / 18, fontFamily: 'Helvetica'}	,
			text: jsonObject[i].last_transaction.receipt_date,
			color:'gray'
		});
		vPoints.add(lReceipt);

		var lPoint = Titanium.UI.createLabel({
			right:'2%',
			top:'25%',
			font: {fontSize:width / 18, fontFamily: 'Helvetica'}	,
			color:'gray'
		});
		vPoints.add(lPoint);
		
		var bInfo = Titanium.UI.createButton({
			right:'2%',
			top:'15%',
			width:'8%',
			height:'60%',
			backgroundImage:'/images/activity_help.png'
		});
						
		row.add(vPoints);
		data.push(row);
		
		
		if(jsonObject[i].last_transaction.status == 1){
			lPoint.text = 'received';
			lPoint.right = '15%';
			
			bInfo.addEventListener('click', function(){
				alert('You Receipt was received. please wait for a moment for checking it.');
			});		
			vPoints.add(bInfo);			
		}else if(jsonObject[i].last_transaction.status == 2){
			lPoint.text = 'illegible';
			lPoint.right = '15%';
			
			bInfo.addEventListener('click', function(){
				alert('You Receipt was illegible. please send it again.');
			});			
			vPoints.add(bInfo);
		}else if(jsonObject[i].last_transaction.status == 3){
			lPoint.text = parseInt(jsonObject[i].last_transaction.total_points_earned);
		}else if(jsonObject[i].last_transaction.status == 4){
			lPoint.text = 'rejected';
			lPoint.right = '15%';
			
			bInfo.addEventListener('click', function(){
				alert('You Receipt rejected received. please contact support for more details.');
			});
			vPoints.add(bInfo);
		}
		
		if(i == jsonObject.length - 1){
			vPoints.backgroundImage = '/images/activity_bottom.png';
		}
		
		
		
		};
		
		actInd.hide();
		
		tblRecipes.data = data;
		
	};
				
	loader.open('GET', urlString);
	loader.setRequestHeader('Content-Type', 'form-data');
	loader.send();
	
});

self.add(vBody);


return self;
};

module.exports = ActivityWindow;
