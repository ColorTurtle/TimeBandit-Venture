console.log('We have the best team! Go TimeBandits!');
//A whole bunch of problems Jen cant seem to solve: (biggest to smallest)
	//Only fetching new data (vs. fetching and replacing entire collection...why too many)
	//Clearing username at logout
	//Focusing input in login modal
	//Santition? I commented it out b/c any messages w/ special characters looked rather silly
	//More effective way to set character limit for username? 


//Start of jquery
$(document).ready(function(){

	window.messages = new MessagesCollection( );

	$('.js-launch-chat').click(function(){
		$('.js-welcome').hide();
	});

	$('.js-start-chat').click(function(){
		submitNewUser();
		$('.message-stream').scrollTop($('.message-stream')[0].scrollHeight);
	});

	$('#input-username').on('keyup', function(btnPress){
		if(btnPress.which === 13 && $(this).val() !== ''){
			submitNewUser();
			$('.message-stream').scrollTop($('.message-stream')[0].scrollHeight);
		}
	});

	fetchMessages();//Needs to be on interval but only add new messages


	$('#js-message-text').hover(function(){
		$(this).focus();
	});

	$('#js-message-text').on('keypress', function(btnPress){
		if(btnPress.which === 13) {
			submitNewMessage();
			$(this).val('').focus();
			return false;
		}
	});

	$('.js-send-button').click(function(){
		submitNewMessage();
	});

	$('.js-logout-btn').click(function(){
		if(confirm('Are you sure?')){
			$('.message-parent').hide();
			$(this).hide();
			$('.js-launch-chat').show();
			$('.js-welcome').show();
			$('.footer').hide();
		}
	});
});


//functions:
function submitNewUser(){
	if($('#input-username').val() !== '') {
	
		var newUser = $('#input-username').val();

		window.currentUser = {
			username: newUser
		};

		$('#myModal').modal('hide');

		$('.message-parent').show();

		$('.js-launch-chat').hide();
		$('.js-logout-btn').show();

		var userTemplate = _.template($('#show-username').text());

		$('.show-user').append(userTemplate()); //somehow need to clearout old username

		$('.footer').show();

		$('#input-username').val('');
	}
}

function submitNewMessage(){
	if( $('#js-message-text').val() !== ''){
		var awesomeMessage = $('#js-message-text').val();

		var msg = new Message({
			username: currentUser.username,
			messageText: awesomeMessage,
		});

		messages.add(msg);

		new MessageView({model: msg});

		msg.save();

		$('.message-stream').scrollTop($('.message-stream')[0].scrollHeight);
	}

	$('#js-message-text').val('');
}

function fetchMessages(){
	messages.fetch({
		success: function(){
			messages.each(function(message){
				new OldMessageView({model: message});
				$('.message-stream').scrollTop($('.message-stream')[0].scrollHeight);
			});
		},

		error: function(){
			console.log('Sorry, guys. Something has gone wrong.');
		},
	}); //docs said something about reset: true? not sure i follow what that does
}


















// Testing 
// // Models created that will only be called during testing
// window.testMessages = new TestMessagesCollection( );

// testMessages.fetch({
// 	success: function(){
// 		testMessages.each(function(testMessage){
// 			new MessageView({model: testMessage});
// 		})
// 	},

// 	error: function(){
// 		console.log('Sorry, guys. Something has gone wrong.')
// 	}
// });

// $('.js-test-send-button').click(function(){

// 	var messageInstance = {
// 		username: $('.username').val(),
// 		messageText: $('.messageText').val(),
// 	};

// 	var newMessage = messages.add(messageInstance);

// 	new MessageView({model: newMessage});

// 	newMessage.save()
// });
// // End Testing
