var money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    choseExpences:  function(){
        for(var i = 0; i < 2; i++){
            var costItem = prompt('Введите обязательную статью расходов в этом месяце');
            var costSum = prompt('Во сколько обойдется');
        
            if( (typeof(costItem)) === 'string' && (typeof(costItem)) != null && costItem != '' && costSum != ''){
                expenses[costItem] = costSum;
            } else {
                console.log('Error');
            }
        }
    },
    detectDayBudget: function(){
        var moneyPerDay = Math.round(appData.budjet/30);
        alert(moneyPerDay);
    },
    checkSevings: function(){
        if(appData.savings == true){
            var save = +prompt('Какова сума накоплений?');
            var persent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*persent;
    
            alert('сума накоплений: ' + appData.monthIncome);
        }
    },
    detectLevel: function(){
        var level = Math.round(appData.budjet/30);
        if(level > 1000){
            alert('низкий уровень достатка'); 
        } else if(level < 1000 || level > 2000){
            alert('средний уровень достатка');
        } else if (level < 2000){
            alert('високий уровень достатка');
        } else{
            alert('ошибка'); 
        }
    },
    chooseOptExpenses: function(){
        for(var i = 0; i < 3; i++){
            var costOptItem = prompt('Статья необязательных расходов?');
            var str = i+1;
            if( (typeof(costOptItem)) === 'string' && (typeof(costOptItem)) != null && costOptItem != ''){
                
                appData.optionalExpenses[str] = costOptItem;
            } else {
                console.log('Error');
            }
        } 
    },
    chooseIncom: function(){
        var item = prompt(' что принесет дополнительный доход?', '');
        if((typeof(item)) === 'string' && item != '' && (typeof(item)) != null){
            appData.income = item.split(', ');
            appData.income.push(prompt('может чтото еще?'));
            appData.income = appData.income.sort();
            
            appData.income.forEach(function(el, index){
                alert('Способы доп. заработка: ' + (index+1) + ' ' + el);
            });
        }

    }
};

appData.checkSevings();
appData.detectLevel();
appData.chooseOptExpenses();
appData.chooseIncom();
console.log(appData);
for(var key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' ' + appData[key]);
}
var y=1;
var x=y=2;
console.log(0||''||2||undefined||true||false);
