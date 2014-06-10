module.exports = {

  index: {
    handler: function(request, reply){
        reply.view('index', {name: "chase"});
    }
  },

  about: {
    handler: function(request, reply){
        reply.view('about');
    }
  }

}
