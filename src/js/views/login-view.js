import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

import Router from '../routers/router';

let html = `
<section class="login">
  <h2>Please Login</h2>
  <input type="email" placeholder="Enter E-mail" value="" class="emailInput">
  <input type="password" placeholder="Password" value="" class="passwordInput">
  <button type="button"><i class="fa fa-sign-in"></i> Sign In</button>
</section>
`;
var LoginView = Backbone.View.extend({
  template: _.template(html),

  events: {
    'click button': 'onSubmit'
  },

  initialize: function() {
    this.listenTo(this.model, 'login', this.onLogin);
  },

  onSubmit: function() {
    var $loginEmail = this.$('.emailInput');
    var $loginPassword = this.$('.passwordInput');

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
