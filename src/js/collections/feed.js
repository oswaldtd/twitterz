import Tweet from '../models/tweet'

var Feed = Backbone.Collection.extend({
  model: Tweet,
  url: 'http://tiy-twitter.herokuapp.com',

  parse: function(response) {
    return response.data;
  }
});

export default Feed;
