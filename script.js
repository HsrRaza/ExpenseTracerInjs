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

        // const category = categorySelect.value;
        if (isNaN(amount) || amount <= 0 || inputValueExpense.value.trim() === '') {
            alert("enter valid amount");
            return;
        }

        // store.push({ amount, categorySelect });

        Totalamount += amount;
        // console.log(Totalamount);


        incomeUpdate.textContent = Totalamount;
        balanceUpdate.textContent = Totalamount;

        inputValueExpense.value = '';  

         container = document.createElement('div');
        const h3One = document.createElement('h3');
        const h3Two = document.createElement('h3');
        const btnDel = document.createElement('button')


        //    const  category  = categorySelect.options;
         
        if(categorySelect.value === 'expense'){
            expenses+=amount;
             expenseUpdate.textContent= expenses;
             Totalamount-=expenses;
             balanceUpdate.textContent = Totalamount;
        }

        if (categorySelect.value === 'income') {
            // console.log(categorySelect.value);


            h3Two.textContent = `$${amount.toFixed(2)}`;
            h3One.textContent = `Income`;
            btnDel.textContent = "Delete"

            container.appendChild(h3One);
            container.appendChild(h3Two);
            container.appendChild(btnDel)
            container.classList.add('data');
            dataTostored.appendChild(container);
        } else if(categorySelect.value === 'expense'){
            
            //  expenses-=amount;
             


            h3Two.textContent = `$${amount.toFixed(2)}`;
            h3One.textContent = "Expense";
            btnDel.textContent = "Delete"

            container.appendChild(h3One);
            container.appendChild(h3Two);
            container.appendChild(btnDel)
            container.classList.add('data');
            dataTostored.appendChild(container);
        }




    }



    function resetAmount() {
        Totalamount = `$${parseFloat(0).toFixed(2)}`;
        // console.log(Totalamount);
        incomeUpdate.textContent = Totalamount;
        balanceUpdate.textContent = Totalamount;

        // h3One.textContent ='';
        // h3Two.textContent ='';
        // btnDel.textContent= '';
        // container.removeChild(h3One);
        // container.removeChild(h3Two)
        // container.removeChild(btnDel)
        // container.classList.remove('data');
        dataTostored.remove(container)




    }
























})







