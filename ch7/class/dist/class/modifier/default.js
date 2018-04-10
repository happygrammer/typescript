class Account {
    constructor(defaultBalance = 0, bankName = "happy bank", interestRate = 0.1) {
        this.bankName = bankName;
        this.interestRate = interestRate;
        this.balance = defaultBalance;
    }
    get getBalance() {
        return this.balance;
    }
    set setBalance(amount) {
        this.balance += amount;
    }
    deposite(depositeAmount) {
        this.setBalance = depositeAmount;
    }
    getInterestRate() {
        return this.interestRate;
    }
    getDefaultBalance() {
    }
}
class MyAccount extends Account {
    constructor() {
        super();
        this.deposite(1000);
        this.setBalance = 1000;
        console.log(`2번) 적금 : ${this.balance}원, ${this.getBalance}원 / 이율 : ${this.interestRate}, ${this.getInterestRate()}% / 은행명 : ${this.bankName} `);
    }
}
let account = new Account();
console.log(`1번) 적금 : ${account.balance}원, ${account.getBalance}원 / 이율 : ${account.interestRate}, ${account.getInterestRate()}% `);
let myAccount = new MyAccount();
