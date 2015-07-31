import RegisterView from '../views/register-view';
import LoginView from '../views/login-view';
import FeedView from '../views/feed-view';
import UsersView from '../views/users-view';
import User from '../models/user';

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
    $('.app main').html('Welcome!');
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
    var view = new FeedView({
      model: User
    });

    $('.app main').html(view.render().el);
  },

  new: function() {
    var view = new LoginView({
      model: User
    });

    $('.app main').html('new tweet');
  }
});

export default new Router();
