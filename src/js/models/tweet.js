let Tweet = Backbone.Model.extend({
  url: 'http://tiy-twitter.herokuapp.com/tweets/',
  defaults: {
    body: '',
    user_id: {}
  },
  parse: function(response) {
    var data = response.attributes;
    data.id = response.id;

    // behind the scenes, calls model.set(data) using the object that was returned here.
    return data;
  }
});

export default Tweet;
