
// 디테일콘텐츠 스몰이미지 클릭하면 팝업이미지 띄우기
$('.detail1').on('click',function(e){
    e.preventDefault();
    $('.contents1').show();
})
$('.detail2').on('click',function(e){
    e.preventDefault();
    $('.contents2').show();
})
$('.detail3').on('click',function(e){
    e.preventDefault();
    $('.contents3').show();
})
$('.detail4').on('click',function(e){
    e.preventDefault();
    $('.contents4').show();
})


// 클로즈버튼 누르면 팝업닫기
$('.close1').on('click',function(){
    $('.contents1').hide();
})
$('.close2').on('click',function(){
    $('.contents2').hide();
})
$('.close3').on('click',function(){
    $('.contents3').hide();
})
$('.close4').on('click',function(){
    $('.contents4').hide();
})

// sns콘텐츠 스몰이미지 클릭하면 팝업이미지 띄우기
$('.sns1').on('click',function(e){
    e.preventDefault();
    $('.sns_popup1').show();
})
$('.sns2').on('click',function(e){
    e.preventDefault();
    $('.sns_popup2').show();
})
$('.sns3').on('click',function(e){
    e.preventDefault();
    $('.sns_popup3').show();
})
$('.sns4').on('click',function(e){
    e.preventDefault();
    $('.sns_popup4').show();
})
$('.sns5').on('click',function(e){
    e.preventDefault();
    $('.sns_popup5').show();
})
$('.sns6').on('click',function(e){
    e.preventDefault();
    $('.sns_popup6').show();
})
$('.sns7').on('click',function(e){
    e.preventDefault();
    $('.sns_popup7').show();
})
$('.sns8').on('click',function(e){
    e.preventDefault();
    $('.sns_popup8').show();
})

// 클로즈버튼 누르면 팝업닫기
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
const snb = document.querySelector('.snb')
const skills = document.querySelector('#skills')
console.log(snb, skills)
window.addEventListener("scroll", () => {
    if (window.scrollY > '500') {   // 스크롤Y 위치 값
    snb.setAttribute("style", "display: flex");
} else {
    snb.setAttribute("style", "display: none;");
}
});
const up_btn = document.querySelector('.up_btn')
const down_btn = document.querySelector('.down_btn')
console.log(up_btn, down_btn)
up_btn.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,0);
})
down_btn.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,document.body.scrollHeight);
})


// 스크롤시 풀페이지
var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 14) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})