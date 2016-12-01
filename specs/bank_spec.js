var assert = require('assert');
var Bank = require('../bank');

describe( "Bank", function() {

  var myBank = null;

  beforeEach(function(){
    myBank = new Bank();
  });

  it( "should have no accounts at start", function() {
    assert.equal( 0, myBank.accounts.length );
  });

  it("should have numberOfAccounts equal zero at start", function(){
    assert.equal( 0, myBank.numberOfAccounts() );
  });

  it("should increase numberOfAccounts when account added", function() {
    myBank.addAccount( "Matthew", 5000, "savings" );
    assert.equal( 1, myBank.numberOfAccounts() );
  });

  it("should find account by name", function(){
    var testName = "Matthew";
    var testBalance = 5000;
    var testType = "savings";
    myBank.addAccount(testName, testBalance, testType);
    var foundAccount = myBank.findAccount(testName);
    assert.equal( testName, foundAccount.name);
    assert.equal( testBalance, foundAccount.balance);
    assert.equal( testType, foundAccount.type);
  });

});
