import Tweet from '../models/tweet';
import NewTweet from '../views/NewTweet-view';
import BaseCollection from './base';


let Feed = BaseCollection.extend({
  url: 'http://tiy-twitter.herokuapp.com/tweets',
  model: Tweet,

  parse: function(response) {
    return response.data;
    console.log(response);
  }
});

export default new Feed();
