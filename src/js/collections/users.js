import Backbone from 'backbone';
import {_} from 'underscore';

import Friend from '../models/friend';


let Users = Backbone.Collection.extend({
  model: Friend,
  url: 'http://tiy-twitter.herokuapp.com/users',

  parse: function(response) {
    return response.data;
  }
});

export default Users;
