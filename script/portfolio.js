
// 핵심역량 토글
$(".keypoint").click(function(){
    $(".pop_keypoint").toggle();
});



// 디테일콘텐츠 스몰이미지 클릭하면 팝업이미지 띄우기
$('.detail1').on('click',function(e){
    e.preventDefault();
    $('.contents1').show();
    $('.close1').show();
    $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
})
$('.detail2').on('click',function(e){
    e.preventDefault();
    $('.contents2').show();
    $('.close2').show();
    $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
})
$('.detail3').on('click',function(e){
    e.preventDefault();
    $('.contents3').show();
    $('.close3').show();
    $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
})
$('.detail4').on('click',function(e){
    e.preventDefault();
    $('.contents4').show();
    $('.close4').show();
    $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
})


// 클로즈버튼 누르면 팝업닫기
$('.close1').on('click',function(){
    $('.contents1').hide();
    $('.close1').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.close2').on('click',function(){
    $('.contents2').hide();
    $('.close2').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.close3').on('click',function(){
    $('.contents3').hide();
    $('.close3').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.close4').on('click',function(){
    $('.contents4').hide();
    $('.close4').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})

// 확대이미지 누르면 팝업닫기
$('.popup1').on('click',function(){
    $('.contents1').hide();
    $('.close1').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.popup2').on('click',function(){
    $('.contents2').hide();
    $('.close2').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.popup3').on('click',function(){
    $('.contents3').hide();
    $('.close3').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.popup4').on('click',function(){
    $('.contents4').hide();
    $('.close4').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})




// // sns콘텐츠 스몰이미지 클릭하면 팝업이미지 띄우기
$('.sns1').on('click',function(e){
    e.preventDefault();
    $('.sns_popup1').show();
    $('.sns_close1').show();
})
$('.sns2').on('click',function(e){
    e.preventDefault();
    $('.sns_popup2').show();
    $('.sns_close2').show();
})
$('.sns3').on('click',function(e){
    e.preventDefault();
    $('.sns_popup3').show();
    $('.sns_close3').show();
})
$('.sns4').on('click',function(e){
    e.preventDefault();
    $('.sns_popup4').show();
    $('.sns_close4').show();
})
$('.sns5').on('click',function(e){
    e.preventDefault();
    $('.sns_popup5').show();
    $('.sns_close5').show();
})
$('.sns6').on('click',function(e){
    e.preventDefault();
    $('.sns_popup6').show();
    $('.sns_close6').show();
})
$('.sns7').on('click',function(e){
    e.preventDefault();
    $('.sns_popup7').show();
    $('.sns_close7').show();
})
$('.sns8').on('click',function(e){
    e.preventDefault();
    $('.sns_popup8').show();
    $('.sns_close8').show();
})


// // 클로즈버튼 누르면 팝업닫기
$('.sns_close1').on('click',function(){
    $('.sns_popup1').hide();
})
$('.sns_close2').on('click',function(){
    $('.sns_popup2').hide();
})
$('.sns_close3').on('click',function(){
    $('.sns_popup3').hide();
})
$('.sns_close4').on('click',function(){
    $('.sns_popup4').hide();
})
$('.sns_close5').on('click',function(){
    $('.sns_popup5').hide();
})
$('.sns_close6').on('click',function(){
    $('.sns_popup6').hide();
})
$('.sns_close7').on('click',function(){
    $('.sns_popup7').hide();
})
$('.sns_close8').on('click',function(){
    $('.sns_popup8').hide();
})

// 확대이미지 누르면 팝업닫기
$('.sns_popup1').on('click',function(){
    $('.sns_popup1').hide();
    $('.sns_close1').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.sns_popup2').on('click',function(){
    $('.sns_popup2').hide();
    $('.sns_close1').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.sns_popup3').on('click',function(){
    $('.sns_popup3').hide();
    $('.sns_close3').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.sns_popup4').on('click',function(){
    $('.sns_popup4').hide();
    $('.sns_close4').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.sns_popup5').on('click',function(){
    $('.sns_popup5').hide();
    $('.sns_close5').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.sns_popup6').on('click',function(){
    $('.sns_popup6').hide();
    $('.sns_close6').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.sns_popup7').on('click',function(){
    $('.sns_popup7').hide();
    $('.sns_close7').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
$('.sns_popup8').on('click',function(){
    $('.sns_popup8').hide();
    $('.sns_close8').hide();
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})




// 헤더메뉴 마우스 스크롤시 블랙적용
$(window).scroll(function() {
    if($(window).scrollTop() > 50) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
});
$(window).scroll(function() {
    if($(window).scrollTop() > 50) {
        $('.gnb a').addClass('active');
    } else {
        $('.gnb a').removeClass('active');
    }
});


// 스크롤 내리면 snb 고정메뉴 불러오기
// const snb = document.querySelector('.snb')
// const profile = document.querySelector('#profile')
// console.log(snb, profile)
// window.addEventListener("scroll", () => {
//     if (window.scrollY > '500') {   // 스크롤Y 위치 값
//     snb.setAttribute("style", "display: flex");
// } else {
//     snb.setAttribute("style", "display: none;");
// }
// });
// const up_btn = document.querySelector('.up_btn')
// const down_btn = document.querySelector('.down_btn')
// console.log(up_btn, down_btn)
// up_btn.addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0,0);
// })
// down_btn.addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0,document.body.scrollHeight);
// })


// 스크롤시 풀페이지
// var mHtml = $("html");
// var page = 1;


// mHtml.animate({scrollTop : 0},10);

// $(window).on("wheel", function(e) {
//     if(mHtml.is(":animated")) return;
//     if(e.originalEvent.deltaY > 0) {
//         if(page == 10) return;
//         page++;
//     } else if(e.originalEvent.deltaY < 0) {
//         if(page == 1) return;
//         page--;
//     }
//     var posTop =(page-1) * $(window).height();
//     mHtml.animate({scrollTop : posTop});
// })

$('#wrap').fullpage({
    scrollBar:true, //스크롤바 표시유무 true/flase
    scrollingSpeed:100, //스크롤 속도
    // menu:'.gnb',
    // anchors:['home','profile','project_web1','project_landing1','project_design_detail'],
    
    navigation:true, //우측 네비게이션 유무
    navigationTooltips:['Home','Profile','Skills','Progect-Web1', 'Progect-Web2', 'Landing1', 'Landing2', 'Design-Detail', 'Design-sns', 'End'],
    showActiveTooltip:true,
})


// 자바스크립트의 스크롤 제어
const tabBtn = document.querySelectorAll('.tab')
const section = document.querySelectorAll('.section')
console.log(tabBtn, section)  // 3 3

// 리뷰 클릭 시 리뷰 section 으로 이동하기
        tabBtn[0].addEventListener('click',function(e){
            e.preventDefault();
            window.scrollTo(0, section[0].offsetTop)
        })
        tabBtn[1].addEventListener('click',function(e){
            e.preventDefault();
            window.scrollTo(0, section[1].offsetTop)
        })
        tabBtn[2].addEventListener('click',function(e){
            e.preventDefault();
            window.scrollTo(0, section[3].offsetTop)
        })
        tabBtn[3].addEventListener('click',function(e){
            e.preventDefault();
            window.scrollTo(0, section[5].offsetTop)
        })
        tabBtn[4].addEventListener('click',function(e){
            e.preventDefault();
            window.scrollTo(0, section[7].offsetTop)
        })