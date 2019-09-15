
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function(){

    
    function getData(data){
        return new Promise(function(resolve,reject){
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            
            
            request.addEventListener('onload', function(){
                if(request.readyState < 4){
                    resolve(this.response);
                } else if( request.readyState === 4 && request.status === 200){
                    resolve(this.response);
                }else {
                    reject();
                }
            });
            request.send();
        });
    }
    getData()
        .then(response => {
            let data = JSON.parse(response);
            console.log(data);
            inputUsd.value = inputRub.value / data.usd})
        .catch(()=> inputUsd.value = "Что-то пошло не так!");
});

/*inputRub.addEventListener('input', function(){

    /*let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });

});*/
