import Ember from 'ember';
import Item from '../models/item';

export default Ember.Route.extend({
	model() {
		return new Item().all();
	}
});
