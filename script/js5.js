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
            this.accountError("Insufficient funds!"):
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

        while (true) {
            console.log("")
        }
    }

}