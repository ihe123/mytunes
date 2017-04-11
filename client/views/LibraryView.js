// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  url:'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
    
    this.render();
    this.fetch();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  },

  fetch : function(){
    var context = this;
    $.ajax({
      url: this.url,
      type: 'GET',
      contentType: 'application/json',
      success: function(){
        context.render();
      },
      error: function(){

      }
    });
  }

});
