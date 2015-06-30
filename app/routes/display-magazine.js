import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		magName: {
			refreshModel: true
		},
		page: {
			refreshModel: true
		}
	},

	model: function(params) {
		var store = this.get('store');

		var mag = store.all('magazine').find(function(magazine) {
			return magazine.get('magName') === params.magName;
		});

		return mag;
	}
});
