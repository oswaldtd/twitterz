import User from '../models/user';

let BaseCollection = Backbone.Collection.extend({
  sync(method, model, options) {
    if (User.isLoggedIn()) {
      options.headers = {
        'Authorization': 'Bearer ' + User.get('accessToken')
      };
    }

    Backbone.sync.call(this, method, model, options);
  }
});

export default BaseCollection;
