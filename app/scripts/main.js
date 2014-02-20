console.log('We have the best team! Go TimeBandits!');

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
		}
	});

	$('.js-send-button').click(function(){
		console.log('You clicked a button')

		var messageInstance = {
			username: $('.username').val(),
			messageText: $('.messageText').val(),
			messageDate: Date.now(),
			appId: 'TimeBandits'
		};

		console.log('Variable messageInstance was created')

		var newMessage = messages.add(messageInstance);

		console.log('User inputs pushed to messageInstance')

		new MessageView({model: newMessage});
		console.log('new MessageView created')

		newMessage.save()
	});


	// Testing 
	// Models created that will only be called during testing
	window.testMessages = new TestMessagesCollection( );

	testMessages.fetch({
		success: function(){
			tesMessages.each(function(testMessage){
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
			messageDate: Date.now(),
			appId: 'TimeBandits'
		};

		console.log('Variable messageInstance was created')

		var newMessage = messages.add(messageInstance);

		console.log('User inputs pushed to messageInstance')

		new MessageView({model: newMessage});
		console.log('new MessageView created')

		newMessage.save()
	});
	// End Testing
})