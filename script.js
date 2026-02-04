// 1. 책 요소를 가져옵니다.
const book = document.getElementById('bible-book');

// 2. 클릭 이벤트를 연결합니다.
book.addEventListener('click', function() {
    // 3. 'is-open' 클래스를 토글(껐다 켰다) 합니다.
    book.classList.toggle('is-open');
});
