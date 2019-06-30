var start = document.getElementById('start');

var budgetValue = document.querySelector('.budget-value');
var daybudget = document.querySelector('.daybudget-value');
var levelValue = document.querySelector('.level-value');
var expensesValue = document.querySelector('.expenses-value');
var optionalexpensesValue = document.querySelector('.optionalexpenses-value');
var incomeValue = document.querySelector('.income-value');
var monthsavingsValue = document.querySelector('.monthsavings-value');
var yearsavingsValue = document.querySelector('.yearsavings-value');

var expensesItem = document.querySelectorAll('.expenses-item');

var btn = document.getElementsByTagName('button');
var expensesItemBtn = btn[0]; 
var optionalexpensesBtn = btn[1];
var countBudgetBtn = btn[2];

var optionalexpenses = document.querySelectorAll('.optionalexpenses-item');

var income = document.querySelector('#income');
var savings = document.querySelector('#savings');
var sumValue = document.querySelector('#sum');
var percentValue = document.querySelector('#percent');
var year = document.querySelector('.year-value');
var month = document.querySelector('.month-value');
var day = document.querySelector('.day-value');

expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

var money, time;

start.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?');
    
    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
    appData.budjet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function(){
    var sum = 0;

    for(var i = 0; i < expensesItem.length; i++){
        var costItem = expensesItem[i].value;
        var costSum = expensesItem[++i].value;
    
        if( (typeof(costItem)) === 'string' && (typeof(costItem)) != null && costItem != '' && costSum != ''){
            appData.expenses[costItem] = costSum;
            sum += +costSum;

        } else {
            console.log('Error');
        }
    }
    expensesValue.textContent = sum;
    appData.sumExpenses = sum;
});
optionalexpensesBtn.addEventListener('click', function(){
    for(var i = 0; i < optionalexpenses.length; i++){
        var costOptItem = optionalexpenses[i].value;
        
        if( (typeof(costOptItem)) === 'string' && (typeof(costOptItem)) != null && costOptItem != ''){
            
            appData.optionalExpenses[i] = costOptItem;
        } else {
            console.log('Error');
        }
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ';  ';
    } 
});

countBudgetBtn.addEventListener('click', function(){
    if(appData.budjet != 'underfind'){
        appData.moneyPerDay = Math.round((appData.budjet-appData.sumExpenses)/30);
        daybudget.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay > 1000){
            levelValue.textContent = ('низкий уровень достатка'); 
        } else if(appData.moneyPerDay < 1000 || appData.moneyPerDay > 2000){
            levelValue.textContent = ('средний уровень достатка');
        } else if (appData.moneyPerDay < 2000){
            levelValue.textContent = ('високий уровень достатка');
        } else{
            levelValue.textContent = ('ошибка'); 
        }
    } else{

        budgetValue.textContent = ('ошибка');
    }
    
});

income.addEventListener('input', function(){
    var item = income.value;
    if((typeof(item)) === 'string' && item != '' && (typeof(item)) != null){
        appData.income = item.split(', ');
        incomeValue.textContent = appData.income;
    }
});

savings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if(appData.savings == true){
        var sum = sumValue.value;
        var persent = percentValue.value;
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*persent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener('input', function(){
    if(appData.savings == true){
        var sum = sumValue.value;
        var persent = percentValue.value;
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*persent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(appData);


