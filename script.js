document.addEventListener('DOMContentLoaded', function () {



    const btnAddExpense = document.querySelectorAll('.btn');
    const inputValueExpense = document.getElementById('expenseInput');
    const incomeUpdate = document.getElementById('totalIncome');
    const balanceUpdate = document.getElementById('totalBlanace');
    const categorySelect = document.getElementById('opt')
    const expenseUpdate =document.getElementById('totalExpense');
    let container;
    const dataTostored = document.getElementById('box');

    

    // const amount = parseFloat(inputValueExpense.value);


    let Totalamount = parseFloat(0);
    let expenses = parseFloat(0);
    let balance = parseFloat(0);
    let store = [];



    btnAddExpense.forEach(function (e) {
        e.addEventListener("click", function (even) {
            if (even.target.id === "add") {

                getData();

            }

            else if (even.target.id === "reset") {

                resetAmount()

            };

        });
    });

    function getData() {
        const amount = parseFloat(inputValueExpense.value);

        
        if (isNaN(amount) || amount <= 0 || inputValueExpense.value.trim() === '') {
            alert("enter valid amount");
            return;
        }

    

        inputValueExpense.value = '';  

         container = document.createElement('div');
        const h3One = document.createElement('h3');
        const h3Two = document.createElement('h3');
        const btnDel = document.createElement('button')
        container.classList.add('data');


      
        if (categorySelect.value === 'income') {
            // console.log(categorySelect.value);
            Totalamount+=amount;
            balance+=amount;
            incomeUpdate.textContent = Totalamount;
            balanceUpdate.textContent=balance;



            h3Two.textContent = `$${amount.toFixed(2)}`;
            h3One.textContent = `Income`;
            btnDel.textContent = "Delete"

            container.appendChild(h3One);
            container.appendChild(h3Two);
            container.appendChild(btnDel)
            dataTostored.appendChild(container);

            btnDel.addEventListener('click', function(){
                Totalamount-=amount;
                balance-=amount;
                incomeUpdate.textContent = `$${Totalamount.toFixed(2)}`;
                balanceUpdate.textContent = `$${balance.toFixed(2)}`;
                container.remove();
                
                
                
           })
            
            
            
            
        } else if(categorySelect.value === 'expense'){
            
            //  expenses-=amount;
            expenses+=amount;
            expenseUpdate.textContent= `$${expenses.toFixed(2)}`;
            // Totalamount-=expenses;
            balance-=amount;
            balanceUpdate.textContent = `$${balance.toFixed(2)}`;


            h3Two.textContent = `$${amount.toFixed(2)}`;
            h3One.textContent = "Expense";
            btnDel.textContent = "Delete"

            container.appendChild(h3One);
            container.appendChild(h3Two);
            container.appendChild(btnDel)
            dataTostored.appendChild(container);

            btnDel.addEventListener('click', function(){
                expenses-=amount;
                balance+=amount;
                incomeUpdate.textContent = `$${expenses.toFixed(2)}`;
                balanceUpdate.textContent = `$${balance.toFixed(2)}`;
               
                container.remove();
                
                
                
           })
        }

       




    }



    function resetAmount() {
        Totalamount = `$${parseFloat(0).toFixed(2)}`;
        // console.log(Totalamount);
        incomeUpdate.textContent = Totalamount;
        balanceUpdate.textContent = Totalamount;
        expenseUpdate.textContent = Totalamount;

        
        dataTostored.remove(container)




    }
























})







