window.addEventListener('DOMContentLoaded', function(){
   
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabcontent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(element){
        for(let i = element; i < tabcontent.length; i++){
            tabcontent[i].classList.remove('show');
            tabcontent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(item){
        if (tabcontent[item].classList.contains('hide')){
            tabcontent[item].classList.remove('hide');
            tabcontent[item].classList.add('show');
        }
    
    }
    info.addEventListener('click', (event)=>{
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
      
    });

//Timer

    let dedline = '2019-08-05';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/1000/60/60));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setClock(id, endtime){
        console.log(id);
        let timer = document.getElementById(id);
        console.log(timer);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);

            if (t.hours < 10){
                hours.textContent = '0' + t.hours;
            } else{
                hours.textContent = t.hours;
            }

            if (t.minutes < 10){
                minutes.textContent = '0' + t.minutes;
            } else{
                minutes.textContent = t.minutes;
            }

            if(t.seconds < 10){
                seconds.textContent = '0' + t.seconds;
            }else{
                seconds.textContent = t.seconds;
            }

            if (t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', dedline);
//modal window

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    
    function open(){
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', function() {
        open();
        this.classList.add('more-splash');
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach(function(el){
        el.addEventListener('click', function(){
        open();
        this.classList.add('more-splash');
        });
    });

    // form

    let message = {
        loading: "Загрузка ...",
        success: "Мы свяжемся с вами",
        failrule: "Что-то пошло не так"
    }

    let form = document.querySelector('.main-form');
    let input = document.getElementsByTagName('input');
    let statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-Type', 'application/json', 'charset="utf-8"');

        let formData = new FormData(form);
        let obj = {};

        formData.forEach(function (value, key){
            obj[key] = value;
        });
        console.log(obj);
        let stringJson = JSON.stringify(obj);
        console.log(stringJson);

        //request.send(formData);
        request.send(stringJson);

        request.addEventListener('readystatechange', function(){
            if(request.readyState < 4){
                statusMessage.innerHTML = massage.loading;
            } else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = massage.success;
            }else{
                statusMessage.innerHTML = massage.failrule;
            }
        });

        for(let i = 0; i < input.length; i++){
            input[i].value = '';
        }
    });
});