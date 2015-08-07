import Backbone from 'backbone';
import {_} from 'underscore';

let Friend = Backbone.Model.extend({

  defaults: {
    email: '',
    following: false
  },

  parse: function(response) {
    var data = response.attributes;

    return data;
  }

});


export default Friend;
