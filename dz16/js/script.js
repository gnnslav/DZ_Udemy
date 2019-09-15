window.addEventListener('DOMContentLoaded', function(){
   'use strict'

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

    let dedline = '2019-08-28';

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
        let formData = new FormData(form);

        function postData(data){
            return new Promise(function (resolve, reject){
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json', 'charset="utf-8"');

                request.addEventListener('readystatechange', function(){
                    if(request.readyState < 4){
                        resolve();
                    } else if(request.readyState === 4 && request.status == 200){
                        resolve();
                    }else{
                        reject();
                    }
                });
                request.send(stringJson);  
            });
        }

        let obj = {};

        formData.forEach(function (value, key){
            obj[key] = value;
        });

        let stringJson = JSON.stringify(obj);
        console.log(stringJson);

        function clearInput(){
            for(let i = 0; i < input.length; i++){
                input[i].value = '';
            }
        }

        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> {
                statusMessage.innerHTML = '';
            })
            .catch(()=> statusMessage.innerHTML = message.failrule)
            .then(clearInput);

    });

    // slider

    let sliderIndex = 1;
    let sliders = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    function showSlides (n){
        if(n > sliders.length){
            sliderIndex = 1;
        }
        if(n < 1){
            sliderIndex = sliders.length;
        }
        sliders.forEach((item) => {item.style.display = "none";});
        dots.forEach((item) => {item.classList.remove('dot-active');});
        sliders[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');
    }
    showSlides(sliderIndex);

    function plusSlide(n){
        showSlides(sliderIndex += n);
    }
    function currentSlide(n){
        showSlides(sliderIndex = n);
    }
    prev.addEventListener('click', function(){
        plusSlide(-1);
    });
    next.addEventListener('click', function(){
        plusSlide(1);
    });

    dotWrap.addEventListener('click', function(event){
        for(let i = 0; i < dots.length + 1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });


    //culc

    let persons = document.querySelectorAll('.counter-block-input')[0];
    let restdays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.getElementById('select');
    let totalValue = document.getElementById('total');
    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function(){
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restdays.value == '' || persons.value == ''){
            totalValue.innerHTML = 0;
        } else{
            totalValue.innerHTML = total;
        }
    });

    
    restdays.addEventListener('change', function(){
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restdays.value == '' || persons.value == ''){
            totalValue.innerHTML = 0;
        } else{
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function(){
        if(persons.value == '' || restdays.value == ''){
            totalValue.innerHTML = 0;
        } else{
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })
    
});