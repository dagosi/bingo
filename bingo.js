$(document).ready(function() {
  var board = getBoardFromSession();
  console.log(board)

  function getBoardFromSession() {
    let boardFromSession = sessionStorage.getItem("board");

    if(boardFromSession) {
      return JSON.parse(boardFromSession);
    } else {
      return Array.from(Array(75), (_, i) => i + 1);
    }
  }

  function drawNumber() {
    let randomNumber = Math.floor(Math.random() * (board.length - 1 + 1) );
    let number = board.splice(randomNumber, 1)[0];

    $("table td").each(function(index, td) {
      let cellNumber = parseInt($(td).text());

      if(number == cellNumber) {
        $(td).css("background-color", "crimson")
      };
    });

    sessionStorage.setItem("board", JSON.stringify(board));

    return number;
  }

  function isNumberInBoard(number) {
    return board.find(el => el == number) != undefined;
  }

  function colorCell(cell) {
    cell.css("background-color", "crimson");
  }

  function colorCellFromSession(cellNumber, tdSelector) {
    if(!isNumberInBoard(cellNumber)) {
      let cell = $(tdSelector).last();
      colorCell(cell);
    }
  }

  function printBoard() {
    for(i = 0; i <= 15; i++) {
      if(i == 0) {
        $("table #b").append("<td class=letter>B</td>")
      } else {
        $("table #b").append("<td>" + i +"</td>");
        colorCellFromSession(i, "table #b td");
      }
    }

    for(i = 15; i <= 30; i++) {
      if(i == 15) {
        $("table #i").append("<td class=letter>I</td>")
      } else {
        $("table #i").append("<td>" + i +"</td>")
        colorCellFromSession(i, "table #i td");
      }
    }

    for(i = 30; i <= 45; i++) {
      if(i == 30) {
        $("table #n").append("<td class=letter>N</td>")
      } else {
        $("table #n").append("<td>" + i +"</td>");
        colorCellFromSession(i, "table #n td");
      }
    }

    for(i = 45; i <= 60; i++) {
      if(i == 45) {
        $("table #g").append("<td class=letter>G</td>")
      } else {
        $("table #g").append("<td>" + i +"</td>");
        colorCellFromSession(i, "table #g td");
      }
    }

    for(i = 60; i <= 75; i++) {
      if(i == 60) {
        $("table #o").append("<td class=letter>O</td>")
      } else {
        $("table #o").append("<td>" + i +"</td>");
        colorCellFromSession(i, "table #o td");
      }
    }
  }

  function resetBoard() {
    sessionStorage.clear();
  }

  printBoard();

  $("#new-draw").on('click', function() {
    let number = drawNumber();
    $("#draw").text(number);

    if(board.length == 0) {
      $(this).prop('disabled', true);
    }
  });

  $("#new-bingo").on('click', function() {
    sessionStorage.clear();
    location.reload();
  });
});
