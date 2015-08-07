import Friend from '../models/friend'

var Users = Backbone.Collection.extend({
  model: Friend,
  url: 'http://tiy-twitter.herokuapp.com/users',

  parse: function(response) {
    return response.data;
  }
});

export default Users;
