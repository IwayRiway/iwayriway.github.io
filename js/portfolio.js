$(window).on('load', function(){
   setInterval(() => {
      $('.portfolio-1 .gambar').addClass('muncul');
   }, 1000);
   $('.portfolio-1 .kiri').addClass('muncul');
});

$(window).scroll(function(){
   var wScroll = $(this).scrollTop();
   console.log(wScroll);

   if(wScroll > 200){
      setInterval(() => {
         $('.portfolio-2 .gambar').addClass('muncul');
      }, 1000);
      $('.portfolio-2 .kanan').addClass('muncul');
   }

   if(wScroll > 700){
      setInterval(() => {
         $('.portfolio-3 .gambar').addClass('muncul');
      }, 1000);
      $('.portfolio-3 .kiri').addClass('muncul');
   }

   if(wScroll > 1200){
      setInterval(() => {
         $('.portfolio-4 .gambar').addClass('muncul');
      }, 1000);
      $('.portfolio-4 .kanan').addClass('muncul');
   }

   if(wScroll > 1700){
      setInterval(() => {
         $('.portfolio-5 .gambar').addClass('muncul');
      }, 1000);
      $('.portfolio-5 .kiri').addClass('muncul');
   }
});