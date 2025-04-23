    document.addEventListener("DOMContentLoaded", function () {
        // 현재 URL에서 #contactus 여부 확인
        if (window.location.hash === "#contactus") {
            const targetElement = document.getElementById("contactus");
            if (targetElement) {
                // 해당 요소로 스크롤 이동
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
    

// document.addEventListener('astro:page-load', () => {
$(document).ready(function(){
    $('.radi_wrap').each(function () {
        $(this).find('label').on('click', function() {
            const input = $('#' + $(this).attr('for'));

            $(this).closest('.radi_wrap').find('input').each(function() {
                $(this).prop('checked', false); 
                $('label[for="' + $(this).attr('id') + '"]').removeClass('checked');
            });

            // 클릭된 input에 checked 속성 추가
            input.prop('checked', true);

            // 클릭된 label에 checked 클래스 추가
            $(this).addClass('checked');
        });
    });
 })


$(document).ready(function () {
    $(".btn_submit").on("click", function (e) {
        e.preventDefault(); // 폼의 기본 동작 막기

        // 폼 데이터를 수집
        const form = document.querySelector(".form");
        const formData = new FormData(form);

        // 객체로 변환하여 확인 (디버깅용)
        let dataObject = {};
        formData.forEach((value, key) => {
            dataObject[key] = value;
        });
        console.log("폼 데이터:", dataObject);

        // AJAX 요청
        $.ajax({
            url: "https://wacus.co.kr/ajax/bringWacusContactDB2.php", // PHP 서버 경로
            method: "POST",
            data: JSON.stringify(Object.fromEntries(formData)), // JSON 형식으로 변환
            contentType: "application/json",
            success: function (response) {
                alert("문의가 성공적으로 전송되었습니다!");
                // console.log("서버 응답:", response);
                window.location.reload();
            },
            error: function (xhr, status, error) {
                alert("문의 전송 중 문제가 발생했습니다.");
                console.error("오류:", error);
            },
        });
    });
});