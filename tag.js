function tagBlog(elem,clas){
  var url      = window.location.href;
  var jmlSlash = url.split("/").length - 1;
  if(jmlSlash > 3){
    //alert(jmlSlash);
    var isi = $("#tag").html();
    var replace1 = "|#"+isi+"#|";
    var replace2 = replace1.replace("|#","<"+elem+" class='"+clas+"'>");
    var replace3 = replace2.replace(", #|","</"+elem+">");
    var replace4 = replace3.replace(",#|","</"+elem+">");
    var replace5 = replace4.replace("#|","</"+elem+">");
    var hasil = replace5.replace(/, /g,"</"+elem+"> <"+elem+" class='"+clas+"'>");
    $("#tag").html(hasil);
  } else {
    $("div[id=tag]").remove();
  }
}