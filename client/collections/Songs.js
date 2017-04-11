// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  //url:'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  // fetch : function(){
  // 	console.log(this.models);
  //   var context = this;
  //   $.ajax({
  //     url: this.url,
  //     type: 'GET',
  //     contentType: 'application/json',
  //     success: function(){
  //     	// _.each(context.models,function(){
  //     	// 	context.render();
  //     	// });
        
  //     },
  //     error: function(){

  //     }
  //   });
  // }

});
