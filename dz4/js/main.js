var money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();
var expenses = {};

function choseExpences(){
    for(var i = 0; i < 2; i++){
        var costItem = prompt('Введите обязательную статью расходов в этом месяце');
        var costSum = prompt('Во сколько обойдется');
    
        if( (typeof(costItem)) === 'string' && (typeof(costItem)) != null && costItem != '' && costSum != ''){
            expenses[costItem] = costSum;
        } else {
            console.log('Error');
        }
    }
}
choseExpences();
console.log(expenses);

var appData = {
    budjet: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: 0,
    income: 0,
    savings: true
};

console.log(appData);

function detectDayBudget(){
    alert(Math.round(appData.budjet/30));
}
detectDayBudget();

function checkSevings(){
    if(appData.savings == true){
        var save = +prompt('Какова сума накоплений?');
        var persent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*persent;

        alert('сума накоплений: ' + appData.monthIncome);
    }
}
checkSevings();

function detectLevel(){
    var level = money + appData.monthIncome;
    alert('уровень достатка: '+ level);
}
detectLevel();

var optionalExpenses  = {};

function chooseOptExpenses(){
    for(var i = 0; i < 3; i++){
        var costOptItem = prompt('Статья необязательных расходов?');
    
        if( (typeof(costOptItem)) === 'string' && (typeof(costOptItem)) != null && costOptItem != ''){
            var str = i+1;
            optionalExpenses[str] = costOptItem;
        } else {
            console.log('Error');
        }
    }
}
chooseOptExpenses();
console.log(optionalExpenses);
