import RegisterView from '../views/register-view';
import LoginView from '../views/login-view';
import User from '../models/user';

let Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'users/register': 'register',
    'users/login': 'login'
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
  }
});

export default new Router();
//
//
// import RegisterView from './views/register-view';
// import User from './models/user';
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
