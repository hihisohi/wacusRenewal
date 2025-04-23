//ajax 통신

// IP 주소 가져오기
function getIPAddress() {
    return new Promise((resolve, reject) => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => resolve(data.ip))
            .catch(error => {
                console.error('IP 주소를 가져오는데 실패했습니다:', error);
                resolve(''); // 실패 시 빈 문자열 반환
            });
    });
}

// 사용자 정보 수집 및 전송
async function sendUserInfo() {
    // IP 주소 가져오기
    const ip = await getIPAddress();
    
    // 사용자 정보 수집
    const userInfo = {
        referer: document.referrer,
        ip: ip,
        deviceType: /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'MO' : 'PC',
        currentUrl: window.location.href,
        os: navigator.platform
    };

    // AJAX 요청
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://wacus.co.kr/ajax/bringInflowData.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('사용자 정보가 성공적으로 전송되었습니다.');
            } else {
                console.error('사용자 정보 전송 중 오류가 발생했습니다.');
            }
        }
    };

    xhr.send(JSON.stringify(userInfo));
}

// 페이지 로드 시 사용자 정보 전송
document.addEventListener('DOMContentLoaded', function() {
    sendUserInfo();
});





    