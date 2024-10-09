class BankAccount {
    private _balance: number; 
    public minimumBalance: number;

    constructor(initialBalance: number, minimumBalance: number) {
        this._balance = initialBalance;
        this.minimumBalance = minimumBalance;
    }

    public get balance(): number { 
        return this._balance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this._balance}`);
        }
    }

    public withdraw(amount: number): void {
        if (this._balance - amount >= this.minimumBalance) {
            this._balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}

const account = new BankAccount(1000, 100);
console.log(account.balance); // Outputs current balance
account.deposit(500); // Deposits money
account.withdraw(200); // Withdraws money
account.withdraw(1500); // Attempts to withdraw more than allowed