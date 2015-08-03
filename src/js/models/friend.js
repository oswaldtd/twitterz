let Friend = Backbone.Model.extend({

  defaults: {
    email: '',
  },
  parse: function(response) {
    var data = response.attributes;

    // behind the scenes, calls model.set(data) using the object that was returned here.
    return data;
  }

});


export default Friend;
