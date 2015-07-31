import User from '../models/user';
import Router from '../routers/router';

var RegisterView = Backbone.View.extend({
  template: _.template($('#registerView').html()),

  events: {
    'click button': 'onSubmit'
  },

  onSubmit: function() {
    var $email = this.$('.emailInput');
    var $password = this.$('.passwordInput');
    var $passwordConfirm = this.$('.passwordConfirmInput');

    if ($password.val() === $passwordConfirm.val()) {
      var user = new User({
        email: $email.val(),
        password: $password.val()
      });

      // Save the user to the server via the api
      user.save();
      Router.navigate('feed', {trigger: true});

    } else {
      alert('Your passwords do not match. Try again.');
    }


  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }


});

export default RegisterView;
