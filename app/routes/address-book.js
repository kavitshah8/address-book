import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

	model: function() {
		
		return ajax({url:'/people',type:'GET'}).then(function(res){
			
			var peopleArray = res.people;
			
			peopleArray.sort(function(a, b) {

		    if (a.firstName < b.firstName) {
		    	return -1;
		    }

		    if (a.firstName > b.firstName) {
		    	return 1;
		    }

		    return 0;
		  });

			console.debug(peopleArray);

			return peopleArray;
		});
	},

});
