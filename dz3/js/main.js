var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var expenses = {};

/*for(var i = 0; i < 2; i++){
    var costItem = prompt('Введите обязательную статью расходов в этом месяце');
    var costSum = prompt('Во сколько обойдется');

    if( (typeof(costItem)) === 'string' && (typeof(costItem)) != null && costItem != '' && costSum != ''){
        expenses[costItem] = costSum;
    } else {
        console.log('Error');
    }
}*/

var i = 0;
while(i < 2){
    var costItem = prompt('Введите обязательную статью расходов в этом месяце');
    var costSum = prompt('Во сколько обойдется');

    if( (typeof(costItem)) === 'string' && (typeof(costItem)) != null && costItem != '' && costSum != ''){
        expenses[costItem] = costSum;
    } else {
        console.log('Error');
    }
    i++;
}
console.log(expenses);

var appData = {
    budjet: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: 0,
    income: 0,
    savings: false
};

console.log(appData);

alert(Math.round(appData.budjet/30));
