import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		var controller = this.get('controller');
		$('#pageImage').on('load', function() {
			controller.set('imageLoadComplete', true);
		});
	}
});
