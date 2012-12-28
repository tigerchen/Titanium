function MyRewardsWindow(title) {
		
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
	
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	var status = Ti.App.User._loginStatus;		

	self.addEventListener('open', function(e) {
	if(status == 'false'){
		var SignupWindow = require('ui/common/Signup'),
			SignupWin = new SignupWindow(L('sign_up_title'));
			
		// Titanium.UI.currentWindow.open(SignupWin,{animated:true});
		// self.containingTab.open(SignupWin,{animated:true});
		SignupWin.open({animated:true});
		
	}else{	
	

	// Ti.include('ui/common/cekLoginStatus.js');

	// var bBack = Titanium.UI.createButton({
		// backgroundImage:'/images/back.png',
		// center: {x:'15%', y:'50%'},
		// height:'70%',
		// width:'20%'	
	// });
	// vHeader.add(bBack);


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

	var lPoint = Titanium.UI.createLabel({
		center: {x:'90%', y:'30%'},
		font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: '25'
	});
	vBody.add(lPoint);

	
	
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
		font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: 'Rewards & Offers',
		color: 'white'
	});
	self.add(lOffers);

	var vOffer1 = Titanium.UI.createView({
		center: {x:'50%', y:'53%'},
		height: '10%',
		width: '90%',
		backgroundImage: '/images/reward_available.png'
	});
	self.add(vOffer1);

	var lOffer1 = Titanium.UI.createLabel({
		left: 15,
		font: {fontSize:width / 20, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: 'Free Coffee or Tea',
		color: 'white'
	});
	vOffer1.add(lOffer1);

	var iOffer1 = Titanium.UI.createLabel({
		right: 10,
		font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: 'FREE',
		color: 'white',
		backgroundImage: '/images/cost_lg.png',
		width: '15%',
		height: '60%',
		textAlign: 'center'
	});
	vOffer1.add(iOffer1);


	var vOffer2 = Titanium.UI.createView({
		center: {x:'50%', y:'66%'},
		height: '10%',
		width: '90%',
		backgroundImage: '/images/reward_unavailable.png'
	});
	self.add(vOffer2);

	var lOffer2 = Titanium.UI.createLabel({
		left: 15,
		font: {fontSize:width / 20, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: 'Free Pastry',
		color: 'white'
	});
	vOffer2.add(lOffer2);

	var iOffer2 = Titanium.UI.createLabel({
		right: 10,
		font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: '50',
		color: 'white',
		backgroundImage: '/images/cost_sm.png',
		width: '15%',
		height: '60%',
		textAlign: 'center'
	});
	vOffer2.add(iOffer2);


	var vOffer3 = Titanium.UI.createView({
		center: {x:'50%', y:'79%'},
		height: '10%',
		width: '90%',
		backgroundImage: '/images/reward_unavailable.png'
	});
	self.add(vOffer3);

	var lOffer3 = Titanium.UI.createLabel({
		left: 15,
		font: {fontSize:width / 20, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: 'Free Sandwitch',
		color: 'white'
	});
	vOffer3.add(lOffer3);

	var iOffer3 = Titanium.UI.createLabel({
		right: 10,
		font: {fontSize:width / 24, fontFamily: 'Helvetica', fontWeight: 'bold'}	,
		text: '100',
		color: 'white',
		backgroundImage: '/images/cost_sm.png',
		width: '15%',
		height: '60%',
		textAlign:'center'
	});
	vOffer3.add(iOffer3);
	
	self.add(vBody);	
	
	};
	});
	
	return self;
};

module.exports = MyRewardsWindow;
