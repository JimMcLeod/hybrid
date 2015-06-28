import DS from 'ember-data';

export default DS.Model.extend({
	magName:		DS.attr('string'),
	magLocation:	DS.attr('string'),
	magPages:		DS.attr('number'),
	magPagePrefix:	DS.attr('string')
});
