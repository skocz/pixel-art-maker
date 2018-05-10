// Select table and size 
const table = $("#pixel_canvas");
const colorPicker = $("#colorPicker");

function makeGrid() { 
  
  let row = $("#input_height").val();
  let col = $("#input_width").val();
  let number;

// this methods removes grid each time submit btn is pressed
    table.children().remove();
  
    for (let h= 1; h <= row; h++){
      if(row<=100){
        table.append("<tr></tr>");
      } //if row <=100

    for (let w =1; w<=col; w++){
      if(col <= 100){
        $("tr").last().append("<td></td>");
      }//if col <=100
    }// column loop
    }// row loop
  };// function makeGrid
 
  $("input[type='submit']").on("click", function(e) {
    e.preventDefault();
    makeGrid();
    playWithColors();
  }); // submit the grid into table

  function playWithColors(){
    $("td").on("dblclick", function(){
      $(this).css("background-color", "transparent");
    }); // remove the color with double click
  }; // end of function playWithColors

  $("input[type='reset']").on("click", function() {
    table.children().remove();
  }); // reset btn

  table.on("click","td", function(){
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  }); // submit the color into grid 
