function SurveyWindow(title) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, '');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;


//Body
var vBody = Titanium.UI.createView({
	width: '95%',
	height: '75%',
	center:{x:'50%',y:'62%'},
	backgroundImage: '/images/comments.png'
});

var lTell = Titanium.UI.createLabel({
	width:'100%',
	height:'11%',
	top:'10%',
	left:0,
	text: '    TELL US WHAT YOU THINK',
	font: {fontSize:width / 18, fontFamily: 'Helvetica', fontWeight: 'bold'},
	backgroundColor:'white',
	color:'red'
});
self.add(lTell);

functionSurvey = function() {
      	var buttons = new Array();
      	var buttons2 = new Array();
      	var buttons3 = new Array();
      	var x = new Array();
      	  	
      	x = ['25%','37%','49%','61%','73%'];
      	var imageR = '/images/radial.png'
      	var y = '15%';
      	var i;
      	

	for(i = 0; i < 5; i++){
		
		//Button General Store appearance		
      	buttons[i] = Titanium.UI.createButton({
			width: '9%',
			height: '7%',
			center:{x:x[i], y:'15%'},
			backgroundImage: '/images/radial.png',
			my_id:i
		});
		vBody.add(buttons[i]);
		
		buttons[i].addEventListener('click', function(e) {
  				
			for(i = 0; i < 5; i++){			  
			  buttons[i].backgroundImage = '/images/radial.png';
			}
			  var i = e.source.my_id;
			  buttons[i].backgroundImage = '/images/radial_selected.png';
  			
  			
		});
		
		
		//Button Service of Staff
		buttons2[i] = Titanium.UI.createButton({
			width: '9%',
			height: '7%',
			center:{x:x[i], y:'35%'},
			backgroundImage: '/images/radial.png',
			my_id:i
		});
		vBody.add(buttons2[i]);
		
		buttons2[i].addEventListener('click', function(e) {
  				
			for(i = 0; i < 5; i++){			  
			  buttons2[i].backgroundImage = '/images/radial.png';
			}
			  var i = e.source.my_id;
			  buttons2[i].backgroundImage = '/images/radial_selected.png';
  			
  			
		});
		
		//Quality of food
		buttons3[i] = Titanium.UI.createButton({
			width: '9%',
			height: '7%',
			center:{x:x[i], y:'55%'},
			backgroundImage: '/images/radial.png',
			my_id:i
		});
		vBody.add(buttons3[i]);
		
		buttons3[i].addEventListener('click', function(e) {
  				
			for(i = 0; i < 5; i++){			  
			  buttons3[i].backgroundImage = '/images/radial.png';
			}
			  var i = e.source.my_id;
			  buttons3[i].backgroundImage = '/images/radial_selected.png';
  			
  			
		});
		
		
	};
};


functionLabel = function(name, x, y, text) {
      	var va = width / 18;
      	var Name = name;

      	var Name = Titanium.UI.createLabel({
			center: {x:x, y:y},
			text: text,
			font: {fontSize:width / 20, fontFamily: 'Helvetica', fontWeight: 'bold'},
			color: 'red'
		});
		vBody.add(Name);
				
      return name;
};


functionThumbs = function(x, y, w, h, image) {
      	var va = width / 18;

      	var Thumbs = Titanium.UI.createLabel({
			center: {x:x, y:y},
			height: h,
			width: w,
			backgroundImage: '/images/' + image
		});
		vBody.add(Thumbs);
				
};


functionSurvey();

functionLabel('lGeneral','40%','5%', 'Genereal store appearance');
functionThumbs('12%','15%','7%','6%','thumbs_down.png');
functionThumbs('86%','15%','7%','6%','thumbs_up.png');


functionLabel('lService','25%','25%', 'Service of staff');
functionThumbs('12%','35%','7%','6%','thumbs_down.png');
functionThumbs('86%','35%','7%','6%','thumbs_up.png');
 
functionLabel('lQuality','25%','45%', 'Quality of food');
functionThumbs('12%','55%','7%','6%','thumbs_down.png');
functionThumbs('86%','55%','7%','6%','thumbs_up.png');

functionLabel('lComment','20%','65%', 'Comments');
var comment = Titanium.UI.createTextArea({
	backgroundImage: '/images/comments.png',
	// size: 2,
	width:'90%',
	height:'25%',
	center:{x:'50%', y:'82%'}
});
vBody.add(comment);


self.add(vBody);


return self;
};

module.exports = SurveyWindow;
