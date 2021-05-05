
$(function(){

   /*  tong = $('.w_img').eq(0);
    clone = $('.w_img').eq(1); */

    tong = $('.w_img img').eq(0);
    clone = $('.w_img img').eq(1);



    tong.on('click',function() {
        $('.project1').addClass('active');
    })
    


    $('.x').on('click',function() {
        $('.project1').removeClass('active');
    })







    var fadeNum = 0;
    $('.sijang img').not(':first').hide(); 
    setInterval(function(){ 
        $('.sijang img').eq(fadeNum).fadeOut(1000); 
        fadeNum++;
        if(fadeNum == 4){fadeNum=0}
        $('.sijang img').eq(fadeNum).fadeIn(1000); 
    },2000);









    var color = {
        red : [224,255,224],
        green : [194,255,194],
        blue : [241,255,241]
    }
    var section, scrTop, winHei;

    $(window).on('scroll',function(){

        scrTop = $(this).scrollTop();
        winHei = $(window).height()/2;

        $('section').each(function(i){
            section = $('section').eq(i).offset().top;
            if(section - winHei < scrTop){
                $('body').css({
                    backgroundColor : `rgb(${color.red[i]},
                                        ${color.green[i]},
                                        ${color.blue[i]},0.2)`
                });
            }
        });


    });






})//end