import Friend from '../models/friend';
import BaseCollection from './base';


let Users = BaseCollection.extend({
  model: Friend,
  url: 'http://tiy-twitter.herokuapp.com/users',

  parse: function(response) {
    return response.data;
  }
});

export default Users;
