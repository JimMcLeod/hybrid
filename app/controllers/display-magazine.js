import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['magName', 'page'],
    magName: null,
    page: null,

	imageLoadComplete: false,

    pageImageUrl: function() {
    	if (this.page<1) {
    		this.set('page', 1);
    	}
    	var model = this.get('model');
    	var pageNo = (this.page < 10) ? ("0" + this.page) : this.page;
    	return "http://jimdev.x10.mx/" + model.get('magLocation') + "/" + model.get('magPagePrefix') + pageNo + ".png";
    }.property('page'),

    actions: {
    	nextPage: function() {
    		var currentPage = parseInt(this.get('page'));
    		var model = this.get('model');

    		if (currentPage < model.get('magPages')) {
    			this.set('page', currentPage + 1)
    			model.set('currentPage', currentPage + 1);
    			this.set('imageLoadComplete', false);
    		}
    	},

    	prevPage: function() {
    		var currentPage = parseInt(this.get('page'));
			var model = this.get('model');

			if (currentPage > 1) {
				this.set('page', currentPage - 1)
    			model.set('currentPage', currentPage - 1)
    			this.set('imageLoadComplete', false);
			}
    	}
    }
});
