let sumIncome=0
let sumExpense=0
function newList() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myList").value;
    let incomeValue = document.getElementById("income").value;
    let expenseValue = document.getElementById("expense").value;
    let t = document.createTextNode(`${inputValue}  `);
    li.appendChild(t);
    let u = document.createTextNode(`+Rp.${incomeValue}`);
    let v = document.createTextNode(`-Rp.${expenseValue}`);
    if(incomeValue){
        li.appendChild(u)
    }
    if(expenseValue){
        li.appendChild(v)
    }
    if (inputValue === '') {
        alert("You must write something!");
    }
    else if(incomeValue==='' && expenseValue===''){
        alert("You must enter the number!")
    }
    else if(incomeValue && expenseValue){
        alert("please choose and fill one between income or expense!")
    }
    else if(incomeValue === '' && expenseValue || expenseValue==='' && incomeValue){
        sumIncome+=Number(incomeValue)
        sumExpense+=Number(expenseValue)
        document.getElementById("myUL").appendChild(li);
        document.getElementById("totalIncome").innerHTML = 'Your total income is = Rp.' + sumIncome;	
        document.getElementById("totalExpense").innerHTML = 'Your total expense is = Rp.' + sumExpense;
        if(sumIncome>sumExpense){
            document.getElementById("resume").innerHTML = `Horay! Your have Rp.${sumIncome-sumExpense} left`;
        }else if(sumExpense>sumIncome){
            document.getElementById("resume").innerHTML = `Your have Rp.${sumExpense-sumIncome} in debt. Keep your spirit up!`;
        }else if(sumExpense===sumIncome){
            document.getElementById("resume").innerHTML = `Fortunately, you don't have any money or debt`;
        }
    }
    document.getElementById("myList").value = "";
    document.getElementById("income").value = "";
    document.getElementById("expense").value = "";
}
