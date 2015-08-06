import BaseModel from './base';

let Tweet = Backbone.Model.extend({
  url: 'http://tiy-twitter.herokuapp.com',
  defaults: {
    body: '',
  },

  parse: function(response) {
    return {
    body: response.attributes.body,
    user: response.attributes.user_id,
    }
  },
  
  newTweet: function() {
    $.ajax(url, {
      method: 'POST',
      data: {
        body: attributes.body,
        user: attributes.user_id,
      }
    })
  }
});

export default Tweet;
