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

		var messageInstance = {
			username: $('.username').val(),
			messageText: $('.messageText').val(),
			messageDate: Date.now(),
			appId: 'TimeBandits'
		};

		var newMessage = messages.add(messageInstance);

		new MessageView = ({model: newMessage});

		newMessage.save()
	});

})
