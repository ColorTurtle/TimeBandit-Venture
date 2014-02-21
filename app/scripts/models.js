//collection of users for side div?

var Message = Backbone.Model.extend({
	idAttribute: '_id',

});

var MessagesCollection = Backbone.Collection.extend({
	model: Message,

	//url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'
	url: 'http://0.0.0.0:3000/collections/messages'
})