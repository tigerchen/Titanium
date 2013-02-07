function ApplicationTabGroup() {
	
	var osname = Ti.App.Device._osname;
	var status = Ti.App.User._loginStatus;
	// var geolocation = require('ui/common/geolocation');
  	// var geo = new geolocation();
	
	// Ti.API.info('OS nya = ' + osname);
	
	//create module instance
	var self = Ti.UI.createTabGroup(),
		LocationsWindow = require('ui/common/Locations'),
		// LocationsWindow = require('ui/common/Survey'),
		MyRewardsWindow = require('ui/common/MyRewards'),
		WallWindow = require('ui/common/Wall'),
		InfoWindow = require('ui/common/Info'),
		SignupWindow = require('ui/common/Signup');
	
	
	
	//create app tabs
	var locationsWin = new LocationsWindow(L('locations_title')),
	// var locationsWin = new LocationsWindow(),
		myRewardsWin = new MyRewardsWindow(L('my_rewards_title')),
		wallWin = new WallWindow(L('wall_title')),
		infoWin = new InfoWindow(L('info_title')),
		SignupWin = new SignupWindow(L('info_title'));
	
		
	var locationsTab = Ti.UI.createTab({
		title: L('locations_title'),
		icon: '/images/nav_small/locations.png',
		window: locationsWin
	});
	locationsWin.containingTab = locationsTab;
	self.addTab(locationsTab);
	
	
	if(status == 'false'){
		
		var myRewardsTab = Ti.UI.createTab({
			title: L('my_rewards_title'),
			icon: '/images/nav_small/rewards.png',
			window: SignupWin
		});
		SignupWin.containingTab = myRewardsTab;
		self.addTab(myRewardsTab);
		
	}else{
		
		var myRewardsTab = Ti.UI.createTab({
			title: L('my_rewards_title'),
			icon: '/images/nav_small/rewards.png',
			window: myRewardsWin
		});
		myRewardsWin.containingTab = myRewardsTab;
		self.addTab(myRewardsTab);
		
	};	
	
	var wallTab = Ti.UI.createTab({
		title: L('wall_title'),
		icon: '/images/nav_small/wall.png',
		window: wallWin
	});
	wallWin.containingTab = wallTab;
	self.addTab(wallTab);
	

	
	var infoTab = Ti.UI.createTab({
		title: L('info_title'),
		icon: '/images/nav_small/info.png',
		window: infoWin
	});	
	infoWin.containingTab = infoTab;
	self.addTab(infoTab);

	self.setActiveTab(Ti.App.Index._index);
	
	
	
	return self;
};

module.exports = ApplicationTabGroup;
