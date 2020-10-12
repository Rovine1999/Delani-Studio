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
      $("#overlay").show();
  })
  .mouseout(function() {
      $("#overlay").hide();
  })
});