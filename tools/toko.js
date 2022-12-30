$(document).ready(function() {

    var variable_condition = $("#value_condition").html();
    if (variable_condition == null) {
        $("#label_condition").hide();
        $("#value_condition").hide();
    }

    var variable_stock = $("#value_stock").html();
    if (variable_stock == null) {
        $("#value_stock").hide();
        $("#label_stock").hide();
    }

    var variable_size = $("#value_size").html();
    if (variable_size == null) {
        $("#label_size").hide();
        $("#value_size").hide();
    }

    var variable_weight = $("#value_weight").html();
    if (variable_weight == null) {
        $("#label_weight").hide();
        $("#value_weight").hide();
    }

    var variable_box = $("#value_box").html();
    if (variable_box == null) {
        $("#label_box").hide();
        $("#value_box").hide();
    }

    var variable_buy = $("#value_buy").html();
    if (variable_buy == null) {
        $("#label_buy").hide();
        $("#value_buy").hide();
    }

    var variable_before = $("#value_before").html();
    if (variable_before == null) {
        $("#label_before").hide();
        $("#value_before").hide();
    }

    var variable_price = $("#value_price").html();
    if (variable_price == null) {
        $("#label_price").hide();
        $("#value_price").hide();
    }

     $("#inner-content").appendTo("#content");

    $("#thumbnail img").click(function(){
        var src = $(this).attr('src');
        $(".main-img").fadeOut("slow");
        $(".main-img").attr('src', src);
        $(".main-img").fadeIn("slow");
    });

    function image_ancor(id) {
        $("#"+id+" img").append(function(){
          var go = $(this).attr('src');
          $('<a href="'+go+'" imageanchor="1" >').insertBefore($(this));
          $('</a>').insertAftrer($(this));
        })
    }

});