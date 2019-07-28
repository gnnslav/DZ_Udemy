window.addEventListener('DOMContentLoaded', function(){
   
    var tab = document.querySelectorAll('.info-header-tab');
    var info = document.querySelector('.info-header');
    var tabcontent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(element){
        for(var i = element; i < tabcontent.length; i++){
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
    info.addEventListener('click', function(event){
        var target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(var i = 0; tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
      
    });

//Timer

    var dedline = '2019-07-15';

    function getTimeRemaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t/1000) % 60);
        var minutes = Math.floor((t/1000/60) % 60);
        var hours = Math.floor((t/1000/60/60));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setClock(id, endtime){
        console.log(id);
        var timer = document.getElementById(id);
        console.log(timer);
        var hours = timer.querySelector('.hours');
        var minutes = timer.querySelector('.minutes');
        var seconds = timer.querySelector('.seconds');
        var timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            var t = getTimeRemaining(endtime);

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

    var more = document.querySelector('.more');
    var overlay = document.querySelector('.overlay');
    var close = document.querySelector('.popup-close');
    
    function open(){
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', function (){
        open();
        this.classList.add('more-splash');
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    var descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach(function(el){
        el.addEventListener('click', function(){
        open();
        this.classList.add('more-splash');
        });
    });
    
});