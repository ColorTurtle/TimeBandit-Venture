var MessageView = Backbone.View.extend({

	className: 'js-message-box message-box row',

	createTemplate: _.template($('#message-template').text()),

	events: {
		"click": "toggleExpandMessage",
	},

	initialize: function(){
		$('.js-message-stream').prepend(this.el);

		this.render();
	},

	render: function(){
		var renderedTemplate = this.createTemplate(this.model.attributes);

		this.$el.html( renderedTemplate );
		
		this.$el.find('.js-timestamp').html(new Date(parseInt(this.$el.find('.js-timestamp').html())).toLocaleTimeString());
	},

	toggleExpandMessage: function(){
		this.$el.toggleClass('expand');
	},

	// Add second view here (when ready) to show
	// team when username is clicked
});


var OldMessageView = Backbone.View.extend({
	className: 'js-message-box message-box row',

	createTemplate: _.template($('#message-template').text()),

	events: {
		"click": "toggleExpandMessage",
	},

	initialize: function(){
		$('.js-message-stream').append(this.el);

		this.render();
	},	

	render: function(){
		var renderedTemplate = this.createTemplate(this.model.attributes);

		this.$el.html( renderedTemplate );
	}
});
