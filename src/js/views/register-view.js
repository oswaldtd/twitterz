import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

import Router from '../routers/router';

var RegisterView = Backbone.View.extend({
  template: _.template($('#registerView').html()),

  events: {
    'click button': 'onSubmit'
  },

  initialize: function() {
    this.listenTo(this.model, 'register', this.onRegister);
  },

  onSubmit: function() {
    var $email = this.$('.emailInput');
    var $password = this.$('.passwordInput');
    var $passwordConfirm = this.$('.passwordConfirmInput');

    if ($password.val() === $passwordConfirm.val()) {

      // Save the user to the server via the api
      this.model.register({
        email: $email.val(),
        password: $password.val()
      });

    } else {
      alert('Your passwords do not match. Try again.');
    }

  },

  onRegister: function(data){
    if (data.success) {
      Router.navigate('users/listUsers', {trigger: true});
    } else {
      console.log(data);
      alert('There was a problem registering. Please try again.\n' + data.error);
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }


});

export default RegisterView;
