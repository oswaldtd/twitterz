import TweetView from './tweet-view';

var html =`
  <h2>Tweets</h2>
  <a href="#/feed/new">New Tweet</a>
  <a href="#/users/listUsers">Users</a>
  `;

let FeedView = Backbone.View.extend({
  template: _.template(html),

  className: 'feed',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },


  render: function() {

    this.$el.html(this.template());

    this.collection.each((tweet) => {
      var view = new TweetView({
        model: tweet
      })
      this.$el.append(view.render().el);
    });

    return this;
  }
});

export default FeedView;
