'use strict';

var should = require('should');
var utils = require('../utils');
var request = require('supertest');
var app = require('../../app');

var Browser = require("zombie");

describe("testing freelancer frontend", function() {
	var browser = new Browser();

	before(function(done) {
		// starting the server
		app.set('port', 3000);
		this.server = app.listen(app.get('port'));

		browser.visit('http://localhost:3000/', done);
	});

	describe('Reach using search', function() {
		it('should have the correct title', function() {
			browser.assert.text('title', 'JobAdvisor');
		});
	});
});