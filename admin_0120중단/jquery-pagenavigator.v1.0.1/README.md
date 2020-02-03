jQuery PageNavigator
====================

## 소개

* jQuery 1.3.2 이상 필수
* 블로그 : http://syaku.tistory.com/249
* 데모 : http://syakuis.github.io/demo/jquery-pagenavigator/demo.html

jQuery 페이지 네비게이션은 게시물의 총수를 이용하여 목록 수 만큼 페이지를 구현하는 자바스크립트 라이브러리입니다.
사용자(개발자)의 HTML 디자인 그대로를 유지하며 그 위에 자바스크립트를 이용하여 페이지 링크를 적용하는 방식입니다.

예제로 NHN Nuli 와 Bootstrap UI 컴포너트를 이용하여 구현하였습니다.


### 초기 설정

```html
<script type="text/javascript" language="javascript" charset="UTF-8" src="http://code.jquery.com/jquery-1.6.2.min.js"></script>
<script type="text/javascript" language="javascript" charset="UTF-8" src="./jquery.pagenavigator.js"></script>
```

### 기본 사용 예제

```javascript
  jQuery('#document_navi').jaPageNavigator({
      page_row : "10" // 보여질 게시물 목록 수
    , page_link : "10" // 보여질 페이지 링크 수
    , total_count : "500" // 게시물 총 수
  });
```

```html
<div id="document_navi">
  <a class="start" href="#">&nbsp;처음</a>
  <a class="prev" href="#">&nbsp;이전&nbsp;({page_link})</a>
  <a class="prevpage" href="#">이전&nbsp;</a>
  
  <!-- 페이지 번호 링크가 노출되는 영역 -->
  <span class="pageaction"></span>
  <!-- 페이지 번호 링크 태그 -->
  <a class="num" href="">{page}</a>
  <!-- 현재 페이지 번호 태그 -->
  <strong class="now">{page}</strong>
  <!-- 페이지 링크 구분 태그 -->
  <span class="div">&nbsp;</span>

  <a class="nextpage" href="#">다음&nbsp;</a>
  <a class="next" href="#">다음&nbsp;({page_link})&nbsp;</a>
  <a class="end" href="#">끝&nbsp;</a>
</div>
```


### NHN Nuli 디자인을 사용 예제

* 링크가 없을때도 원하는 디자인을 표현할 수 있습니다.

```html
<div class="paginate_complex" id="document_navi2">
  <a class="direction sprev start" href="#"><span></span><span></span>&nbsp;처음</a>
  <a class="direction sprev startx">&nbsp;처음</a><!-- 링크가 없을 때 표시할 태그 -->

  <a class="direction sprev prev" href="#"><span></span>&nbsp;이전&nbsp;({page_link})</a>
  <a class="direction sprev prevx">&nbsp;이전</a><!-- 링크가 없을 때 표시할 태그 -->

  <a class="direction sprev prevpage" href="#"><span></span>이전&nbsp;(-1)</a>
  <a class="direction sprev prevpagex">이전&nbsp;(-1)</a><!-- 링크가 없을 때 표시할 태그 -->

  <span class="pageaction"></span>
  <a class="num" href="">{page}</a>
  <strong class="now">{page}</strong>
  <span class="div">&nbsp;</span>

  <a class="direction snext nextpage" href="#">다음&nbsp;(+1)<span></span></a>
  <a class="direction snext nextpagex">다음&nbsp;(+1)</a><!-- 링크가 없을 때 표시할 태그 -->

  <a class="direction snext next" href="#">다음&nbsp;({page_link})&nbsp;<span></span></a>
  <a class="direction snext nextx">다음&nbsp;</a><!-- 링크가 없을 때 표시할 태그 -->

  <a class="direction snext end" href="#">끝&nbsp;<span></span><span></span></a>
  <a class="direction snext endx">끝&nbsp;</a><!-- 링크가 없을 때 표시할 태그 -->

</div>
```

tag 는 댓글 페이지를 구현할때 유용하게 사용할 수 있습니다.

```javascript
  jQuery('#document_navi2').jaPageNavigator({
      page_row : "10" // 보여질 게시물 목록 수
    , page_link : "10" // 보여질 페이지 링크 수
    , total_count : "500" // 게시물 총 수
    , tag : '#document_navi2' // 특정 영역으로 이동 (책갈피)
  });
```


### 옵션 설명

* 필수 옵션 : total_count


```javascript
      group : $('#page_group') // 페이지태그 영역
    , start : '.start' // 처음페이지 태그
    , startx : '.startx' // 처음페이지 없을경우 숨김 태그
    , prev : '.prev' // 이전페이지 태그
    , prevx : '.prevx' // 이전페이지 없을경우 숨김 태그
    , pageaction : '.pageaction' // 페이지 번호 노출 영역
    , now : '.now' // 현재페이지번호 태그
    , num : '.num' // 페이지번호 태그
    , div : '.div' // 페이지번호 분리 태그
    , next : '.next' // 다음페이지 태그
    , nextx : '.nextx' // 다음페이지 없을경우 숨김 태그
    , end : '.end' // 마지막페이지 태그
    , endx : '.endx' // 마지막페이지 없을경우 숨김 태그
    , prevpage : '.prevpage' // 이전 1 페이지 태그
    , prevpagex : '.prevpagex' // 이전 1 페이지 없을경우 숨김 태그
    , nextpage : '.nextpage' // 다음 1 페이지 태그
    , nextpagex : '.nextpagex' // 다음 1 페이지 없을경우 숨김 태그
    , url : null // 기본적인 파라메터
    , page : null // 현재페이지번호
    , total_count : '0' // 총 레코드수
    , page_link : 10 // 페이지링크번호 노출 수
    , page_row : 10 // 레코드 노출 수
    , name : 'page' // 페이지 파라메터 명
    , autosort : false // 페이지번호 자동정렬 (선택된 번호가 중간에 위치) (버그있음)
    , tag : null // 인위적으로 노출할 위치
```





