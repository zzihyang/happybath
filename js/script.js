$(function(){
    //slick 슬라이드
    $('.slides').slick({
        autoplay: true,
        dots: true,
    })

    //모바일 메뉴
    let btnOpen = $('.btn-open'),
        mMenu = $('.m-menu'),
        btnClose = $('.btn-close');
    //
    //btnOpen.click(function(){})
    btnOpen.on('click', function(){
        mMenu.animate({'left':0},600)
        console.log('zmf');
    })
    btnClose.on('click', function(){
        mMenu.animate({'left':'-110%'},600)
    })

})
