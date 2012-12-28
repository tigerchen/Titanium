function InfoWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
	
	var _height = Ti.App.Device._height;
	var _width = Ti.App.Device._width;
	var status = Ti.App.User._loginStatus;	

	//create module instance
	var AboutWindow = require('ui/common/About'),
		HowItWorksWindow = require('ui/common/HowItWorks'),
		FaqWindow = require('ui/common/Faq'),
		MyProfileWindow = require('ui/common/MyProfile'),
		PromoCodeWindow = require('ui/common/PromoCode'),
		SignupWindow = require('ui/common/Signup'),
		LoginWindow = require('ui/common/Login');	
	
	//create app tabs
	var aboutWin = new AboutWindow(L('about_title')),
		howItWorksWin = new HowItWorksWindow(L('how_it_works_title')),
		faqWin = new FaqWindow(L('faq_title')),
		myProfileWin = new MyProfileWindow(L('my_profile_title')),
		promoCodeWin = new PromoCodeWindow(L('promo_code_title')),
		SignupWin = new SignupWindow(L('sign_up_title')),
		loginWin = new LoginWindow(L('login_title'));
		
		

	//Body
	var vBody = Titanium.UI.createView({
		top: '10%',
		left: '0%',
		height: '90%',
		width: '100%',
		backgroundColor: 'white'
	});
	self.add(vBody);	
	
	// create table view data object
	var data = [
		{title:'About Aroma', hasChild:true, backgroundImage: '/images/formfield_top.png'},
		{title:'How to get rewards', hasChild:true, backgroundImage: '/images/formfield_middle.png'},
		{title:'FAQ', hasChild:true, backgroundImage: '/images/formfield_middle.png'},
		{title:'My Profile', hasChild:true, backgroundImage: '/images/formfield_middle.png'},
		{title:'Promo code', hasChild:true, backgroundImage: '/images/formfield_middle.png'},
		{title:'Contact Us', hasChild:true, backgroundImage: '/images/formfield_middle.png'},
		{title:'Login', backgroundImage: '/images/formfield_bottom.png'}
	];
	
	if(status == 'true'){
		data[6].title = 'Logout';
	}
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Titanium.UI.createTableView({
		data:data,
		rowHeight: _height / 10,
		style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
    	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		backgroundColor:'transparent',
		borderRadius:5,
    	top:'12%', 
    	width:'90%',
    	height:'90%'	
	});

	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		var win;
		
			if (e.index == 0){
					
				win = aboutWin;
							
			}else if (e.index == 1){
				
				win = howItWorksWin;
			
			}else if (e.index == 2){
				
				win = faqWin;
			
			}else if (e.index == 3){
				
				if(status == 'false'){
		
		 			win = SignupWin;
		
				}else{
					win = myProfileWin;
				};

			}else if (e.index == 4){
				if(status == 'false'){
		
		 			win = SignupWin;
		
				}else{
				
					win = promoCodeWin;
				};
				
			}else if (e.index == 5){
				
				win = Ti.include('ui/common/ContactUs.js');
			
			}else{
				if(status == 'false'){
		
		 			win = SignupWin;
		
				}else{									
    				var Http = require('ui/common/HTTPClient'),
						http = new Http('Logout', '');
					
					data[6].title = 'Login';
					
					return self;
										
				}
			
			};
		
		if(e.index != 5){
			self.containingTab.open(win,{animated:true});	
		};	
		
		// if(win == SignupWin && status == 'false'){
			// Ti.App.Device = {
				// _windowSignUp:win
			// };
// 		
		// }else{
			// Ti.App.Device = {
				// _window:win
			// };
		// };		
		
	});
	
	// add table view to the window
	self.add(tableview);
		
	
	return self;
};

module.exports = InfoWindow;
