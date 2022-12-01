document.getElementById("calculator").addEventListener("click", function() {

    //income


    const incomeInput = document.getElementById("income-input");
    const incomeInputText = parseFloat(incomeInput.value);
    //income error handling
    if (incomeInputText < 0) {
        return alert('please enter a positive number')
    }
    if (isNaN(incomeInputText)) {
        return alert('please enter a valid number')
    }


    //expenses
    //   food expenses
    const foodInput = document.getElementById("food-input");
    const foodInputText = parseFloat(foodInput.value);
    //food input error handling
    if (foodInputText < 0) {
        return alert('please enter a positive number')
    }
    if (isNaN(foodInputText)) {
        return alert('please enter a valid number')
    }


    // rent expenses
    const rentInput = document.getElementById("rent-input");
    const rentInputText = parseFloat(rentInput.value);
    //rent input error handling
    if (rentInputText < 0) {
        return alert('please enter a positive number')
    }
    if (isNaN(rentInputText)) {
        return alert('please enter a valid number')
    }
    //   clothes expenses
    const clothesInput = document.getElementById("clothes-input");
    const clothesInputText = parseFloat(clothesInput.value);
    //clothes input error handling
    if (clothesInputText < 0) {
        return alert('please enter a positive number')
    }
    if (isNaN(clothesInputText)) {
        return alert('please enter a valid number')
    }
    //   total expenses calculation
    const totalExpenses = foodInputText + rentInputText + clothesInputText;

    //   getting total expenses unit 
    const totalExpensesInput = document.getElementById("total-expenses");

    const totalExpensesText = totalExpensesInput.innerText;
    //   assigning all expenses into total expenses unit
    totalExpensesInput.innerText = totalExpenses;

    //balance and expenses starts
    //balance calculation
    const calCulatingBalance = incomeInputText - totalExpenses;

    //gettin blance unit
    const balanceInput = document.getElementById("balance");
    const balanceInputText = balanceInput.innerText;

    //error handling condition
    //if there is written any string
    if (calCulatingBalance < 0) {
        totalExpensesInput.innerText = '';
        balanceInput.innerText = '';
        return alert('you cannot spend more money than your income')
    } else {

        return (balanceInput.innerText = calCulatingBalance);

    }

});

//saving section handler
document.getElementById("saving-button").addEventListener("click", function() {
    //balance unit write again
    const balanceInput = document.getElementById("balance");
    const balanceInputText = balanceInput.innerText;

    //income input write again
    const incomeInput = document.getElementById("income-input");
    const incomeInputText = parseFloat(incomeInput.value);
    //getting saving input
    const savingInput = document.getElementById("saving-input");
    const savingInputText = parseFloat(savingInput.value);

    //getting saving unit
    const savingAmount = document.getElementById("saving-amount");
    const savingAmountText = parseFloat(savingAmount.innerText);

    //calculation of saving percentage
    const savingCalculation = incomeInputText * (savingInputText / 100);
    //assigning saving calculation to saving unit
    savingAmount.innerText = savingCalculation;




    // remaining balance calculation
    const remainingBalanceCalculation = balanceInput.innerText - savingAmount.innerText;

    // getting remaining Balance unit
    const remainingBalance = document.getElementById("remaining");
    const remainingBalanceText = remainingBalance.innerText;
    remainingBalance.innerText = remainingBalanceCalculation;

    //error handling condition of saving section
    if (remainingBalanceCalculation < 0) {
        savingAmount.innerText = '';
        remainingBalance.innerText = '';

        return alert('There is no enough balance for saving')
    }
    //if total expenses higher error handler
    if (totalExpensesText > incomeInputText) {
        return alert('you cannnot expense more than your income')
    }


});