// login button event holder
const loginBtn = document.getElementById('log-main-buttn');
loginBtn.addEventListener('click', function(){
    const loginWrapper = document.getElementById('login-wrapper');
    loginWrapper.style.display = 'none';
    const transitionArea = document.getElementById('transition-area');
    transitionArea.style.display = 'block';
})


// Show & hide password
var pass = document.getElementById('password');
function mypass(){
    if(pass.type=='password'){
        pass.type = 'text';
    } else{
        pass.type = 'password';
    }
}


// Deposit button event holder
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmoumt = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmoumt);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText('currentDeposit', depositNumber)
    updateSpanText("currentBalance", depositNumber);
    

    document.getElementById("depositAmount").value = ''
})

// Withdraw button event handler
const addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount')
    updateSpanText('currentWithdraw', withdrawNumber)
    updateSpanText('currentBalance', -1* withdrawNumber)
})

function getInputNumber(id){
   const amount = document.getElementById(id).value;
   document.getElementById(id).value = '';
   const amountNumber = parseFloat(amount);
   return amountNumber;
}


function updateSpanText(id, depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const currentBalanceTotal = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = currentBalanceTotal;
}