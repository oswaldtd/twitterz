import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

let User = Backbone.Model.extend({
  url: 'http://tiy-twitter.herokuapp.com/users',
  method: "POST",

  defaults: {
    user: 0,
   accessToken: null,
   tokenType: null,
   expiresIn: 0,
   refreshtoken: null,
   email: ''
  },

  initialize() {
    this.fetch({
      success(model) {
        if(model.isLoggedIn()){
          model._loginSuccess();
        }
      }
    })
  },


  refreshAuth() {
    _.delay(() => {
      alert('token expired...time to fetch a new one');
    }, this.get('expiresIn') * 1000);
  },

  isLoggedIn() {
    return !!this.get('accessToken');
  },

  register: function(credentials) {
    $.ajax('http://tiy-twitter.herokuapp.com/users', {
      method: 'POST',
      dataType: 'json',
      data: {
        user: credentials
      }
    })
      .done(this.registerSuccess.bind(this))
      .fail(this.registerFail.bind(this));
  },

  login: function(credentials) {
    $.ajax('http://tiy-twitter.herokuapp.com/oauth/token', {
      method: 'POST',
      data: {
       email: credentials.email,
       password: credentials.password,
       grant_type: 'password'
   },
    })
      .done(this.loginSuccess.bind(this))
      .fail(this.loginFail.bind(this));
  },

  users: function() {
    $.ajax('http://tiy-twitter.herokuapp.com/users', {
      method: 'GET',
      data: {
        email: attributes.email,
        followers: attributes.followers
      },
    })
  },

  loginSuccess: function(response) {

    if (response) {
      this.set({
        email: response.email,
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
        tokenType: response.token_type,
        expiresIn: response.expires_in
    });
  }

    this.refreshAuth();

    this.trigger('login', {success: true, user: this});
  },

  loginFail: function(jqXHR, textStatus, errorThrown) {
    this.trigger('login', {success: false, error: errorThrown});
  },

  registerSuccess: function(data) {
    var data = {
      email: ''
    };

    this.set({
      email: data.email
    });

    this.trigger('register', {success: true, user: data});
    console.log('success!', data);
  },

  registerFail: function(jqXHR, textStatus, errorThrown) {
    this.trigger('login', {success: false, error: errorThrown})
    console.log('error!', errorThrown);
  }
});


export default new User();
