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
};

submitNewMessage = function(){
	if( $('#js-message-text').val() !== ''){
		var awesomeMessage = $('#js-message-text').val();

		var msg = new Message({
			username: currentUser.username,
			messageText: awesomeMessage,
		});

		var newMessage = messages.add(msg);

		new MessageView({model: newMessage});

		newMessage.save();
	}

	$('#js-message-text').val('');
};

$(document).ready(function(){
	window.messages = new MessagesCollection( );

	messages.fetch({
		success: function(){
			messages.each(function(message){
				new MessageView({model: message});
			})
		},

		error: function(){
			console.log('Sorry, guys. Something has gone wrong.')
		},
	}, {reset:true});

	//Possible to focus on input at appearance of modal?
	// $('.js-user-input').hover(function(){		
	// 	$('#input-username')focus();
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
			new MessageView({model: testMessage});
		})
	},

	error: function(){
		console.log('Sorry, guys. Something has gone wrong.')
	}
});

$('.js-test-send-button').click(function(){
	console.log('You clicked a button')

	var messageInstance = {
		username: $('.username').val(),
		messageText: $('.messageText').val(),
	};

	console.log('Variable messageInstance was created')

	var newMessage = messages.add(messageInstance);

	console.log('User inputs pushed to messageInstance')

	new MessageView({model: newMessage});
	console.log('new MessageView created')

	newMessage.save()
});
// End Testing