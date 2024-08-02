$(document).ready(function(){
    $( "#dragg" ).draggable();
    // 
    $( "#dragable" ).draggable({ cursor: "move", cursorAt: { top: 56, left: 56 } });
    $( "#dragable2" ).draggable({ cursor: "crosshair", cursorAt: { top: -5, left: -5 } });
    $( "#dragable3" ).draggable({ cursorAt: { bottom: 0 } });
    // 
    $( "#draable" ).draggable({ handle: "p" });
    $( "#draable2" ).draggable({ cancel: "p.ui-widget-header" });
    $( "div, p" ).disableSelection();
    // revert
    $( "#revert" ).draggable({ revert: true });
    $( "#revert2" ).draggable({ revert: true, helper: "clone" });
    // 
    $( "#draggble" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // Resizable
    $( "#resizable" ).resizable();
    // Animate
    $( "#animate" ).resizable({
        animate: true
    });
    // 
    $( "#max" ).resizable({
        maxHeight: 250,
        maxWidth: 350,
        minHeight: 150,
        minWidth: 200
    });
    // 
    $( "#aspect" ).resizable({
        aspectRatio: 16 / 9
    });
    // 
    $( "#grid" ).resizable({
        grid: 50
    });
    // 
    $( "#textarea" ).resizable({
        handles: "se"
    });
    // 
    $( "#selectable" ).selectable();
    // 
    $( "#sortable" ).sortable();
    // 
    $( "#accordion" ).accordion({
        collapsible: true
    });
    // 
    $( "#acordion" ).accordion();
} );