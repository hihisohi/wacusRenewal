
$(document).ready(function(){
    setTimeout(() => {
        
    
      /* FUNC ::: Flowing Text Duplicate */
            // 왼쪽 리스트
            const flowingLeft = document.querySelector('.flowing_wrap .tag_list.left');
            if (flowingLeft) {
                const leftItems = flowingLeft.innerHTML;
                flowingLeft.innerHTML += leftItems;
                flowingLeft.innerHTML += leftItems;
                flowingLeft.innerHTML += leftItems;
            }
    
            // 오른쪽 리스트
            const flowingRight = document.querySelector('.flowing_wrap .tag_list.right');
            if (flowingRight) {
                const rightItems = flowingRight.innerHTML;
                flowingRight.innerHTML += rightItems;
                flowingRight.innerHTML += rightItems;
                flowingRight.innerHTML += rightItems;
            }
       
    
         /* FUNC ::: Flowing Text Duplicate */
        function startRolling(){
            const txt = gsap.utils.toArray('.rolling_box p');
            const tl = gsap.timeline({
                repeat: -1,
                ease: 'none'
            })
    
    
            txt.forEach((item) => {
                tl.from(item, {
                    duration: 1, 
                    onComplete: ()=> {
                        txt.forEach((i) => {
                        i.classList.add('hide');
                        i.classList.remove('show');
                    });
    
                    item.classList.remove('hide');
                    item.classList.add('show');
                    }
                }).to(item, {
                    duration: 3,
                    onComplete: ()=> {
                        item.classList.add('hide');
                        item.classList.remove('show');
                    }
                })
            }, '+=1')
        }
    
        // startRolling();
        function startRolling2() {
        const tween = (timer) => {
            const $box = document.querySelector('.rolling_box .inner');
            const $height = document.querySelector('.rolling_box p').offsetHeight;
    
            setInterval(() => {
                $box.style.transitionDuration = "400ms";
                $box.style.marginTop = -$height + 'px';
    
                setTimeout(() => {
                    $box.style.transitionDuration = "";
                    $box.style.marginTop = "";
                    $box.appendChild($box.querySelector("p:first-child"));
                }, 400);
            }, timer); // this should be the interval time
        };
    
        tween(3000); // Call the function with a timer value (in ms)
    }
    
    startRolling2();
    
    }, 1500);
    
    })