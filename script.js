// HTML이 다 준비된 뒤에 실행하도록 안전장치를 겁니다.
document.addEventListener('DOMContentLoaded', function() {

    // 1. PageFlip 라이브러리 초기화 (이름표를 PageFlip.PageFlip으로 수정!)
    const pageFlip = new PageFlip.PageFlip(document.getElementById('bible-book'), {
        width: 400,  // 페이지 너비
        height: 600, // 페이지 높이
        // 모바일/태블릿 반응형 설정
        size: 'stretch',
        minWidth: 300,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 700,
        showCover: true,
        maxShadowOpacity: 0.5 
    });

    // 2. HTML의 .my-page 요소들을 책의 페이지로 등록
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

    // 3. 링크 클릭 시 책 넘기는 효과
    const flipLinks = document.querySelectorAll('.flip-trigger');
    flipLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.href;
            pageFlip.flipNext(); // 책 넘기기
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600);
        });
    });

});
