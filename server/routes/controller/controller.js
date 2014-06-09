module.exports = {

  index: {
    handler: function(request, reply){
        reply.view('index');
    }
  },

  about: {
    handler: function(request, reply){
        reply.view('about');
    }
  }

}
