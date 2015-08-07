import Backbone from 'backbone';
import {_} from 'underscore';

import Tweet from '../models/tweet';
import NewTweet from '../views/NewTweet-view';


let Feed = Backbone.Collection.extend({
  url: 'http://tiy-twitter.herokuapp.com/tweets',
  model: Tweet,

  parse: function(response) {
    return response.data;
    console.log(response);
  }
});

export default new Feed();
