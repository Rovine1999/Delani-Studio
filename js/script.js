$(document).ready(function() {
    $(".rov").click(function() {
        $("#design").toggle();
        $(".design").toggle();
    });
});

$(document).ready(function() {
    $(".wanjala").click(function() {
        $("#development").toggle();
        $(".dev").toggle();
    });
});

$(document).ready(function() {
    $(".rovine").click(function() {
        $("#product").toggle();
        $(".product").toggle();
    });
});

$(document).ready(function() {
  $("#photo1").mouseover(function() {
      $("#overlay1").show();
  })
  .mouseout(function() {
      $("#overlay1").hide();
  })
});

$(document).ready(function() {
    $("#photo2").mouseover(function() {
        $("#overlay2").show();
    })
    .mouseout(function() {
        $("#overlay2").hide();
    })
  });

  $(document).ready(function() {
    $("#photo3").mouseover(function() {
        $("#overlay3").show();
    })
    .mouseout(function() {
        $("#overlay3").hide();
    })
  });

  $(document).ready(function() {
    $("#photo4").mouseover(function() {
        $("#overlay4").show();
    })
    .mouseout(function() {
        $("#overlay4").hide();
    })
  });

  $(document).ready(function() {
    $("#photo5").mouseover(function() {
        $("#overlay5").show();
    })
    .mouseout(function() {
        $("#overlay5").hide();
    })
  });

  $(document).ready(function() {
    $("#photo6").mouseover(function() {
        $("#overlay6").show();
    })
    .mouseout(function() {
        $("#overlay6").hide();
    })
  });

  $(document).ready(function() {
    $("#photo7").mouseover(function() {
        $("#overlay7").show();
    })
    .mouseout(function() {
        $("#overlay7").hide();
    })
  });

  $(document).ready(function() {
    $("#photo8").mouseover(function() {
        $("#overlay8").show();
    })
    .mouseout(function() {
        $("#overlay8").hide();
    })
  });

function myFunction() {
 var name = document.getElementById("name").value;
 alert("We've recieved your message. Thank you for reaching out to us" + " " + name);
};

