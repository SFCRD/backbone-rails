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
  
  Todos.bind( 'refresh', function( event )
  {
    
    
    Todos.each( function( todo )
    {
      $( '#todos' ).append( Mustache.to_html( $( '#todo-template' ).html( ), todo.attributes ) );
    } );
    
    
    
  } );
  
  Todos.fetch( );

} )( jQuery );