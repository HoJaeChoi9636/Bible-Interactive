// 1. PageFlip 라이브러리 초기화
const pageFlip = new Stanko.PageFlip(document.getElementById('bible-book'), {
    width: 400, // 한 페이지의 너비
    height: 600, // 한 페이지의 높이
    size: 'fixed', // 고정 크기
    // 모바일에서도 잘 보이게 설정
    minWidth: 300,
    maxWidth: 500,
    minHeight: 400,
    maxHeight: 700,
    showCover: true, // 표지 모드 사용 (첫장과 끝장을 딱딱하게)
    maxShadowOpacity: 0.5 // 그림자 진하기 (0~1)
});

// 2. HTML의 .my-page 요소들을 책의 페이지로 등록
pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));


// 3. 링크 클릭 시 애니메이션 후 이동하는 로직
// .flip-trigger 라는 클래스를 가진 모든 링크를 찾습니다.
const flipLinks = document.querySelectorAll('.flip-trigger');

flipLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // (1) 기본 동작(바로 페이지 이동)을 막습니다.
        e.preventDefault();
        
        // (2) 이동할 목적지 주소를 가져옵니다.
        const targetUrl = link.href;

        // (3) 책을 다음 장으로 넘깁니다. (애니메이션 시작)
        pageFlip.flipNext();

        // (4) 애니메이션이 끝날 때쯤(600ms 후) 실제 페이지로 이동합니다.
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 600); // 600은 라이브러리 기본 애니메이션 시간과 비슷하게 맞춘 값입니다.
    });
});
