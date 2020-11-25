$(window).on('load', function(){
   setInterval(() => {
      $('.hero .kiri').addClass('muncul');
   }, 1000);
   $('.hero .kanan').addClass('muncul');
   // console.log($('.about').offset().top);
});

$(window).scroll(function(){
   var wScroll = $(this).scrollTop();
   console.log(wScroll);
   
   if(wScroll >= 200){
      setInterval(() => {
         $('.about .kiri').addClass('muncul');
      }, 1000);
      $('.about .kanan').addClass('muncul');
   }
   
   if(wScroll >= 500){
      $('.skill .kiri').addClass('muncul');

      $('.skill .card').each(function(i){
         setTimeout(() => {
            $('.skill .card').eq(i).addClass('muncul');
         }, 500 * (i+1));
      });
   }
   
   if(wScroll >= 1200){
      $('.char .judul').addClass('muncul');

      $('.char .card').each(function(i){
         setTimeout(() => {
            $('.char .card').eq(i).addClass('muncul');
         }, 500 * (i+1));
      });
   }
});