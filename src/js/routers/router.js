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
      model: new User()
    });

    $('.app main').html(view.render().el);
  },

  login: function() {
    var view = new LoginView({
      model: new User()
    });

    $('.app main').html(view.render().el);
  },

  listUsers: function() {
    var view = new UsersView({
      model: new User()
    });
    $('.app main').html(view.render().el);
  },

  feed: function() {
    var view = new FeedView({
      model: new User()
    });

    $('.app main').html(view.render().el);
  },

  new: function() {
    var view = new LoginView({
      model: new User()
    });

    $('.app main').html('new tweet');
  }
});

export default new Router();

//
// var x = new RegisterView({
//   model: new User({
//     email: 'awilli1186@gmail.com'
//   })
// });
//
//
// console.log(x);
//
//
// // var userModel = model: new User({
// //   email: 'awilli1186@gmail.com'
// // });
// //
// // var x = new RegisterView({
// //   model: userModel
// // });
