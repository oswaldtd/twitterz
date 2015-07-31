import User from '../models/user';
import Router from '../routers/router';

var LoginView = Backbone.View.extend({
  template: _.template($('#loginView').html()),

  events: {
    'click button': 'onSubmit'
  },

  onSubmit: function() {
    var $loginEmail = this.$('.loginEmailInput');
    var $loginPassword = this.$('.loginPswdInput');
    // var $email = this.$('.emailInput');
    // var $password = this.$('.passwordInput');

    if ($loginEmailInput.val() === $email.val()
      && $loginPswdInput.val() === $passwordInput.val()) {
      var user = User({
        email: $email.val(),
        password: $password.val()
      });

      user.save();
      Router.navigate('feed', {trigger: true});

    } else {
      alert('Error: Username or Password.');
    }

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

export default LoginView;


//   success: function() {
//     if ()
//   },
//
//   error: function() {
//     if ()
//   }
// });

// Save the user to the server via the api
