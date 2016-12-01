var Account = require('./account');

var Bank = function(){

  this.accounts = [];

};

Bank.prototype = {
  numberOfAccounts: function() {
    return this.accounts.length;
  },
  addAccount: function(name, balance, type){
    var account = new Account( name, balance, type);
    this.accounts.push(account);
  }
};

module.exports = Bank;
