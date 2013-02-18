function LocationsDetailWindow(title, id, name, address, phone, offer_id) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'back');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;
	
	var osname = Ti.App.Device._osname;
	// var status = Ti.App.User._loginStatus;
	
	
	if(Ti.Platform.osname == 'android'){
		Ti.include('db.js');
		var status = getLoginStatus();
									
	}else{
		Ti.include('ui/common/db.js');
		var status = getLoginStatus();
	};	
	
	// alert('Offer Id = ' + offer_id + '' + phone);
	
	//Body
	var vBody = Titanium.UI.createView({
		top:'10%',
		left:'0%',
		height:'90%',
		width:'100%',
		backgroundImage:'/images/submit_background.png'
	});

	var bSubmit = Titanium.UI.createButton({
		center:{x:'50%',y:'60%'},
		backgroundImage: '/images/submit_photo.png',
		width: '63%',
		height: '12%'
	});
	
	bSubmit.addEventListener('click', function(){
								
		if(status == 'false'){
						
			var SignupWindow = require('ui/common/Signup'),
				SignupWin = new SignupWindow(L('sign_up_title'));
			
			self.tabGroup.activeTab.open(SignupWin,{animated:true});
		
		}else{
					
			if(osname == 'android'){
				
				var TakePhotoWindow = require('ui/common/TakePhoto'),
					TakePhotoWin = new TakePhotoWindow('Take Photo', id, name, address, phone, offer_id);
			
					// TakePhotoWin.open({animated:true});
						
			}else{
				
				var TakePhotoWindow = require('ui/common/TakePhoto_ios'),
					TakePhotoWin = new TakePhotoWindow('Take Photo', id, name, address, phone, offer_id);
			
					self.tabGroup.activeTab.open(TakePhotoWin,{animated:true});
				
			};
			
		};
	});	
	vBody.add(bSubmit);

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

	
	return self;
};

module.exports = LocationsDetailWindow;
