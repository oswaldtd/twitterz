import Tweet from '../models/tweet';
import BaseCollection from './base';


let Feed = BaseCollection.extend({
  url: 'http://tiy-twitter.herokuapp.com',
  model: Tweet,

  parse: function(response) {
    return response.data;
  }
});

export default new Feed();
