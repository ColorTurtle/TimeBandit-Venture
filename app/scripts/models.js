//collection of users for side div?

var Message = Backbone.Model.extend({
	idAttribute: '_id',

	// Begin sanitizing input data before sending to database
	initialize: function() {
    _.each(this.attributes, function (val, key) {
      this.set(key, this.sanitize(val));
    }, this);
  },
  sanitize: function (str) { 
    return _.escape(str) 
  } 
  // End sanitizing
});

var MessagesCollection = Backbone.Collection.extend({
	model: Message,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'
<<<<<<< HEAD
=======

});

// For use in testing only
var TestMessagesCollection = Backbone.Collection.extend({
	model: Message,

	url: 'http://0.0.0.0:3000/collections/contacts'
>>>>>>> ae457b00aad940c4525f38b611e672aede03e9e1

})