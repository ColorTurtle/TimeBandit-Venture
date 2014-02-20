/* global describe, it */

(function () {
    'use strict';

    describe('In our TimeBandits Chat App', function () {
        describe('when the "Go!" button is clicked', function () {
            it('should render an additional div on the page', function () {
            	// Daniel
            	var messagesBeforeTotal = $('.js-message-stream').find($('.message-box'));
            	$('.username').val('Debra');
            	$('.messageText').val('I got to party!');
            	$('.js-test-send-button').click();
            	var messagesAfterTotal = $('.js-message-stream').find($('.message-box'));
            	// var firstTodoText = 'Grab some beer.';
            	expect(messagesBeforeTotal.length).to.equal(messagesAfterTotal.length++);
            });

            it('should push an additional item to the server', function () {
            	// Jen
            });

            it('should throw an error if JavaScript is submitted in the input', function () {
            	// Daniel - holding off on this to discuss with Mason
            });

            it('should contain the value supplied in the input', function () {
            	// Daniel
            	$('.username').val('Nancy');
            	$('.js-test-send-button').click();
            	var firstMessageText = $('.message-stream').find('.user-name').text();
            	// var firstTodoText = 'Grab some beer.';
            	expect(firstMessageText).to.contain('Nancy');
            	// expect(true).to.equal(true);

            });

        });
    });
})();
