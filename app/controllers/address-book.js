import Ember from 'ember';

export default Ember.Controller.extend({

	rightColumn: false,
	
	actions:{

		showRightColumn: function(){
			this.set('rightColumn', true);
		}
	}
});
