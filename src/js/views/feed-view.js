import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

import TweetView from './tweet-view';

var html = `
  <h2>Tweets</h2>
  <a href="#/feed/new"> <i class="fa fa-plus"></i> New Tweet</a>
  <a href="#/users/listUsers"> <i class="fa fa-users"></i> Users</a>
  <div class='feed'><div>
  `;

let FeedView = Backbone.View.extend({
  template: _.template(html),


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
