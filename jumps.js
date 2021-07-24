var videos = [
    'bgedG5uZlq8', 'PpOI8ceuh6I', '6b-7GF2Lgqc', 'ivl8xJ_TWKs', 'XfNZpqa6AzY', 'YIfLkkTggQc', 'WDGnAmhboOo', 'jwWxVux0hDk', 'f_cSRAhdQtA', 'GnSijCmC64I', 'c0crjRMY_cg', '6HM4GR2qcVk', 'WAvkutB38DE', 'jHW04aadr5E', 'i7eVrLpSVlY', 'FXl5baHn108', 'YixknEJev4k', 'PeJZD9n7N0Q', 'jh0M_w57R_Y', 'TcSHcZ94y2g', 'ef4XeHcsdzw', 'jDDedhUSK34', '-9hp6Cp9Xu0', 'x2q-xMpILVI', '4mp5kBcdtHo', 'H9wI75DeDZM', '5kln83uWBEE', 'kp0njEoMSgY', '1wwx2hhh5Vw', '7f6QjoKwaSE', '34HzdZp_2EM', '__E2kG92HMQ', 'SEHrTcmxZ_E', 'I1HyIjclMIg', 'zs2y_ZYulCo', '4QAxYT0Sseo', 'NeNagsCuFcE', 'zZ-7vYFnh58', 'NeNagsCuFcE', 'uS92E2HYgFI', 'O0DtqlSiuj8', '6sa4yXacBC8', 'rH4XUhkD5jk', 'G9tABA0oPY0', 'd1bMpMQdhU4', 'knd5WRuptLo', 'R_QvUsr52cM', 'rrftzKTyS6E', 'Rfb3oi7G5co', 'm-bxyNBIRag', 'YkYC50ufljs', 'ol29jDmNaeY', 'YWm8MLjJnFQ', 'mIrnMBmdt9g', 'cp-98QldhWk', 'nI9AxMsVgek', 'mjzAglJ-c1A', 'pn_5SxCrBt0', 'YV1x9m_Fc_M', 'OEViKFXqUTw', 'CgnG1hwjbN4', 'WNao5bLJY9Y', 'fGlXNl0kPaI', 'YxUMWslnOcI', 'tcmvqGjKays', 'T4xuNlmY2pY', 'FXx2QiB1vwQ', 'juCtuRKApsA', '8rdGKLCwX5M', 'hzT5enG_ljk', '06QxnPDD4VQ', 'J1twOd9UT1k', 'FM9ApVexOhI', 'L-gMqCXAZW8', 'U-2fETu1eRc', '1CpnjZgC3dI', 'Qgbk720Tgpo', 'h_TiX_hocG4', 'VVJYTTaLzTY', 'gzV2OJihIfw', 'ONEc2ZUSShE', 'VsarsuxXUf4', 'NEPgbtlH1YI', 'tMErPK7GSSU', 'pI8UfnhuSaE', 'zU8ryjlKcsM', 'gPgGENUGb1Q', 'iIbErwQItk8', 'VZEz9qLLYsg', 'zCPyyiOc1r4', 'uIzR3FzrioE', 'vTwJ_3rVBZQ', '9iJ4FMD1RsA', 'B9_tUTZOM5c', 'kyY-OHF-9xk', 'OnlxGV0sOfw', 'H679tGXwOWE', 'LMUn0OAoyXQ', '6vOmKcRm0tM', 'Jy2uReC2yow', 'jiCtYOZd1Lg', '87tqzEFoUe8', 'QMKhzXxPpaE', 'KBaJHgmfZyI', 'XAdKI3V-YXI', 'nvRjKIu_xR8', 'I-meA018lLU', 'ExQaqPWgFII', 'ZEVymdv2UZ4', 'V-_E48CMcdg', '6QU9_0Q_jIM', '00s9m39r98Q', '2hMolKUs8CU', 'IekpmpdsJQE', 'Q2r-wt_pXgQ', 'E7vhbfBFhaA', 'Aaq6HdJpRb4', 'B1EBjSuATCM', 'mU6JZuOkmvQ', 'kAAypcRrOtE', '09KMN_Mcbp0', 'iXOTWUlQ2N0', 'zSLTS__4YqQ', 'llgWXjySM-E', 'bMqTphXV7z8', 'SxLSPagwSkw', 'Ns9qy2v7IrQ', '6yPrgteI6bI', 'wZ2iih1h1F0', 'JoVTGxbWkvk', '6rg8vYADOSM', 'lSRYcxX4Swc', '-avI2uay8f0', 'M3C0UCd0BXk', 'LVncLGuHFaA', 'WdMbf0w2fVg', 'qlAWo9Emk3M', 'LAqy6yIOvEw', 'stnavv5SEmM', 'Vx6vJTih23Q', 'eMoQIUTl6XU', '7kmyjUqQciE', '5KKXKxlg9B0', 'o1v1jmgMPSQ', 'JF3gROKt1zQ', 'Rvvk3PVEpw0', 'Gzv_oWUDiVs', 'vUsIcbDN7E0', 'dRnpMP3ZQlo', 'Jjx3BY-WQ-g', 'BfTyAGqT1a0', '4jiMogllT54', 'OzprJBK2dcQ', 'anwm65sPTI8', 'GC_S2ub4Lik', 'UtDw_ZFxbl8', 'ykpTO6hn2gw', 'UJgnj_McG9Y', 'YkkHGkqPT7o', '20FvYJt0-GY', 'Mpfc8j7dW9k', 'Aszy1-rDnrE', 'NaS3lJK7jXU', '3wCz37v17ok', '9hdrg6HOj6o', 'cZXRwIfYcRU', 'Nn0f6dJHDlQ', 'vzG_gZMyeSQ', '29zWdBj4P5g', 'wzCKX9cd09Q', 'tVRVNMN4yzU', 'NXD7Pcm0xwY', 'Y_ZrhT82lfM', 'esOxIdGBnqQ', 'Heza_HqyRzs', 'APbXfUhkgdI', 'uyVDMccLbkQ', 'mDeJgng8Ubw', '3g8W9G9CASQ', 'QVWx7dh_RqA', '1N_5v3kx_z8', 'bco3gickSHc', 'lE_UrwHgBsc', 'cLRwyUTNWHk', '5R8d63wnsCo', '-o9Kr8XhV9g', 'vNMkjdbhlV8', 'YZUGTOd5uns', 'DeN58p8xyuI', 'nJHYxmu6uH8', 'D4EUUuGWKfM', '57u0b3t5LJ0', '0WufeNvQEwQ', 'w7_Jv-p7GSA', '_quN6xT2Wfs', 'LG9C-LDS7K8', '1e8K3r72rLg', '9lRCtJNosZ0', '1rodG_bG6YM', '85rkSe3ZjJo', '-sAS-7pTySo', 'vo-VwuAhCow', 'LTOTbSsFBvY', 'vAOcEJHZ144', 'HEiBG7O0Rvw', '_eU11obXVHY', '0XeURlvC8K8', '9zWWxW8aeiw'
];

var videos_2 = [
    '7PBY-4dLPHc', '33l07iUdpqY', 'AnwPekG491I'
];

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

            //backup di hp kalo tidak tampil
            // var cek_button = $("#button").html(); 
            // if(empty(cek_button) || cek_button==null) {
            //     $("#jump-title").addClass("text-red");
            //     $("#jump-title").html("Please Update Your Browser Or Use Desktop Browser");
            //     $("#button").remove()
            // }

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

        var random_url = ['https://irpie-global.blogspot.com'];

        var index_url = Math.floor(Math.random() * random_url.length);
        generateDataUrlImg(random_url[index_url]); //a.generate-jump-img

    });


    $(document).ready(function() {

        var index = Math.floor(Math.random() * videos.length);
        var setVideo = '<iframe width="100%" height="200"   src="https://www.youtube.com/embed/' + videos[index] + '" frameborder="0" allowfullscreen></iframe>';
        $("#jump-video").html(setVideo);

        var index_2 = Math.floor(Math.random() * videos_2.length);
        var setVideo_2 = '<iframe width="100%" height="400"   src="https://www.youtube.com/embed/' + videos_2[index_2] + '" frameborder="0" allowfullscreen></iframe>';
        $("#jump-video-2").html(setVideo_2);

    });