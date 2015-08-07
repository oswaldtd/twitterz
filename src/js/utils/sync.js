import Backbone from 'backbone';
import {_} from 'underscore';

import User from '../models/user';

var _sync = Backbone.sync;

Backbone.sync = function(method, model, options) {
  if (User.isLoggedIn()) {
    options.headers = {
      'Authorization': 'bearer ' + User.get('accessToken')
    };
  }

  _sync.call(this, method, model, options);
}

export default Backbone;
