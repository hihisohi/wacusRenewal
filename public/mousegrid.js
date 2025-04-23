$(document).ready(function(){
    window.addEventListener('mousemove', (event) => {
        // console.log(event.clientX, event.clientY);
        $('.mouseGrid').attr('style','--windowX:'+event.clientX+'px;--windowY:'+event.clientY+'px');
    });
});