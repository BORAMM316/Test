$(function(){
    // snb 서브메뉴리스트
    $(".snb > li").focusin(function(){
        $(this).addClass("active").find(".sub_lst").stop().slideDown(300);        
    });
    $(".snb > li").focusout(function(){
        $(this).removeClass("active").find(".sub_lst").stop().slideUp(300);        
    });
    
    
    //input[type="text"] placeholder
    $(".search_box .user_info_box input").focus(function(){
        $(this).next("label").hide();
    });
    $(".search_box .user_info_box input").focusout(function(){
        if($(this).val() === '')
        $(this).next("label").show(); 
    });
   
   
    // input[type="check"] 전체선택 / 해제
    $(".lst_chk").click(function(){
        $("#total_check").prop("checked",true);
    });
    
    $("#total_check").click(function(){
        if($("#total_check").prop("checked")){
            $(".lst_chk").prop("checked",true);
        } else {
            $(".lst_chk").prop("checked",false);
        }
    });    
});
