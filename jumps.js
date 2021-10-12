    $(document).ready(function() {
        function GetURLParameter(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('%26');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                    if (typeof sParameterName[1] != "undefined") {
                        //return sParameterName[1];
                        var return_parameter = decodeURIComponent(sParameterName[1]).replace("?m","").replace("&m","");
                        //alert(return_parameter);
                        return return_parameter;
                    } else {
                        return "null";
                    }
                }
            }
        }

        function blink() {
            $("#button").animate({opacity:'+=1'}, 1000);
            $("#button").animate({opacity:'-=0.5'}, 1000, blink);
        }

        var datax = GetURLParameter("data");
        if (typeof datax != "undefined") {
            //alert(atob(unescape(encodeURIComponent(datax))));

            var getdata = atob(unescape(encodeURIComponent(datax)));
            var data = getdata.split("|");
            if (data[0]) {
                $("#button").attr("href", data[0]);
                $("#button").html("Go To Link");
                blink();
            } else {

            }

            if (data[1]) {
                $("#jump-title").html(data[1]);
                $("h1.title a").html(data[1]);
            }

            var checkMatch = data[0].match(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
            if (checkMatch != null) {
                $("#button").remove();
                $("#jump-img").attr("src", data[0]);
            } else {
                $("#jump-img").remove();
            }

        } else {
            $("#jump").remove();
            $("#jump-video").remove();
        }

        //generate url
        function generateDataUrlImg(randomUrl) { 
            var elems = $('a.generate-jump-img');
            for (var i = 0; i < elems.length; i++){
                elems[i]['href'] = randomUrl +"?data="+btoa(elems[i]['href']+"|"+elems[i]['title']); 
            }
        }

        var index_url = Math.floor(Math.random() * jump_url.length);
        generateDataUrlImg(jump_url[index_url]); //a.generate-jump-img

    });


    $(document).ready(function() {

        var index = Math.floor(Math.random() * videos.length);
        var setVideo = '<iframe width="100%" height="200"   src="https://www.youtube.com/embed/' + videos[index] + '" frameborder="0" allowfullscreen></iframe>';
        $("#jump-video").html(setVideo);

        var index_2 = Math.floor(Math.random() * videos_2.length);
        var setVideo_2 = '<iframe width="100%" height="400"   src="https://www.youtube.com/embed/' + videos_2[index_2] + '" frameborder="0" allowfullscreen></iframe>';
        $("#jump-video-2").html(setVideo_2);

    });