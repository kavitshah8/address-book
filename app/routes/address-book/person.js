import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	model: function(parmas){
		var url = '/people/' + parmas.id;
		// debugger;
		return ajax({url:url,type:'GET'}).then(function(res){
			debugger;
			return res;
		});
	},
});
