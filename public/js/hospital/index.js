$(document).ready(() => {
    const total = 80;
    const $marqueeBg = $('.sc-identity .marquee-bg');

    $.each(Array(total), function() {
        $marqueeBg.append('<div class="bg"></div>');
    });
})