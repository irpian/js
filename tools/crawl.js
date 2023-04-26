// $(document).ready(function(){
//     var exeimport = '<?=$executeimport?>';
//     if (exeimport == '1') {
//         $('#form_import').hide();
//         $('#result_import').html("Loading...");
//         // do import product
//         console.log('process');
//         doimport();
//     }
// });
//
// function doimport(){
//     console.log('masuk fungsi doimport');
//     var url = '/export.php';
//     // alert(url);
//     $.post(url,{doimport:'1'},function(data){
//         console.log(data);
//         if( typeof data != 'undefined' )
//         {
//
//             if(data.finish == 0){
//                 //doimport();
//                 setTimeout(function() { doimport(); } ,3000);
//                 $('#result_import').html(data.msg);
//             } else {
//                 $('#form_import').show();
//                 $('#result_import').html(data.msg);
//                 console.log('finish');
//             }
//         }
//     },'json').fail(function (jqXHR, exception) {
//         console.log(jqXHR);
//         if (jqXHR.status != 200) {
//             //doimport();
//             setTimeout(function() { doimport(); } ,3000);
//         }
//     });
//
// }
