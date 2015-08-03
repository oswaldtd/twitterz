let Tweet = Backbone.Model.extend({
  url: 'http://localhost/tweet/new',

  defaults: {
    content: '',
    user: {}
  },
  loadTweet: function() {
    $ajax('http://localhost/feed')
    
  }
});

export default new Tweet();
