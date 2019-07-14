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
});