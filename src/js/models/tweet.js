import Backbone from 'backbone';
import {_} from 'underscore';

let Tweet = Backbone.Model.extend({
  url: 'http://tiy-twitter.herokuapp.com/tweets',
  defaults: {
    body: '',
  },

  parse(response) {
    // Fetch from model sync
    if (response.data) {
      return {
        body: response.data.attributes.body,
        user: response.data.attributes.user_id
      }
    }

    // Collection
    return {
      body: response.attributes.body,
      user: response.attributes.user_id,
    }
  },

  sync(method, model, options) {
    if (model && (method == 'create' || method == 'update')) {
        options.attrs = {
          tweet: model.toJSON()
        };
    }

    Backbone.sync.call(this, method, model, options);
  }
});

export default Tweet;
