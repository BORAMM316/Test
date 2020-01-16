/*popup*/
$(function(){   
     // popup
   $(".sign > a").click(function(){
      $(".pwcheck_popup.active, .popupbg").fadeIn(100); 
   });
    $(".cancel").click(function(){
      $(".pwcheck_popup.active, .popupbg").fadeOut(100); 
   });
   
   $(".question_add_btn").click(function(){
      $(".question_popup.active, .popupbg").fadeIn(100); 
   });
    $(".cancel").click(function(){
      $(".question_popup.active, .popupbg").fadeOut(100); 
   });
   
   
   // input
   $(".write_box > input").focus(function(){       
       $(this).next().fadeOut(100);       
   });
    $(".write_box > input").focusout(function(){
        if($(this).val() === '')
        $(this).next().fadeIn(100); 
   });
});
