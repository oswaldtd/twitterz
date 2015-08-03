
import Router from '../routers/router';

var html = `
<div class="feed">
  <a href="#/feed/new">New Tweet</a>
  <a href="#/users/listUsers">Users</a>
</div>

<% if(user.email) { %>
  Hello, <%- email %>!
<% } %>
<p id="tweet"> 
<% _.each(tweets, function(tweet) { %>
  <%- tweet.body %>
<% }) %>
</p>
`;
var FeedView = Backbone.View.extend({
  template: _.template(html),


  render: function() {
    this.$el.html(this.template({
      user: this.model.toJSON(),
      tweets: this.collection.toJSON()
    }));
    return this;
  }


});

export default FeedView;
