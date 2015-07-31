import User from '../models/user';
import Router from '../routers/router';

var LoginView = Backbone.View.extend({
  template: _.template($('#loginView').html()),

  events: {
    'click button': 'onSubmit'
  },

  initialize: function() {
    this.listenTo(this.model, 'login', this.onLogin);
  },

  onSubmit: function() {
    var $loginEmail = this.$('.loginEmailInput');
    var $loginPassword = this.$('.loginPswdInput');


    if ($loginEmail.val() && $loginPassword.val()) {
      this.model.login({
        email: $loginEmail.val(),
        password: $loginPassword.val()
      });

    } else {
      alert('Error: Username or Password.');
    }

  },

  onLogin: function(data){
    if (data.success) {
      Router.navigate('feed', {trigger: true});
    } else {
      console.log(data);
      alert('There was a problem logging you in. Please try again.\n' + data.error);
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

export default LoginView;
