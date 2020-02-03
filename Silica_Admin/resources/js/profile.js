$(function(){
    //피드공유버튼 클릭 시 링크복사, 트위터&페이스북 링크연결 버튼 등장
    $('.share_btn').click(function(){
        $('.add_share_btn, .share_btn_box').addClass('active');
    });


    //트위터, 페이스북 공유링크연결
    $('.add_share_btn a').click(function(){
        shareOpen(this);
    });

    function shareOpen(a){
        var snsLink = $(a).attr('id');
        var cUrl = 'https://boramm316.github.io/Test/Silica_Admin/profile';

        switch(snsLink){
            //트위터
            case 'twitter_btn' :
            cUrl = 'https://twitter.com/intent/tweet?text=페이지제목:&url='+cUrl;
            break;

            //페이스북
            case 'facebook_btn' :
            cUrl = 'http://www.facebook.com/sharer/sharer.php?u='+cUrl;
            break;
        }
        window.open(cUrl,'','width=600,height=300,top=100,left=100,scrollbars=yes');
    }
});
