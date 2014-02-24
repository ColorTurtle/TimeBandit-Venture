//collection of users for side div? Perphaps an active user column? 

var Message = Backbone.Model.extend({
	idAttribute: '_id',

	defaults:{
		'username': 'Fred',
		'messageText': '\'Sup?',
		'addId': 'TimeBandits',
		'messageDate': Date.now(),
		'options': {}
	},

 // Begin sanitizing input data before sending to database
 // initialize: function() {
 //    	_.each(this.attributes, function (val, key) {
 //      		this.set(key, this.sanitize(val));
 //    	}, this);
 //  	},

 //  	sanitize: function (str) { 
 //    	return _.escape(str) 
 //  	}
 //  	// End sanitizing
});


var MessagesCollection = Backbone.Collection.extend({
	model: Message,

	comparator: function(model){
		return -model.get('messageDate');
	},

	//url: 'http://0.0.0.0:3000/collections/messages'
	url: 'http://tiny-pizza-server.herokuapp.com/collections/messages',

	//Need to get rid of the crazy stuff that keeps showing up!	
	parse: function(response){
		return _.filter(response, function(msg){
			return (_.isNumber(msg.messageDate) && msg.username !=='');
		});
	}	
});



// For use in testing only
var TestMessagesCollection = Backbone.Collection.extend({
	model: Message,

	url: 'http://0.0.0.0:3000/collections/contacts'
});