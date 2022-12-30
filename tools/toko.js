function tokopedia(){
    $("#tokopedia").html('Jika Anda merasa bertansaksi dengan kami kurang merasa aman, Anda juga dapat mengajukan kepada kami agar produk ini berada di dalam daftar produk di Tokopedia sehingga ada dapat membeli dengan perantara pihak ketiga.');
}

$(document).ready(function() {

    var variable_condition = $("#value_condition").html();
    if (variable_condition == "") {
        $("#label_condition").hide();
        $("#value_condition").hide();
    }

    var variable_stock = $("#value_stock").html();
    if (variable_stock == "") {
        $("#value_stock").hide();
        $("#label_stock").hide();
    }

    var variable_size = $("#value_size").html();
    if (variable_size == "") {
        $("#label_size").hide();
        $("#value_size").hide();
    }

    var variable_weight = $("#value_weight").html();
    if (variable_weight == "") {
        $("#label_weight").hide();
        $("#value_weight").hide();
    }

    var variable_box = $("#value_box").html();
    if (variable_box == "") {
        $("#label_box").hide();
        $("#value_box").hide();
    }

    var variable_material = $("#value_material").html();
    if (variable_material == "") {
        $("#label_material").hide();
        $("#value_material").hide();
    }

    var value_color = $("#value_color").html();
    if (value_color == "") {
        $("#label_color").hide();
        $("#value_color").hide();
    }

    var value_garansi = $("#value_garansi").html();
    if (value_garansi == "") {
        $("#label_garansi").hide();
        $("#value_garansi").hide();
    }

    var variable_buy = $("#value_buy").html();
    if (variable_buy == "") {
        $("#label_buy").hide();
        $("#value_buy").hide();
    }

    var variable_before = $("#value_before").html();
    if (variable_before == "") {
        $("#label_before").hide();
        $("#value_before").hide();
    }

    var variable_price = $("#value_price").html();
    if (variable_price == "") {
        $("#label_price").hide();
        $("#value_price").hide();
    }

    $("#inner-content").appendTo("#content");

    $("#thumbnail img").click(function(){
        var src = $(this).attr('src');
        $(".main-img").fadeOut("fast", function() {
            $(".main-img").fadeIn("fast");
            $(".main-img").attr('src', src);
        });
    });

    function image_ancor(id) {
        $("#"+id+" img").append(function(){
          var go = $(this).attr('src');
          $('<a href="'+go+'" imageanchor="1" >').insertBefore($(this));
          $('</a>').insertAftrer($(this));
        })
    }

    tokopedia();

});
