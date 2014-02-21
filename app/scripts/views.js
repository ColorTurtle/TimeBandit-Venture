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
	},

	toggleExpandMessage: function(){
		this.$el.toggleClass('expand');//some reason, this is not working
		console.log('here?')//yes
	},

	// Add second view here (when ready) to show
	// team when username is clicked
});
