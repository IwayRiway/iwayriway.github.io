$(window).on('load', function(){
   setInterval(() => {
      $('.education .kanan').addClass('muncul');
      $('.education .kiri').addClass('muncul');
   }, 1000);
   $('.education .judul').addClass('muncul');
});

$(window).scroll(function(){
   var wScroll = $(this).scrollTop();
   console.log(wScroll);
   
   if(wScroll >= 200){
      setInterval(() => {
         $('.career .row-1').addClass('muncul');
      }, 1000);
      $('.career .judul').addClass('muncul');
   }
   
   if(wScroll >= 400){
      $('.career .row-2').addClass('muncul');
   }
   
   if(wScroll >= 600){
      $('.career .row-3').addClass('muncul');
   }
   
   if(wScroll >= 850){
      $('.my-skill .card').each(function(i){
         setTimeout(() => {
            $('.my-skill .card').eq(i).addClass('muncul');
         }, 500 * (i+1));
      });
      $('.my-skill .judul').addClass('muncul');
   }
});