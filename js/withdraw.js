document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('withdraw-field');
    const previousDepositTotal = getTextElementValueById('total-withdraw');

    const newDiposiTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('total-withdraw', newDiposiTotal);

    const previousTotalBalance = getTextElementValueById('total-balance');
    const newBalanceTotal = previousTotalBalance - newDepositAmount;

    setTextElementValueById('total-balance', newBalanceTotal);
})