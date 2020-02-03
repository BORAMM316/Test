$(function(){
    // // -------------------- scrollbar custom --------------------
    // $('.profile, .lst_mail ul, .view_box').mCustomScrollbar({
    //     theme: 'dark'
    // });
    
    // -------------------- 검색창 --------------------
    $('#mail_srch').keydown(function(){
        $(this).next('label').hide();
        $('.clear_btn').show();
    });
    
    $('.clear_btn').click(function(){
        $('#mail_srch').val('').focus();
        $(this).hide();
    });
    
    $('#mail_srch').focusout(function(){
        if($(this).val() === '')
        $(this).next('label').show(); 
    });

    
    // -------------------- 메일제목 클릭 시 viewer 슬라이드오픈 --------------------
    $('.mail_info em a').click(function(){
        $('.stn_mail, .lst_mail li, .mail_chk, .mail_info, .mail_info span, .mail_starred, .stn_viewer').addClass('open');
    });
    
    $('.close_btn').click(function(){
        $('.stn_mail, .lst_mail li, .mail_chk, .mail_info, .mail_info span, .mail_starred, .stn_viewer').removeClass('open');
    });
    
    // -------------------- star(즐겨찾기) 버튼 --------------------
    $('span.far.fa-star').click(function(){
        $(this).next('span').css('display','block')
    });
    $('span.fas.fa-star').click(function(){
        $(this).css('display','none')
    });
});
