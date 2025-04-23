// document.addEventListener('astro:page-load', () => { 
    $(document).ready(function(){
        // STEP 
            function checkChange() {
                    const inputs = document.querySelectorAll('.question_item.on .label_checkbox input'); // 현재 단계에서만 체크박스를 선택
                    const submitBtn = document.querySelector('.form_wrap .btn_submit');
                    
                    // 현재 단계에서 체크된 항목이 하나라도 있는지 확인
                    const isChecked = Array.from(inputs).some(input => input.checked);
        
                    if (isChecked) {
                        submitBtn.classList.add('completed');
                    } else {
                        submitBtn.classList.remove('completed');
                    }
               
            }
    
    
    
            function initializeSteps() {
                const stepBtns = document.querySelectorAll('.step_item');
                const stepCons = document.querySelectorAll('.question_item');
                const submitBtn = document.querySelector('.m.s5 .btn_submit');
                // const conWrap = document.querySelector('.m.s5 .con_area');
                // console.log(conWrap);
    
                // 첫 번째 단계는 항상 표시
                stepCons[0].classList.add('on');
                stepBtns[0].classList.add('on');  
                submitBtn.setAttribute('data-index',0);
    
                // 단계별 클릭 처리
                stepBtns.forEach((item, index) => {
                    item.addEventListener('click', (event) => {
                        event.preventDefault();    
    
                        // 모든 버튼과 단계 초기화
                        stepBtns.forEach(btn => {
                            btn.classList.remove('on');
                        });
                        stepCons.forEach(con => {
                            con.classList.remove('on');
                        });
    
                        // 현재 단계 활성화
                        stepBtns[index].classList.add('on');
                        stepCons[index].classList.add('on');
                        
    
                        submitBtn.setAttribute('data-index',index);
                        checkChange()
                    });
                });
            }
    
    
            function handleSubmitClick() {
                const submitBtn = document.querySelector('.form_wrap .btn_submit');
                const stepBtns =  document.querySelectorAll('.step_item');
                // const submitBtn = document.querySelector('.m.s5 .btn_submit');
                // const conWrap = document.querySelector('.m.s5 .con_area');
    
                submitBtn.addEventListener('click', (event) => {
                    event.preventDefault();
    
                    const currentStep = document.querySelector('.question_item.on');
                    const currentIndex = Array.from(document.querySelectorAll('.question_item')).indexOf(currentStep); 
                    const nextStep = currentStep.nextElementSibling; 
                    // console.log(nextStep);
    
                    // 완료된 상태일 때만 다음 단계로 이동
                    if (submitBtn.classList.contains('completed')) {
                        // 다음 단계가 존재하면
                        if (nextStep) {
                            submitBtn.setAttribute('data-index',currentIndex+1);
                            currentStep.classList.remove('on');
                            nextStep.classList.add('on');
                            checkChange();                     
                            const nextIndex = Array.from(document.querySelectorAll('.question_item')).indexOf(nextStep); 
                            stepBtns.forEach((btn, index) => {
                            
                                if (index === nextIndex) {
                                    btn.classList.add('on');
                                } else {
                                    btn.classList.remove('on');
                                }
                            });              
                        } else {
                            // console.log('더 이상 갈 곳이 없어');
                        }
                    } else {
                        // alert("하나라도 체크해 주셈");
                        if( $('.s5 .step_list').find('.on').index() != 4) {
                            alert("최소 한개의 선택지를 선택주세요.");
                        }
                    }
                });
            }
                    // LABEL CHECKBOX 이벤트
                    const labelCheckboxes = document.querySelectorAll('.label_checkbox');
    
                    labelCheckboxes.forEach((label) => {
                        label.addEventListener('click', (event) => {
                            event.preventDefault(); 
                            // 내부 input 요소 확인
                            const input = label.querySelector('input');
                            if (input.type === 'checkbox') {
                                // CHECKBOX 처리
                                input.checked = !input.checked; 
                            } else if (input.type === 'radio') {
                                // RADIO 처리
                                const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
                                // 동일한 name 그룹 초기화
                                radioGroup.forEach((radio) => (radio.checked = false));
                                // 현재 클릭된 라디오 활성화
                                input.checked = true;
                            }
                            checkChange();
                        });
                    });
    
    
            function init() {
                initializeSteps();    // 단계 초기화
                handleSubmitClick();  // 제출 클릭 시 처리
            }
    
            init();
    });
        
    
    // document.addEventListener('astro:page-load', () => {   
    $(document).ready(function(){  
        $('.s5 .step_list .step_item').click(function(){
            const inDex = $(this).index()+1;
            $(this).closest('.step_list').attr('style','--left:'+(inDex*20-20)+'%');
        })
        $('.s5 .btn_submit').click(function(){
            const dI = $(this).attr('data-index');
            $('.s5 .step_list').attr('style','--left:'+(dI*20)+'%');
        })
    });
    
    
    $(document).ready(function () {
        $(".btn_submit").on("click", function (e) {
            e.preventDefault(); // 폼 기본 동작 방지
    
            // 정보입력 단계인지 확인
            const inDexNumb = $('.s5 .step_list').find('.on').index();
    
            // 폼 데이터 객체 생성
            const formData = {};
    
            // 체크박스 (다중 선택): value 값 수집
            const selectedServices = [];
            document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
                selectedServices.push(checkbox.value); // 체크박스의 value 값 추가
            });
            formData.select1 = selectedServices;
    
            // 라디오 버튼 (단일 선택): value 값 수집
            const selectedPrice = document.querySelector('input[name="price_range"]:checked')?.value || '';
            formData.select2 = selectedPrice;
    
            const selectedDuration = document.querySelector('input[name="daration"]:checked')?.value || '';
            formData.select3 = selectedDuration;
    
            const selectedPath = document.querySelector('input[name="path"]:checked')?.value || '';
            formData.select4 = selectedPath;
    
            // 텍스트 입력 및 텍스트 영역 값 수집
            const name = document.querySelector('input[placeholder="이름을 입력해주세요."]').value.trim();
            const phone = document.querySelector('input[placeholder="‘-’를 제외한 숫자만 입력해주세요."]').value.trim();
            const email = document.querySelector('input[placeholder="이메일을 입력해주세요."]').value.trim();
            const company = document.querySelector('input[placeholder="회사명을 입력해주세요."]').value.trim();
            const inquiry = document.querySelector('textarea[placeholder="문의하실 내용을 입력해주세요."]').value.trim();
    
            formData.name = name;
            formData.phone = phone;
            formData.email = email;
            formData.company = company;
            formData.inquiry = inquiry;
    
            // if (inDexNumb != 4 || inDexNumb != 3) {
            //     console.log('정보입력단계가 아님');
            //     return;
            // } else {
            //     console.log('정보입력단계가 맞음');
            // }
    
            // 필수 입력값 검증
            if (!name || !phone || !email || !company || !inquiry) {
                alert("모든 필수 항목을 입력해주세요.");
                return;
            }
    
            if (!document.getElementById("agree").checked) {
                alert("개인정보처리방침에 동의해주세요.");
                return;
            }
    
            // 디버깅용 데이터 확인
            console.log("폼 데이터:", formData);
    
            // AJAX 요청
            $.ajax({
                url: "https://wacus.co.kr/ajax/bringWacusContactDB.php", // PHP 서버 URL
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(formData), // JSON 데이터로 변환
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