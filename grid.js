function showGrid()
{
  if($("#grid960").length == 0)
  {
    $('body').append("<div id='grid960'></div>");
    $('#grid960').height($(document).height());
    $('#grid960').append("<div id='v'></div>");
    $('#grid960 #v').append("<div id='h'></div>");
    for(var i=0; i<12; i++)
    {
      $('#grid960 #v').append("<div id='on'></div>");           
    }
    
    for(var j=0; j<Math.round($(document).height() / 60); j++)
    {
      $('#grid960 #v #h').append("<div id='on'></div>");
    }
  }
  
  $('#grid960').fadeToggle('fast');
}
