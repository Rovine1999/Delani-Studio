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