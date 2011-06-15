( function( $ )
{
  /*
    TODO do some work, sons. this is where you'll start creating your backbone shiz.
    
  */
  
  var Todo = Backbone.Model.extend(
    {
      
    } );
    
  var Todos = new ( Backbone.Collection.extend(
    {
      url   : '/todos',
      model : Todo
    } ) )( );
  
  console.log( Todos.fetch( ) );
  
} )( jQuery );