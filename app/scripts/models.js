var Message = Backbone.Model.extend({
	idAttribute: '_id',

});

var MessagesCollection = Backbone.Collection.extend({
	model: Message,

	url: 'http://tiny-pizza-server.herokuapp.com'

})