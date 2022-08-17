document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('total-deposit');

    const newDiposiTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('total-deposit', newDiposiTotal);

    const previousTotalBalance = getTextElementValueById('total-balance');
    const newBalanceTotal = previousTotalBalance + newDepositAmount;

    setTextElementValueById('total-balance', newBalanceTotal);
})

