var MessageView = Backbone.View.extend({
	className: 'message-box row',

	createTemplate: _.template($('#message-template').text()),

	events: {
		// "click": "setExpandMessage",
	},

	initialize: function(){
		$('.js-message-stream').prepend( this.el );

		this.render();

		this.listenTo(this.model, 'change', this.render);

	},

	render: function(){
		var renderedTemplate = this.createTemplate( this.model.attributes );

		this.$el.html( renderedTemplate );
	},

	// setExpandMessage: function(){
	// 	this.$el.toggleClass('expand');
	// },

	// Add second view here (when ready) to show
	// team when username is clicked
});