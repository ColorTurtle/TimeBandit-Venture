console.log('We have the best team! Go TimeBandits!');	


//functions:
submitNewUser = function(){
	if($('#input-username').val() !== '') {
	
		var newUser = $('#input-username').val(); 

		window.currentUser = {
			username: newUser
		};

		$('#myModal').modal('hide');

		$('.message-parent').show();

		$('.js-launch-chat').hide();
		$('.js-logout-btn').show();
	}
	$('#input-username').val('');

	$(".message-stream").scrollTop($(".message-stream")[0].scrollHeight);
};

submitNewMessage = function(){
	if( $('#js-message-text').val() !== ''){
		var awesomeMessage = $('#js-message-text').val();

		var msg = new Message({
			username: currentUser.username,
			messageText: awesomeMessage,
			messageDate: Date.now()
		});

		var newMessage = messages.add(msg);

		new MessageView({model: newMessage});

		newMessage.save();
	}

	$('#js-message-text').val('');
};


//Start of jquery
$(document).ready(function(){
	window.messages = new MessagesCollection( );

	messages.fetch({
		reset: true,

		success: function(){
			messages.each(function(message){
				new MessageView({model: message});
			})
		},

		error: function(){
			console.log('Sorry, guys. Something has gone wrong.')
		},
	});

	//Possible to focus on input at appearance of modal? on click of launch and on hover of myModal not working
	// $(".modal").on('shown', function() {
 	// 	 	$("#input-username").focus();
	// });

	$('.js-start-chat').click(function(){
		submitNewUser();
	});

	$('#input-username').on('keypress', function(btnPress){
		if(btnPress.which === 13){
			submitNewUser();
		}
	});

	$('.js-logout-btn').click(function(){
		if(confirm('Are you sure?')){
			$('.message-parent').hide();
			$(this).hide();	
			$('.js-launch-chat').show();	
		}
	});

	$('#js-message-text').hover(function(){
		$(this).focus();
	});

	$('#js-message-text').on('keypress', function(btnPress){
		if(btnPress.which === 13) {
			submitNewMessage();
		}
	});

	$('.js-send-button').click(function(){
		submitNewMessage();
	});

});

// Testing 
// Models created that will only be called during testing
window.testMessages = new TestMessagesCollection( );

testMessages.fetch({
	success: function(){
		testMessages.each(function(testMessage){
			new OldMessageView({model: testMessage});
		})
	},

	error: function(){
		console.log('Sorry, guys. Something has gone wrong.')
	}
});

$('.js-test-send-button').click(function(){

	var messageInstance = {
		username: $('.username').val(),
		messageText: $('.messageText').val(),
		messageDate: Date.now()
	};

	var newMessage = messages.add(messageInstance);

	new MessageView({model: newMessage});

	newMessage.save()
});
// End Testing
