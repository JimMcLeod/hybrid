import Ember from 'ember';
import DS from "ember-data";

export default Ember.Controller.extend({
	init: function() {
		var store = this.get('store');
		var mag = {id: 1, magName: "MagPi - Issue 35", magLocation: "MagPi35", magPages: 70, magPagePrefix: "MagPi35-"};
		var magazines = store.createRecord('magazine', mag);
	},

	magazines: function() {
		var store = this.get('store');
		return store.all('magazine')
	}.property()
});
