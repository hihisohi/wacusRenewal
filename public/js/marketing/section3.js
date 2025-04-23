$(document).ready(function(){
    function accClickEvent(){
        if($(window).width() < 1000){
            $('.marketing_section .mkt').click(function(){
                $('.marketing_section .mkt').removeClass('on');
                $(this).addClass('on');
            })
        } 
    }
    accClickEvent();
    $(window).resize(function(){
        accClickEvent();

    })

})