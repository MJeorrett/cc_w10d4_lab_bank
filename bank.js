var Bank = function(){

  this.accounts = [];

};

Bank.prototype = {
  numberOfAccounts: function() {
    return this.accounts.length;
  }
};

module.exports = Bank;
