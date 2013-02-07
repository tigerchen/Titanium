function SurveyWindow(title, survey_id, receipt_id) {
	
	var wSelf = require('ui/common/Window');
	var self = new wSelf(title, 'cancel');
		
	var height = Ti.App.Device._height;
	var width = Ti.App.Device._width;

	// var survey_id = 1;
	// var receipt_id = 1172;
	// var auth_token = 'cUM8rCG9Doy2zYYucdSc';
	
	var answer1 = 3.0;
	var answer2 = 3.0;
	var answer3 = 3.0;
	// alert('survey id = ' + survey_id);

	var scrollView = Titanium.UI.createScrollView({
			height:'90%',
			width:'80%',
			left:'10%',
			top: '25%',
			contentWidth: 'auto',
			contentHeight: 'auto',
			showVerticalScrollIndicator: true,
			showHorizontalScrollIndicator: true,
			// backgroundImage: '/images/comments.png'
			backgroundColor:'white'
	});
	
//Body
var vBody = Ti.UI.createView({
	width: '95%',
	height: '120%',
	left: '0%',
	top: '0%'
});
	
scrollView.add(vBody);
self.add(scrollView);

var lTell = Titanium.UI.createLabel({
	width:'100%',
	height:'11%',
	top:'10%',
	left:0,
	text: '    TELL US WHAT YOU THINK',
	font: {fontSize:width / 18, fontFamily: 'Arial Rounded MT Bold'},
	backgroundColor:'white',
	color:'red'
});
self.add(lTell);

functionSurvey = function(y, yThumbs, my_id) {
      	var buttons = new Array();
      	var buttons2 = new Array();
      	var buttons3 = new Array();
      	var x = new Array();
      	var z = '0.1%';
      	  	
      	x = ['25%','37%','49%','61%','73%'];
      	// var imageR = '/images/radial.png'
      	// var y = '15%';
      	// var i;
      	

	for(var i = 0; i < 5; i++){
		
		//Button General Store appearance		
      	buttons[i] = Titanium.UI.createButton({
			width: '8%',
			height: '4%',
			center:{x:x[i], y:y},
			backgroundImage: '/images/radial.png',
			id:my_id,
			value:i + 1 + '.0',
			my_id:i
		});
		
		
		
		vBody.add(buttons[i]);
		
		buttons[i].addEventListener('click', function(e) {
  				
			for(i = 0; i < 5; i++){			  
			  buttons[i].backgroundImage = '/images/radial.png';
			}
			  var i = e.source.my_id;
			  buttons[i].backgroundImage = '/images/radial_selected.png';

  			  if(e.source.id == 1){
  			  	answer1 = e.source.value;
  			  }else if(e.source.id == 2){
  			  	answer2 = e.source.value;
  			  }else{
  			  	answer3 = e.source.value;
  			  };
  			  // alert(e.source.value); 
  			
		});
		
		var Thumbs_down = Titanium.UI.createLabel({
			left: '10%',
			top: yThumbs,
			height: '3%',
			width: '4%',
			backgroundImage: '/images/thumbs_down.png'
		});
		vBody.add(Thumbs_down);
		
		var Thumbs_up = Titanium.UI.createLabel({
			left: '83%',
			top: yThumbs,
			height: '3%',
			width: '4%',
			backgroundImage: '/images/thumbs_up.png'
		});
		vBody.add(Thumbs_up);		
	};
	
	buttons[2].backgroundImage  = '/images/radial_selected.png';
};


functionLabel = function(name, y, text) {

      	var Name = Titanium.UI.createLabel({
			left: '5%',
			top : y,
			text: text,
			font: {fontSize:width / 22, fontFamily: 'Arial Rounded MT Bold'},
			color: 'red'
		});
		vBody.add(Name);
			
};

		
		var id = [],
			question_type = [],
			text_questions = [],
			title = [],
			question_id = [],
			question_value = [];

				// hostURL = "http://10.0.2.2:3000/api/v1/survey/";
				hostURL = "http://trelevant.herokuapp.com/api/v1/survey/" + survey_id;
											
				var host = hostURL;
				var urlString = host;
				
				// urlString += "id=" + survey_id;
				urlString += "?appkey=" + Ti.App.Key._Appkey;
				urlString += "&auth_token=" + Ti.App.User._auth_token;
				// urlString += "&auth_token=" + auth_token;	
												
				var loader = Ti.Network.createHTTPClient();
					
					
				loader.onload = function(evt)
				{
					
					//create json object using the Json.parse function
					var jsonObject = JSON.parse(this.responseText).survey[0].questions;
					
					
					// functionSurvey('15%', '12%');
					
						var y = 3,
						    y2 = 10,
						    id = 1;
							
						for (var j = 0; j < jsonObject.length; j++){
																					
						// id = jsonObject[j].id;
						// question_type = jsonObject[j].question_type;
						text_questions[j] = jsonObject[j].text;
																		
						// alert('text = ' + text_questions[j]);
						// alert(x);					
						
						functionLabel('lGeneral', y + '%', text_questions[j]);
						
						if(y != 33){
							functionSurvey(y2 + '%', (y2 - 1) + '%', id);
						}else{
							
							var vComment = Titanium.UI.createView({
								backgroundImage: '/images/comments.png',
								width:'90%',
								height:'15%',
								center:{x:'50%', y:'47%'},
																
							});
							vBody.add(vComment);											
							
							var comment = Titanium.UI.createTextArea({								
								width:'99%',
								height:'95%',
								center:{x:'50%', y:'50%'}
							});
							vComment.add(comment);
							
							var bSend = Titanium.UI.createButton({
								backgroundImage: '/images/send.png',
								width:'90%',
								height:'8%',
								center:{x:'50%', y:'62%'},
							});
							
				
				
							bSend.addEventListener('click', function(){
								// hostURL = "http://10.0.2.2:3000/api/v1/survey/" + survey_id +"/answer"";
								hostURL = "http://trelevant.herokuapp.com/api/v1/survey/" + survey_id +"/answer";
											
								var host = hostURL;
								var urlString = host;
								
								var answers = {
												answers : 	{1: answer1,
															 2: answer2,
															 4: answer3,
															 5: comment.value}
											  }
								
								// urlString += "id=" + survey_id;
								urlString += "?appkey=" + Ti.App.Key._Appkey;
								urlString += "&auth_token=" + Ti.App.User._auth_token;
								// urlString += "&auth_token=" + auth_token;
								urlString += "&receiptId=" + receipt_id;
								// urlString += "&answers=" + answers;
																	
																
								var loader = Ti.Network.createHTTPClient();
								
								loader.onload = function(evt)
								{
									//create json object using the Json.parse function
									jsonObject = JSON.parse(this.responseText);
									alert(jsonObject.notice);
									alert(jsonObject.message);
								};
								
								loader.open('POST', urlString);
								// loader.setRequestHeader('Content-Type', 'form-data');
								
								loader.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
								loader.send(JSON.stringify(answers));
								// loader.send(JSON.stringify(answers));
								
								// answers = JSON.stringify(answers);
								// loader.send(answers);
								
								// loader.send();
									
							});
							
							
							vBody.add(bSend);
						};						
						
						// alert('masuk ' + j);
															
						y = y + 10;				
						y2 = y2 + 10;
						id = id + 1;
						// question_id = jsonObject[j].question_choices[j].id;
						// question_value = jsonObject[j].question_choices[j].question_value;
											
							// alert('title = ' + text_questions[j]);						
						
						};											
																	
				};				
				
				loader.open('GET', urlString);
				loader.setRequestHeader('Content-Type', 'form-data');
				loader.send();	
						
// self.add(vBody);

return self;
};

module.exports = SurveyWindow;
