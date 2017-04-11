// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	this.collection.forEach( function() {
  	  var newEntry = new SongQueueEntryView();
  	  newEntry.render();
  	});

  	this.collection.on('add remove', this.render, this);
  },

  render: function() {
    return this.$el;
  }

});
