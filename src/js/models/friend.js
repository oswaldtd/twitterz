import BaseModel from './base';

let Friend = BaseModel.extend({

  defaults: {
    email: '',
    following: false
  },
  parse: function(response) {
    var data = response.attributes;

    return data;
  }

});


export default Friend;
