var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var expenses = {};
var costItem = prompt('Введите обязательную статью расходов в этом месяце');
expenses[costItem] = prompt('Во сколько обойдется');

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
