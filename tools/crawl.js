/*
location return #ircrawlContent
crawlMethod : get / post
crawlUrl : url crawl
crawlTimer : second 1000, 3000, 5000
form id : #ircrawlForm
prepend : int

return data json

next response for page in ajax
finish = 0
skip = 0;

skip return data
skip = 1

data.item with class .ircrawl-item
*/

// $(document).ready(function() {
//     const crawlUrl = ""; 
//     const crawlMethod = "get";
//     const crawlTimer = "3000";
//     const crawlPrepends = "10";

//     ircrawl(crawlUrl, crawlMethod, crawlTimer, crawlPrepends);
// });

function ircrawlList(crawlPrepends){
    if(crawlPrepends > 0){ 
        $('#ircrawlContent').each(
            function() {
              const lengthItem = ($(this).find('.ircrawl-item')).length;
              if((parseInt(lengthItem) + 1) > parseInt(crawlPrepends)){
                console.log(lengthItem + crawlPrepends);
                $('#ircrawlContent .ircrawl-item:last').remove();
              }
            }
        );
    }
}

function ircrawlPrepend(content){
    if(content!=""){
        $('#ircrawlContent').prepend(content);
        $("#crawlLoader").css("background-color", "#91c335");
    }
}

function ircrawlLoader(crawlTimer){
    $("#crawlLoader").css("width", "0px");
    $("#crawlLoader").css("background-color", "#cccccc");
   
    var toggleWidth = $("#crawlLoader").hasClass('expanded') ? "0%" : "100%";
    $('#crawlLoader').animate({ width: toggleWidth }, parseInt(crawlTimer)-3000, function(){

    });
}

function ircrawl(crawlUrl, crawlMethod, crawlTimer, crawlPrepends) {
    ircrawlLoader(crawlTimer);

    console.log('Process ircrawl');
    const url = crawlUrl;

    if (crawlMethod == "post") {
        $.post(url, $("#ircrawlForm").serializeArray(), function(data) {
            console.log(data);
            const itemCrawl = data.item;
            if (typeof data != 'undefined') {
                if (data.finish == 0) {
                    setTimeout(function() {
                        ircrawl(crawlUrl, crawlMethod, crawlTimer, crawlPrepends);
                    }, crawlTimer);
                    if (data.skip != 1) {
                        ircrawlList(crawlPrepends);
                        ircrawlPrepend(itemCrawl);
                    } else {
                        console.log("skip Crawl");
                    }
                } else {
                    if (data.skip != 1) {
                        ircrawlList(crawlPrepends);
                        ircrawlPrepend(itemCrawl);
                    } else {
                        console.log("skip Crawl");
                    }
                    alert("Crawing Finish");
                    console.log('ircrawl post finish');
                }
            }
        }, 'json').fail(function(jqXHR, exception) {
            console.log(jqXHR);
            if (jqXHR.status != 200) {
                setTimeout(function() {
                    ircrawl(crawlUrl, crawlMethod, crawlTimer, crawlPrepends);
                }, crawlTimer);
            }
        });
    } else {
        $.get(url, function(data, status) {
            console.log(data);
            const itemCrawl = data.item;
            if (typeof data != 'undefined') {
                if (data.finish == 0) {
                    setTimeout(function() {
                        ircrawl(crawlUrl, crawlMethod, crawlTimer, crawlPrepends);
                    }, crawlTimer);
                    if (data.skip != 1) {
                        ircrawlList(crawlPrepends);
                        ircrawlPrepend(itemCrawl);
                    } else {
                        console.log("skip Crawl");
                    }
                } else {
                    if (data.skip != 1) {
                        ircrawlList(crawlPrepends);
                        ircrawlPrepend(itemCrawl);
                    } else {
                        console.log("skip Crawl");
                    }
                    alert("Crawing Finish");
                    console.log('ircrawl get finish');
                }
            }
        }, 'json').fail(function(jqXHR, exception) {
            console.log(jqXHR);
            if (jqXHR.status != 200) {
                setTimeout(function() {
                    ircrawl(crawlUrl, crawlMethod, crawlTimer, crawlPrepends);
                }, crawlTimer);
            }
        });
    }

    console.clear(); 
}