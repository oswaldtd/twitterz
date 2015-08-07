import BaseModel from './base';

let Tweet = BaseModel.extend({
  url: 'http://tiy-twitter.herokuapp.com/tweets',
  defaults: {
    body: '',
  },

  parse: function(response) {
    return {
    body: response.attributes.body,
    user: response.attributes.user_id,
    }
  },

  newTweet: function(tweet) {
    $.ajax('http://tiy-twitter.herokuapp.com/tweets', {
      method: 'POST',
      dataType: 'toJSON',
      data: {
        body: tweet.attributes.body,
        user: tweet.attributes.user_id,
      }
    })
  }
});

export default Tweet;
