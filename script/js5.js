const account = {
    accountName: "Elias",
    balance: 1000,
    getBalance: function() {
        console.log(`Current balance: $${this.balance}`)
    },

    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            this.accountError("Deposit amount must be more than 0!");
        }
    },

    withdrawal: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount}. Remaining balance: $${this.balance}`);                                                                                                                                                                                                                                                                                                                                           
        } else if (amount > this.balance) {
            this.accountError("Insufficient funds!");
        } else {
            this.accountError("Withdrawal amount must be more than 0!")
        }
    },

    getAccountName: function() {
        console.log(`Account holder: ${this.accountName}`);
    },

    accountError: function() {
        console.log(`Account Error: ${message}`);
    },

    runInteractive: function() {
        console.log("Welcome to the Bank App!");
        this.getAccountName();

        let running = true;

        while (running) {
            console.log("\nChoose an action: deposit, withdraw, balance, exit");
            const action = prompt("What would you like to do?")

            if (action === "deposit") {
                const amount = Number(prompt("Enter amount to deposit: "));
                this.deposit(amount);
            
            } else if (action === "withdraw") {
                const amount = Number(prompt("Enter amount to withdraw: "));
                this.withdrawal(amount);

            } else if (action === "balance") {
                this.getBalance();
            
            }else if (action === "exit") {
                console.log("Thank you for using the Bank App. Goodbye!");
                running = false;
            
            } else {
                this.accountError("Invalid command! Please try again.")
            }
        }
    }
};

account.runInteractive();