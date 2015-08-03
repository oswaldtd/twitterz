import RegisterView from '../views/register-view';
import LoginView from '../views/login-view';
import FeedView from '../views/feed-view';
import UsersView from '../views/users-view';
import User from '../models/user';
import Feed from '../collections/feed';

let Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'users/register': 'register',
    'users/login': 'login',
    'users/listUsers': 'listUsers',
    'feed': 'feed',
    'feed/new': 'new',
  },


  home: function() {
    $('.app main').html('<p id="home">Welcome! Please click register or login to get started!</p>');
  },

  register: function() {
    var view = new RegisterView({
      model: User
    });

    $('.app main').html(view.render().el);
  },

  login: function() {
    var view = new LoginView({
      model: User
    });

    $('.app main').html(view.render().el);
  },

  listUsers: function() {
    var view = new UsersView({
      model: User
    });
    $('.app main').html(view.render().el);
  },

  feed: function() {
    var collection = new Feed();
    var view = new FeedView({
      collection: collection,
      model: User
    });

    collection.fetch({
      success: function(){
        $('.app main').html(view.render().el);
      },
      error: function(){
        alert('Error getting tweets.');
      }
  });
  },

  new: function() {
    var view = new LoginView({
      model: User
    });

    $('.app main').html('new tweet');
  }
});

export default new Router();
