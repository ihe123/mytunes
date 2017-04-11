// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  	this.on('add', function() {
  	  if (this.length === 1) {
        this.playFirst();
  	  }
  	}, this);

  	this.on('ended', function() {
      console.log('before :', this);
  	  this.shift();
      console.log('after: ', this);
  	  if (this.length > 0) {
  	  	this.playFirst();
  	  }
  	}, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this)

  },

  playFirst: function() {
    console.log('here!')
    this.at(0).play();
    console.log('second', this.at(1));
  }
});