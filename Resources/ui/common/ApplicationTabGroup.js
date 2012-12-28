function ApplicationTabGroup() {
	
	var osname = Ti.App.Device._osname;
	
	// var geolocation = require('ui/common/geolocation');
  	// var geo = new geolocation();
	
	// Ti.API.info('OS nya = ' + osname);
	
	//create module instance
	var self = Ti.UI.createTabGroup(),
		LocationsWindow = require('ui/common/Locations'),
		// LocationsWindow = require('ui/common/Activity'),
		MyRewardsWindow = require('ui/common/MyRewards'),
		WallWindow = require('ui/common/Wall'),
		InfoWindow = require('ui/common/Info');
	
	
	
	//create app tabs
	var locationsWin = new LocationsWindow(L('locations_title')),
	// var locationsWin = new LocationsWindow(),
		myRewardsWin = new MyRewardsWindow(L('my_rewards_title')),
		wallWin = new WallWindow(L('wall_title')),
		infoWin = new InfoWindow(L('info_title'));
	
		
	var locationsTab = Ti.UI.createTab({
		title: L('locations_title'),
		icon: '/images/nav/locations.png',
		window: locationsWin
	});
	locationsWin.containingTab = locationsTab;
	self.addTab(locationsTab);
	
	
	
	var myRewardsTab = Ti.UI.createTab({
		title: L('my_rewards_title'),
		icon: '/images/nav/rewards.png',
		window: myRewardsWin
	});
	myRewardsWin.containingTab = myRewardsTab;
	self.addTab(myRewardsTab);
	
	
	
	var wallTab = Ti.UI.createTab({
		title: L('wall_title'),
		icon: '/images/nav/wall.png',
		window: wallWin
	});
	wallWin.containingTab = wallTab;
	self.addTab(wallTab);
	

	
	var infoTab = Ti.UI.createTab({
		title: L('info_title'),
		icon: '/images/nav/info.png',
		window: infoWin
	});	
	infoWin.containingTab = infoTab;
	self.addTab(infoTab);
	
	if (osname == 'iphone' || osname == 'ipod'){
		locationsTab.icon = '/images/nav_small/locations.png';
		myRewardsTab.icon = '/images/nav_small/rewards.png';
		wallTab.icon = '/images/nav_small/wall.png';
		infoTab.icon = '/images/nav_small/info.png';
	};
	
	self.setActiveTab(Ti.App.Index._index);
	
	
	
	return self;
};

module.exports = ApplicationTabGroup;
