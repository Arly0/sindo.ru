$(function () {
   $('.btn').click(function () {
      $('#modal2').addClass('show-modal-block');
   });
});
$(function () {
   $('.modal2__close').click(function () {
       $('#modal2').removeClass('show-modal-block');
   }) ;
});