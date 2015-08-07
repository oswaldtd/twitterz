import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

import Router from '../routers/router';
import Friend from '../models/friend';
import FriendView from './friend-view';

var html =
`<div class="users">
  <a href="#/feed/new"><i class="fa fa-plus"></i> New Tweet</a>
  <a href="#/feed"><i class="fa fa-rss"></i> Feed</a>
  </div>
  <div class="users-list"></div>
`;

var UsersView = Backbone.View.extend({
  template: _.template(html),

  render: function() {
    this.$el.html(this.template());

    this.collection.each((user) => {
      var view = new FriendView({
        model: user
      })
      this.$('.users-list').append(view.render().el);
    });

    return this;
  }
});

export default UsersView;
