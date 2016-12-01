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
  },
  findAccount: function( accountName ) {

    var foundAccount = this.accounts.find( function( account ) {

      var found = account.name === accountName;
      return found;
    });

    return foundAccount;
  }
};

module.exports = Bank;
