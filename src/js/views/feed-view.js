import Tweet from '../views/tweet-view'


var html = `
<div class="feed">
  <a href="#/feed/new">New Tweet</a>
  <a href="#/users/listUsers">Users</a>
</div>
  <h2>Tweets</h2>
`;

var FeedView = Backbone.View.extend({
  template: _.template(html),

  className: 'tweets',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },


  render: function() {
    this.$el.empty();

    this.collection.each(function(tweet){
      var view = new Tweet({
        model: tweet
      });

      this.$el.append(view.render().el);
    }, this);

    return this;
  }
});

export default FeedView;
