function submitNewUser(){if(""!==$("#input-username").val()){var a=$("#input-username").val();window.currentUser={username:a},$("#myModal").modal("hide"),$(".message-parent").show(),$(".js-launch-chat").hide(),$(".js-logout-btn").show();var b=_.template($("#show-username").text());$(".show-user").append(b()),$(".footer").show(),$("#input-username").val("")}}function submitNewMessage(){if(""!==$("#js-message-text").val()){var a=$("#js-message-text").val(),b=new Message({username:currentUser.username,messageText:a});messages.add(b),new MessageView({model:b}),b.save(),$(".message-stream").scrollTop($(".message-stream")[0].scrollHeight)}$("#js-message-text").val("")}function fetchMessages(){messages.fetch({success:function(){messages.each(function(a){new OldMessageView({model:a}),$(".message-stream").scrollTop($(".message-stream")[0].scrollHeight)})},error:function(){console.log("Sorry, guys. Something has gone wrong.")}})}var MessageView=Backbone.View.extend({className:"js-message-box message-box row",createTemplate:_.template($("#message-template").text()),events:{click:"toggleExpandMessage"},initialize:function(){$(".js-message-stream").append(this.el),this.render(),this.listenTo(this.model,"add",this.render),this.listenTo(this.model,"change",this.render)},render:function(){var a=this.createTemplate(this.model.attributes);this.$el.html(a),this.$el.find(".js-timestamp").html(new Date(parseInt(this.$el.find(".js-timestamp").html())).toLocaleTimeString())},toggleExpandMessage:function(){this.$el.toggleClass("expand")}}),OldMessageView=Backbone.View.extend({className:"js-message-box message-box row",createTemplate:_.template($("#message-template").text()),events:{click:"toggleExpandMessage"},initialize:function(){$(".js-message-stream").prepend(this.el),this.render()},render:function(){var a=this.createTemplate(this.model.attributes);this.$el.html(a),this.$el.find(".js-timestamp").html(new Date(parseInt(this.$el.find(".js-timestamp").html())).toLocaleTimeString())},toggleExpandMessage:function(){this.$el.toggleClass("expand")}}),Message=Backbone.Model.extend({idAttribute:"_id",defaults:{username:"Fred",messageText:"'Sup?",addId:"TimeBandits",messageDate:Date.now(),options:{}}}),MessagesCollection=Backbone.Collection.extend({model:Message,comparator:function(a){return-a.get("messageDate")},url:"http://tiny-pizza-server.herokuapp.com/collections/messages",parse:function(a){return _.filter(a,function(a){return _.isNumber(a.messageDate)&&""!==a.username})}}),TestMessagesCollection=Backbone.Collection.extend({model:Message,url:"http://0.0.0.0:3000/collections/contacts"});console.log("We have the best team! Go TimeBandits!"),$(document).ready(function(){window.messages=new MessagesCollection,$(".js-launch-chat").click(function(){$(".js-welcome").hide()}),$(".js-start-chat").click(function(){submitNewUser(),$(".message-stream").scrollTop($(".message-stream")[0].scrollHeight)}),$("#input-username").on("keyup",function(a){13===a.which&&""!==$(this).val()&&(submitNewUser(),$(".message-stream").scrollTop($(".message-stream")[0].scrollHeight))}),fetchMessages(),$("#js-message-text").hover(function(){$(this).focus()}),$("#js-message-text").on("keypress",function(a){return 13===a.which?(submitNewMessage(),$(this).val("").focus(),!1):void 0}),$(".js-send-button").click(function(){submitNewMessage()}),$(".js-logout-btn").click(function(){confirm("Are you sure?")&&($(".message-parent").hide(),$(this).hide(),$(".js-launch-chat").show(),$(".js-welcome").show(),$(".footer").hide())})});